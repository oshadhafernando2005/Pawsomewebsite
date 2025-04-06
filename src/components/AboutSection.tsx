
import React from 'react';
import { Dog, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petblue-dark mb-4">
            About PawsomeCare
          </h2>
          <p className="text-gray-600 text-lg">
            We're on a mission to revolutionize pet care through technology and community,
            ensuring every pet receives the best care possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-sm">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Dog className="h-8 w-8 text-petblue" />
            </div>
            <h3 className="text-xl font-bold text-petblue-dark mb-3">Pet-First Approach</h3>
            <p className="text-gray-600">
              Everything we do is centered around the wellbeing and happiness of pets.
              Our technologies and communities are designed with pets' needs at heart.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-sm">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-petgreen" />
            </div>
            <h3 className="text-xl font-bold text-petblue-dark mb-3">Innovation in Care</h3>
            <p className="text-gray-600">
              We leverage cutting-edge AI technology to provide personalized care recommendations
              and support for pet parents, making pet care easier and more effective.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl shadow-sm">
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-petorange" />
            </div>
            <h3 className="text-xl font-bold text-petblue-dark mb-3">Community Driven</h3>
            <p className="text-gray-600">
              We believe in the power of community to support pet rescue efforts and share
              knowledge, connecting pet lovers across the globe for a common purpose.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-petblue-dark mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                Founded by a team of pet lovers and tech enthusiasts, PawsomeCare was born from
                a shared vision to combine technology with compassion for animals.
              </p>
              <p className="text-gray-600">
                What started as a small project to help local shelters has evolved into a
                comprehensive platform that serves pet parents and rescues worldwide, using AI
                to revolutionize how we care for our animal companions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-petblue/10 rounded-full mix-blend-multiply filter blur-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Team with rescued animals" 
                className="relative z-10 rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
