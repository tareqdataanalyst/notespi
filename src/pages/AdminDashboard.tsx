import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { toast } from 'react-hot-toast';

interface JobPost {
  id: string;
  medium: string;
  class: string;
  subject: string;
  location: string;
  schedule: string;
  budget: string;
  mobile: string;
  description: string;
  created_at: string;
  status: string;
}

function AdminDashboard() {
  const [jobPosts, setJobPosts] = useState<JobPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobPosts();
  }, []);

  const fetchJobPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('job_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setJobPosts(data || []);
    } catch (error) {
      toast.error('Failed to fetch job posts');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading job posts...</p>
          </div>
        ) : jobPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-gray-600">No job posts found</p>
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {jobPosts.map((post) => (
                <li key={post.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-600 truncate">
                          {post.subject} - {post.medium}
                        </p>
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {post.status}
                          </p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="sm:grid sm:grid-cols-2 sm:gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Class: {post.class}</p>
                            <p className="text-sm text-gray-500">Location: {post.location}</p>
                            <p className="text-sm text-gray-500">Schedule: {post.schedule}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Budget: {post.budget}</p>
                            <p className="text-sm text-gray-500">Mobile: {post.mobile}</p>
                            <p className="text-sm text-gray-500">Posted: {formatDate(post.created_at)}</p>
                          </div>
                        </div>
                        {post.description && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">Description: {post.description}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;