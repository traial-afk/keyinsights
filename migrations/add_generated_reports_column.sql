-- Add generated_reports column to valuation_inputs
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'generated_reports') THEN
        ALTER TABLE valuation_inputs ADD COLUMN generated_reports JSONB DEFAULT '[]'::jsonb;
    END IF;
END $$;
