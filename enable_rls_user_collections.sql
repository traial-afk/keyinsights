-- Enable RLS on the table
ALTER TABLE "User_Collections" ENABLE ROW LEVEL SECURITY;

-- Allow users to view their own profile
CREATE POLICY "Users can view own profile"
ON "User_Collections"
FOR SELECT
USING (auth.uid() = user_id);

-- Allow users to update their own profile
CREATE POLICY "Users can update own profile"
ON "User_Collections"
FOR UPDATE
USING (auth.uid() = user_id);

-- Allow users to insert their own profile (needed for signup)
CREATE POLICY "Users can insert own profile"
ON "User_Collections"
FOR INSERT
WITH CHECK (auth.uid() = user_id);
