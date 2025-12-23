-- 1. Re-enable RLS (just in case it was disabled)
ALTER TABLE valuation_inputs ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing policies to start fresh (avoids conflicts)
DROP POLICY IF EXISTS "Users can view their own inputs" ON valuation_inputs;
DROP POLICY IF EXISTS "Users can insert/update their own inputs" ON valuation_inputs;
DROP POLICY IF EXISTS "Enable insert for users based on user_id" ON valuation_inputs;
DROP POLICY IF EXISTS "Enable select for users based on user_id" ON valuation_inputs;
DROP POLICY IF EXISTS "Enable update for users based on user_id" ON valuation_inputs;

-- 3. Create Precise Policies

-- Allow users to SEE their own rows
CREATE POLICY "Enable select for users based on user_id"
ON valuation_inputs FOR SELECT
USING (auth.uid() = user_id);

-- Allow users to INSERT new rows (Check ensures they can only create for themselves)
CREATE POLICY "Enable insert for users based on user_id"
ON valuation_inputs FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Allow users to UPDATE their own rows
-- USING: Checks if they can see the row before updating
-- WITH CHECK: Ensures they don't change the user_id to someone else
CREATE POLICY "Enable update for users based on user_id"
ON valuation_inputs FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Allow users to DELETE their own rows
CREATE POLICY "Enable delete for users based on user_id"
ON valuation_inputs FOR DELETE
USING (auth.uid() = user_id);
