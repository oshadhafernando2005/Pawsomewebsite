import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; 

const HeroSection = () => {
  const navigate = useNavigate(); // ✅ Hook must be here

  return (
    <div className="relative bg-gradient-to-b from-orange-100 to-white pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-lg">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full">
              <Heart className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Caring for pets like family</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-orange-700">
              Smart Pet Care Solutions for Modern Pet Parents
            </h1>

            <p className="text-lg text-gray-700">
              Providing innovative solutions for pet care with AI assistance 
              and a supportive rescue community to ensure your pets live their best lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg py-6 px-6">
                Get Started
              </Button>
            
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              {["AI Powered", "Rescue Support", "24/7 Assistance"].map((text, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="rounded-full bg-orange-200 p-1">
                    <Check className="h-4 w-4 text-orange-600" />
                  </div>
                  <span className="ml-2 text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden md:flex justify-center">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl"></div>

            <img 
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
              alt="Cute pet" 
              className="relative z-10 w-80 h-auto rounded-2xl shadow-lg animate-float"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default HeroSection;
