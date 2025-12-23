-- 1. Fix "Server save failed" (Unique Constraint)
-- This tells the database that a user can only have ONE 'draft' at a time.
-- It allows the code to safely "Update" the existing draft instead of failing.
ALTER TABLE valuation_inputs
ADD CONSTRAINT valuation_inputs_user_id_status_key UNIQUE (user_id, status);

-- 2. Fix "Bucket not found" (Storage)
-- This creates the missing folder for file uploads.
INSERT INTO storage.buckets (id, name, public)
VALUES ('valuation-files', 'valuation-files', false)
ON CONFLICT (id) DO NOTHING;

-- 3. Allow Uploads (Security Policies)
-- These allow logged-in users to upload and view their own files.
-- We use DO blocks to avoid errors if policies already exist.
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'Users can upload their own valuation files'
    ) THEN
        CREATE POLICY "Users can upload their own valuation files"
        ON storage.objects FOR INSERT
        WITH CHECK ( bucket_id = 'valuation-files' AND auth.uid() = owner );
    END IF;

    IF NOT EXISTS (
        SELECT 1 FROM pg_policies WHERE policyname = 'Users can view their own valuation files'
    ) THEN
        CREATE POLICY "Users can view their own valuation files"
        ON storage.objects FOR SELECT
        USING ( bucket_id = 'valuation-files' AND auth.uid() = owner );
    END IF;
END
$$;
