-- 1. Create the private bucket 'invoices'
INSERT INTO storage.buckets (id, name, public)
VALUES ('invoices', 'invoices', false)
ON CONFLICT (id) DO UPDATE SET public = false;

-- 2. Allow Authenticated Read (Users can only read their own folder)
-- We use the user's ID as the folder name.
CREATE POLICY "Allow Users to Read Own Invoices"
ON storage.objects FOR SELECT
TO authenticated
USING (
    bucket_id = 'invoices' 
    AND (storage.foldername(name))[1] = auth.uid()::text
);

-- 3. Allow Authenticated Upload (Optional, if you want to upload via UI for testing)
-- In production, likely only admin/service role uploads, but this helps for testing.
CREATE POLICY "Allow Users to Upload Own Invoices"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (
    bucket_id = 'invoices' 
    AND (storage.foldername(name))[1] = auth.uid()::text
);
