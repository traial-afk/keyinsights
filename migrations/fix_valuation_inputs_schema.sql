-- 1. Add 'id' column if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'id') THEN
        ALTER TABLE valuation_inputs ADD COLUMN id UUID DEFAULT gen_random_uuid() PRIMARY KEY;
    END IF;
END $$;

-- 2. Ensure other columns exist
DO $$
BEGIN
    -- user_id
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'user_id') THEN
        ALTER TABLE valuation_inputs ADD COLUMN user_id UUID REFERENCES auth.users(id) NOT NULL;
    END IF;

    -- status
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'status') THEN
        -- Create type if not exists
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'valuation_status') THEN
            CREATE TYPE valuation_status AS ENUM ('draft', 'pending', 'completed');
        END IF;
        ALTER TABLE valuation_inputs ADD COLUMN status valuation_status DEFAULT 'draft';
    END IF;

    -- form_data
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'form_data') THEN
        ALTER TABLE valuation_inputs ADD COLUMN form_data JSONB DEFAULT '{}'::jsonb;
    END IF;

    -- file_paths
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'file_paths') THEN
        ALTER TABLE valuation_inputs ADD COLUMN file_paths JSONB DEFAULT '[]'::jsonb;
    END IF;

    -- timestamps
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'created_at') THEN
        ALTER TABLE valuation_inputs ADD COLUMN created_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'valuation_inputs' AND column_name = 'updated_at') THEN
        ALTER TABLE valuation_inputs ADD COLUMN updated_at TIMESTAMPTZ DEFAULT NOW();
    END IF;
END $$;

-- 3. Ensure Unique Constraint (user_id, status)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint WHERE conname = 'valuation_inputs_user_id_status_key'
    ) THEN
        ALTER TABLE valuation_inputs ADD CONSTRAINT valuation_inputs_user_id_status_key UNIQUE (user_id, status);
    END IF;
END $$;
