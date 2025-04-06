import React from 'react';
import { PawPrint, HeartHandshake, Bot } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white text-gray-800">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-600 mb-6 text-center">
          About Pawsome
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          At Pawsome, we believe pets are family. We're on a mission to make pet care smarter, simpler, and more compassionate.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition">
            <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
              <PawPrint className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To support pet owners with AI-powered tools and a vibrant rescue network to ensure every pet lives a healthy and happy life.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition">
            <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
              <Bot className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">AI Assistance</h3>
            <p className="text-gray-600">
              From personalized pet food recommendations to real-time health advice, our chatbot is here 24/7 to help pet parents.
            </p>
          </div>

          <div className="p-6 border rounded-2xl shadow hover:shadow-md transition">
            <div className="bg-orange-100 p-3 rounded-full w-fit mb-4">
              <HeartHandshake className="text-orange-600 w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold text-orange-700 mb-2">Rescue Support</h3>
            <p className="text-gray-600">
              We partner with local rescue teams to connect loving families with pets in need and provide ongoing support.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700">
            Whether you're a first-time pet parent or a seasoned animal lover, Pawsome is your go-to companion for smart pet care.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
