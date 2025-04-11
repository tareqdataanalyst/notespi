import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Facebook } from 'lucide-react';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>
      
      <div className="bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="w-6 h-6 text-indigo-600" />
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a href="mailto:insighttutoring@gmail.com" className="text-lg text-gray-900 hover:text-indigo-600">
                insighttutoring@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-indigo-600" />
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <a href="tel:01518908566" className="text-lg text-gray-900 hover:text-indigo-600">
                01518908566
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Facebook className="w-6 h-6 text-indigo-600" />
            <div>
              <p className="text-sm font-medium text-gray-500">Facebook</p>
              <a 
                href="https://www.facebook.com/profile.php?id=61573077029070" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg text-gray-900 hover:text-indigo-600"
              >
                Visit our Facebook Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;