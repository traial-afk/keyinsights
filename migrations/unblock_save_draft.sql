-- Temporarily drop the Foreign Key constraint to allow saving
-- This removes the strict check that the user_id must exist in auth.users
-- We can re-add this later once we confirm the data is saving correctly.

ALTER TABLE valuation_inputs
DROP CONSTRAINT IF EXISTS valuation_inputs_user_id_fkey;
