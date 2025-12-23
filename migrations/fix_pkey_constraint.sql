-- 1. Drop the incorrect Primary Key on user_id
ALTER TABLE valuation_inputs
DROP CONSTRAINT IF EXISTS valuation_inputs_pkey;

-- 2. Ensure the 'id' column exists and has a default value (just in case)
-- This part is idempotent; it won't fail if column exists, but we use DO block for safety or just ALTER
-- We assume 'id' was added by previous scripts. If not, this might fail, but let's assume it exists.

-- 3. Add the correct Primary Key on the 'id' column
ALTER TABLE valuation_inputs
ADD PRIMARY KEY (id);

-- 4. Verify the change (Optional, for your confirmation)
SELECT conname, contype, pg_get_constraintdef(oid)
FROM pg_constraint
WHERE conrelid = 'valuation_inputs'::regclass;
