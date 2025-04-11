/*
  # Fix RLS policies for job_posts table

  1. Changes
    - Drop existing policies that are not working correctly
    - Add new policies for:
      - Allowing authenticated users to create posts
      - Allowing post creators to read their own posts
      - Allowing admin to read all posts
      - Allowing post creators to update their own posts
      - Allowing post creators to delete their own posts

  2. Security
    - Maintains RLS enabled on job_posts table
    - Ensures proper authentication checks
    - Preserves admin access
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Allow admin to read all posts" ON job_posts;
DROP POLICY IF EXISTS "Allow users to create posts" ON job_posts;

-- Add user_id column to track post ownership
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'job_posts' 
    AND column_name = 'user_id'
  ) THEN
    ALTER TABLE job_posts ADD COLUMN user_id UUID REFERENCES auth.users(id);
  END IF;
END $$;

-- Update existing rows to use the current user's ID
UPDATE job_posts SET user_id = auth.uid() WHERE user_id IS NULL;

-- Make user_id required for new posts
ALTER TABLE job_posts ALTER COLUMN user_id SET NOT NULL;

-- Create new policies

-- Allow authenticated users to create posts (automatically sets user_id)
CREATE POLICY "Enable insert for authenticated users only" 
ON job_posts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

-- Allow users to read their own posts
CREATE POLICY "Enable read access for users own posts" 
ON job_posts FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- Allow admin to read all posts
CREATE POLICY "Enable admin read access" 
ON job_posts FOR SELECT 
TO authenticated 
USING ((auth.jwt() ->> 'email'::text) = 'insighttutoringbd@gmail.com'::text);

-- Allow users to update their own posts
CREATE POLICY "Enable update for users own posts" 
ON job_posts FOR UPDATE 
TO authenticated 
USING (auth.uid() = user_id) 
WITH CHECK (auth.uid() = user_id);

-- Allow users to delete their own posts
CREATE POLICY "Enable delete for users own posts" 
ON job_posts FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);