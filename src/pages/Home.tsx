import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Shield, Clock } from 'lucide-react';

function Home() {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      title: "Verified Tutors",
      description: "All our tutors are thoroughly vetted and background-checked for your peace of mind."
    },
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Safe & Secure",
      description: "Your safety is our priority. We ensure a secure environment for finding the perfect tutor."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      title: "Quick Responses",
      description: "Get responses from qualified tutors within hours of posting your requirement."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Find the perfect</span>
                  <span className="block text-indigo-600">home tutor for your child</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Post your requirements and connect with qualified tutors in your area. Get personalized learning support for your child's academic success.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-full shadow">
                    <Link to="/post-job" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
                      Post a Tutoring Job
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Student studying with tutor"
          />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Insight Tutoring?</h2>
            <p className="mt-4 text-lg text-gray-500">We make finding the right tutor easy and secure</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-2 bg-indigo-50 rounded-lg inline-block">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-gray-500">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-500">Find a tutor in 3 simple steps</p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Post Your Requirements</h3>
                <p className="mt-2 text-gray-500">Share your tutoring needs and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Get Matched</h3>
                <p className="mt-2 text-gray-500">Receive responses from qualified tutors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 mx-auto bg-indigo-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Choose & Connect</h3>
                <p className="mt-2 text-gray-500">Select the best tutor and start learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;