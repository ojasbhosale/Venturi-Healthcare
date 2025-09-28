'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { Target, Award, MessageCircle, Heart, BookOpen, Users, Sparkles, ArrowRight } from 'lucide-react';

export default function CoreValues() {
  const [activeValue, setActiveValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const values = [
    {
      letter: "P",
      title: "Purpose",
      icon: Target,
      description: "We are driven by a clear understanding of why we do what we do: to enrich lives, honour legacies and make a meaningful difference every day, for our residents, their families, our colleagues and our community.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600"
    },
    {
      letter: "E",
      title: "Excellence",
      icon: Award,
      description: "We hold ourselves to the highest standards, delivering exceptional care and creating an environment where both residents and staff can thrive.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      letter: "O",
      title: "Openness",
      icon: MessageCircle,
      description: "We build trust through honest, respectful communication, welcoming feedback, sharing ideas, and embracing change as a path to continuous growth.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      letter: "P",
      title: "Passion",
      icon: Heart,
      description: "We are passionate about delivering exceptional care. We take pride in what we do and in making a real difference in people's lives.",
      color: "from-venturi-coral to-venturi-orange",
      bgColor: "bg-venturi-coral/10",
      textColor: "text-venturi-coral"
    },
    {
      letter: "L",
      title: "Learning",
      icon: BookOpen,
      description: "We are committed to personal and professional growth; empowering each other through ongoing development, reflection, and shared knowledge.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      letter: "E",
      title: "Empathy",
      icon: Users,
      description: "We actively listen and seek to understand before being understood, recognising the unique stories, feelings, and needs of others.",
      color: "from-venturi-slate to-venturi-blue",
      bgColor: "bg-venturi-slate/10",
      textColor: "text-venturi-slate"
    }
  ];

  return (
    <section
      className="relative py-20 lg:py-28 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/core-values.png')" }}
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-venturi-cream/90 to-white/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-venturi-coral/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-venturi-slate/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-venturi-coral/10 rounded-2xl mb-6">
            <Sparkles className="h-10 w-10 text-venturi-coral" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            Our Core{' '}
            <span className="text-venturi-coral">Values</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-4xl mx-auto leading-relaxed">
            At Venturi, in collaboration with our wider team, we have developed Core Values that 
            reflect our shared priorities and define how we support and show up for one another every day.
          </p>
        </div>

        {/* PEOPLE Acronym Showcase */}
        <div className="mb-20 animate-fade-in animation-delay-300">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-venturi-coral/20">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-venturi-navy">
              Our <span className="text-venturi-coral">PEOPLE</span> Values
            </h3>
            
            {/* Interactive PEOPLE Letters */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2 lg:space-x-4 bg-venturi-slate/5 rounded-2xl p-4">
                {values.map((value, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveValue(index)}
                    className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl font-bold text-2xl lg:text-3xl transition-all duration-500 transform hover:scale-110 ${
                      activeValue === index
                        ? `bg-gradient-to-br ${value.color} text-white shadow-2xl scale-110`
                        : 'bg-white text-venturi-slate hover:bg-venturi-coral/10 hover:text-venturi-coral shadow-lg'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {value.letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Value Display */}
            <div className="text-center max-w-4xl mx-auto">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-all duration-500 ${values[activeValue].bgColor}`}>
                {React.createElement(values[activeValue].icon, {
                  className: `h-10 w-10 ${values[activeValue].textColor}`
                })}
              </div>
              
              <h4 className={`text-3xl font-bold mb-4 transition-all duration-500 ${values[activeValue].textColor}`}>
                {values[activeValue].title}
              </h4>
              
              <p className="text-lg text-venturi-slate leading-relaxed transition-all duration-500">
                {values[activeValue].description}
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in-left animation-delay-500">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift border border-white/50 hover:border-venturi-coral/30 cursor-pointer ${
                activeValue === index ? 'ring-2 ring-venturi-coral ring-opacity-50 transform scale-105' : ''
              }`}
              onClick={() => setActiveValue(index)}
              style={{ animationDelay: `${index * 150 + 600}ms` }}
            >
              {/* Letter Badge */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white font-bold text-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {value.letter}
              </div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${value.bgColor}`}>
                {React.createElement(value.icon, {
                  className: `h-6 w-6 ${value.textColor}`
                })}
              </div>
              
              <h3 className={`text-xl font-bold mb-4 group-hover:${value.textColor} transition-colors duration-300`}>
                {value.title}
              </h3>
              
              <p className="text-venturi-slate leading-relaxed group-hover:text-venturi-navy transition-colors duration-300">
                {value.description}
              </p>

              {/* Hover Arrow */}
              <div className="flex justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowRight className={`h-5 w-5 ${value.textColor}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-20 animate-fade-in animation-delay-1000">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-venturi-slate to-venturi-blue rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl text-white font-bold mb-4">
              Living Our Values Every Day
            </h3>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              These values shape the way we work together, make decisions, and deliver on our mission. 
              They&apos;re not just words on a wall—they&apos;re the foundation of everything we do.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-6 w-6 text-venturi-coral" />
              <span className="font-semibold text-venturi-coral">The People Company</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}