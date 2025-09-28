'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Award, Shield, Heart, Users } from 'lucide-react';

export default function Info() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/info/info1.jpg',
    '/info/info2.jpg',
    '/info/info3.jpg',
    '/info/info4.jpg',
    '/info/info5.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const highlights = [
    {
      icon: Heart,
      title: "Person-Centred Care",
      description: "Tailored one-to-one support for each resident's unique needs"
    },
    {
      icon: Users,
      title: "Exceptional Teams",
      description: "Compassionate staff trained to Skills for Care standards"
    },
    {
      icon: Award,
      title: "Beyond Standards",
      description: "Exceeding CQC requirements with genuine care and respect"
    },
    {
      icon: Shield,
      title: "Home from Home",
      description: "Creating safe, nurturing environments where residents thrive"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-venturi-cream via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            A Home from Home with{' '}
            <span className="text-venturi-coral">Venturi</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-3xl mx-auto leading-relaxed">
            Where exceptional care meets genuine compassion, creating meaningful connections every day
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Image Carousel */}
          <div className="relative animate-slide-in-left">
            <div className="relative h-80 sm:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <Image
                src={images[currentImage]}
                alt={`Venturi Healthcare ${currentImage + 1}`}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority={currentImage === 0}
              />
              {/* Subtle overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-venturi-navy/20 to-transparent" />
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:bg-venturi-coral/10 border border-venturi-coral/20 rounded-full p-3 shadow-xl transition-all duration-300 hover-lift"
            >
              <ChevronLeft className="h-6 w-6 text-venturi-slate hover:text-venturi-coral transition-colors" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white hover:bg-venturi-coral/10 border border-venturi-coral/20 rounded-full p-3 shadow-xl transition-all duration-300 hover-lift"
            >
              <ChevronRight className="h-6 w-6 text-venturi-slate hover:text-venturi-coral transition-colors" />
            </button>

            {/* Enhanced Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-venturi-coral scale-125 shadow-lg' 
                      : 'bg-white/70 hover:bg-venturi-coral/70 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-in-right">
            {/* Main Content */}
            <div className="space-y-6 text-venturi-slate leading-relaxed text-lg">
              <p className="text-xl font-medium text-venturi-navy">
                At Venturi Healthcare, we are dedicated to delivering personalised, one-to-one care 
                tailored to each resident&apos;s unique needs. Our goal is to provide more than care — 
                we aim to create a true <span className="text-venturi-coral font-semibold">&quot;home from home&quot;</span> experience 
                where residents feel safe, respected, and valued every day.
              </p>
              
              <p>
                We understand that exceptional care starts with exceptional people. That&apos;s why we 
                invest in our teams, ensuring they not only have the tools and training to do their 
                jobs well, but also the compassion, passion, and commitment that define meaningful care.
              </p>
              
              <p>
                While we meet the standards set out by the Care Quality Commission (CQC), we are 
                proud to go above and beyond. All team members complete training guided by the 
                nationally recognised Skills for Care framework, equipping them with the knowledge 
                and empathy to provide truly person-centred support.
              </p>
              
              <p className="text-venturi-navy font-medium text-xl italic border-l-4 border-venturi-coral pl-6 py-2 bg-venturi-coral/5 rounded-r-lg">
                &quot;At Venturi, care is not just a job — it&apos;s about supporting others as you would 
                your own parents or grandparents. This is care delivered with heart, respect, 
                and purpose — and it&apos;s what drives us every single day.&quot;
              </p>
            </div>

            
          </div>
        </div>

        {/* Bottom CTA */}
        {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight.title}
                  className="p-6 bg-white rounded-2xl border border-venturi-coral/10 shadow-lg hover:shadow-xl hover:border-venturi-coral/30 transition-all duration-300 hover-lift"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <highlight.icon className="h-8 w-8 text-venturi-coral mb-3" />
                  <h4 className="font-semibold text-venturi-navy mb-2 text-sm lg:text-base">
                    {highlight.title}
                  </h4>
                  <p className="text-venturi-slate text-xs lg:text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-xl border border-venturi-coral/20 hover-lift">
            <div className="flex -space-x-2">
              <div className="w-12 h-12 rounded-full bg-venturi-coral/20 border-2 border-white flex items-center justify-center">
                <Heart className="h-6 w-6 text-venturi-coral" />
              </div>
              <div className="w-12 h-12 rounded-full bg-venturi-slate/20 border-2 border-white flex items-center justify-center">
                <Users className="h-6 w-6 text-venturi-slate" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-semibold text-venturi-navy">Ready to learn more about our approach?</p>
              <p className="text-venturi-slate text-sm">Discover how we put people first, every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}