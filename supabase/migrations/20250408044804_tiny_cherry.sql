/*
  # Create job posts table

  1. New Tables
    - `job_posts`
      - `id` (uuid, primary key)
      - `medium` (text)
      - `class` (text)
      - `subject` (text)
      - `location` (text)
      - `schedule` (text)
      - `budget` (text)
      - `mobile` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `status` (text)

  2. Security
    - Enable RLS on `job_posts` table
    - Add policy for authenticated admin users to read all posts
    - Add policy for authenticated users to create posts
*/

CREATE TABLE IF NOT EXISTS job_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  medium text NOT NULL,
  class text NOT NULL,
  subject text NOT NULL,
  location text NOT NULL,
  schedule text NOT NULL,
  budget text NOT NULL,
  mobile text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE job_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow admin to read all posts"
  ON job_posts
  FOR SELECT
  TO authenticated
  USING (auth.jwt() ->> 'email' = 'insighttutoringbd@gmail.com');

CREATE POLICY "Allow users to create posts"
  ON job_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);