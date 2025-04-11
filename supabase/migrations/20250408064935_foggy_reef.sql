/*
  # Remove authentication requirements

  1. Changes
    - Make user_id column nullable
    - Update RLS policies to allow public access for job posting
    - Keep admin-only access for viewing all posts

  2. Security
    - Maintain admin-only access for viewing all posts
    - Allow public access for job posting
*/

-- Make user_id nullable
ALTER TABLE job_posts ALTER COLUMN user_id DROP NOT NULL;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON job_posts;
DROP POLICY IF EXISTS "Enable read access for users own posts" ON job_posts;
DROP POLICY IF EXISTS "Enable admin read access" ON job_posts;
DROP POLICY IF EXISTS "Enable update for users own posts" ON job_posts;
DROP POLICY IF EXISTS "Enable delete for users own posts" ON job_posts;

-- Create new policies
CREATE POLICY "Allow public to create posts"
ON job_posts FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "Allow admin to read all posts"
ON job_posts FOR SELECT
TO authenticated
USING (auth.jwt() ->> 'email' = 'insighttutoringbd@gmail.com');