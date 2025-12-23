-- Add the missing unique constraint to allow ON CONFLICT upserts
ALTER TABLE valuation_inputs
ADD CONSTRAINT valuation_inputs_user_id_status_key UNIQUE (user_id, status);
