-- Drop the unique constraint that prevents multiple drafts
ALTER TABLE valuation_inputs
DROP CONSTRAINT IF EXISTS valuation_inputs_user_id_status_key;
