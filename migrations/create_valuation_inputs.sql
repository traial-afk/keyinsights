-- 1. Create Enum Type
CREATE TYPE valuation_status AS ENUM ('draft', 'pending', 'completed');

-- 2. Create Table
CREATE TABLE IF NOT EXISTS valuation_inputs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) NOT NULL,
    status valuation_status DEFAULT 'draft',
    form_data JSONB DEFAULT '{}'::jsonb,
    file_paths JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id, status) -- Optional: Prevent multiple drafts if desired, or just handle in app
);

-- 3. Enable RLS
ALTER TABLE valuation_inputs ENABLE ROW LEVEL SECURITY;

-- 4. RLS Policies
CREATE POLICY "Users can view their own inputs" 
ON valuation_inputs FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert/update their own inputs" 
ON valuation_inputs FOR ALL 
USING (auth.uid() = user_id);

-- 5. Storage Bucket (Run this if 'valuation-files' bucket doesn't exist)
INSERT INTO storage.buckets (id, name, public) 
VALUES ('valuation-files', 'valuation-files', false)
ON CONFLICT (id) DO NOTHING;

-- 6. Storage Policies
CREATE POLICY "Users can upload their own valuation files"
ON storage.objects FOR INSERT
WITH CHECK ( bucket_id = 'valuation-files' AND auth.uid() = owner );

CREATE POLICY "Users can view their own valuation files"
ON storage.objects FOR SELECT
USING ( bucket_id = 'valuation-files' AND auth.uid() = owner );
