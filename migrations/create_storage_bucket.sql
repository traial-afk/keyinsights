-- 1. Create the bucket 'completed-valuations'
INSERT INTO storage.buckets (id, name, public)
VALUES ('completed-valuations', 'completed-valuations', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Enable RLS (Usually already enabled, skipping to avoid permission errors)
-- ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Allow public read access to files (or restrict to authenticated users if preferred)
-- For now, we'll allow authenticated users to view files.
CREATE POLICY "Allow Authenticated Read"
ON storage.objects FOR SELECT
TO authenticated
USING (bucket_id = 'completed-valuations');

-- 4. Policy: Allow authenticated users to upload files (if needed from UI, otherwise admin only)
CREATE POLICY "Allow Authenticated Upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'completed-valuations');

-- 5. Policy: Allow users to delete their own files (optional)
CREATE POLICY "Allow Authenticated Delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'completed-valuations');
