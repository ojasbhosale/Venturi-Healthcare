'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Users, Home } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    const video = document.getElementById("heroVideo") as HTMLVideoElement | null;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= video.duration - 3) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
            id="heroVideo"
            autoPlay
            muted
            playsInline
            preload="auto"
            className="absolute top-[-17%] w-full h-[134%] object-cover opacity-95"
        >
            <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Enhanced overlay with Venturi navy tone */}
        <div className="absolute inset-0 bg-gradient-to-br from-venturi-navy/60 via-venturi-slate/50 to-venturi-blue/60" />
      </div>     
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Animated icons */}
        <div className="flex justify-center space-x-8 mb-8 animate-fade-in">
          <div className="flex flex-col items-center space-y-2 animate-slide-in-left">
            <Heart className="h-8 w-8 text-venturi-coral animate-pulse" />
            <span className="text-sm font-medium">Care</span>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-fade-in animation-delay-300">
            <Users className="h-8 w-8 text-venturi-coral animate-pulse" />
            <span className="text-sm font-medium">People</span>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-slide-in-right">
            <Home className="h-8 w-8 text-venturi-coral animate-pulse" />
            <span className="text-sm font-medium">Home</span>
          </div>
        </div>

        <div className="animate-fade-in animation-delay-500">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-white">Our Commitment</span>
            <span className="block text-venturi-coral text-4xl md:text-5xl lg:text-6xl font-light italic mt-2">
              The People Company
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Always, Putting Our People First
            <span className="block text-lg md:text-xl text-gray-200 mt-4">
              Compassionate care • Meaningful connections • A home from home
            </span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animation-delay-700">
          <Button 
            size="lg" 
            className="bg-venturi-coral hover:bg-venturi-orange text-white px-10 py-4 text-lg font-medium rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover-lift border-2 border-venturi-coral hover:border-venturi-orange"
          >
            Contact Us Today
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white hover:border-venturi-coral px-10 py-4 text-lg font-medium rounded-xl transition-all duration-300 hover-lift"
          >
            Learn More
          </Button>
        </div>

        {/* Values Preview */}
        <div className="mt-12 animate-fade-in animation-delay-1000">
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium">
            {['Purpose', 'Excellence', 'Openness', 'Passion', 'Learning', 'Empathy'].map((value, index) => (
              <span 
                key={value}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-venturi-coral/20 hover:border-venturi-coral/50 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100 + 1200}ms` }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}