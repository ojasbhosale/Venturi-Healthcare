'use client';

import { Heart, Users, Home, Shield, Lightbulb, Target, Compass, Star } from 'lucide-react';

export default function Mission() {
  const beliefs = [
    {
      icon: Heart,
      title: "Care is a relationship, not transactional",
      description: "We build genuine connections that go beyond basic care provision"
    },
    {
      icon: Users,
      title: "Every resident is someone's family",
      description: "They deserve to feel respected, safe and at home in our care"
    },
    {
      icon: Shield,
      title: "Every staff member deserves support",
      description: "An environment where they can thrive and lead with empathy"
    }
  ];

  const missionPillars = [
    {
      icon: Target,
      title: "Daily Purpose",
      description: "Making each moment meaningful through intentional acts of care"
    },
    {
      icon: Compass,
      title: "Guided Values",
      description: "Kindness, integrity, and connection in everything we do"
    },
    {
      icon: Home,
      title: "Person-Centred",
      description: "Compassionate care that honours lives and legacies"
    },
    {
      icon: Lightbulb,
      title: "Staff Growth",
      description: "Fostering a culture where our team feels empowered and valued"
    }
  ];

  const coreValues = ['Purpose', 'Excellence', 'Openness', 'Passion', 'Learning', 'Empathy'];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-venturi-cream/20 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-venturi-coral/10 rounded-2xl mb-6">
            <Compass className="h-10 w-10 text-venturi-coral" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            Our{' '}
            <span className="text-venturi-coral">Mission Statement</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-3xl mx-auto leading-relaxed">
            Guiding every decision, every action, and every moment of care we provide
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="mb-20 animate-fade-in animation-delay-300">
          <div className="relative bg-gradient-to-br from-venturi-slate to-venturi-blue rounded-3xl p-8 lg:p-12 text-white shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-10 left-10 w-20 h-20 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Star className="h-12 w-12 text-venturi-coral" />
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed text-center mb-8 italic">
                &quot;Our daily mission is to make each moment meaningful for us and for those 
                around us through acts of kindness, integrity, and connection. We provide 
                compassionate, person-centred care that honours the lives and legacies of 
                our residents and their families, while fostering a culture where our staff 
                feel empowered, valued, and inspired to grow.&quot;
              </blockquote>
              
              <div className="text-center">
                <p className="text-venturi-coral font-semibold text-lg">
                  — Venturi Healthcare Mission Statement —
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Pillars */}
        <div className="mb-20 animate-slide-in-left animation-delay-500">
          <h3 className="text-3xl font-bold text-venturi-navy text-center mb-12">
            Built on Four Pillars
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-venturi-coral/10 hover:shadow-xl hover:border-venturi-coral/30 transition-all duration-300 hover-lift text-center"
                style={{ animationDelay: `${index * 150 + 600}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-venturi-coral/10 rounded-2xl mb-4">
                  <pillar.icon className="h-8 w-8 text-venturi-coral" />
                </div>
                <h4 className="font-bold text-venturi-navy mb-3 text-lg">
                  {pillar.title}
                </h4>
                <p className="text-venturi-slate text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Beliefs Section */}
        <div className="mb-20 animate-slide-in-right animation-delay-700">
          <div className="bg-venturi-coral/5 rounded-3xl p-8 lg:p-12 border border-venturi-coral/20">
            <h3 className="text-3xl font-bold text-venturi-navy mb-8 text-center flex items-center justify-center">
              <Heart className="h-8 w-8 text-venturi-coral mr-3" />
              At Venturi Healthcare, We Believe
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {beliefs.map((belief, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-venturi-coral/10 hover-lift"
                  style={{ animationDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-venturi-coral/10 rounded-xl flex items-center justify-center">
                        <belief.icon className="h-6 w-6 text-venturi-coral" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-venturi-navy mb-2 text-lg leading-tight">
                        {belief.title}
                      </h4>
                      <p className="text-venturi-slate text-sm leading-relaxed">
                        {belief.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PEOPLE Values */}
        <div className="animate-fade-in animation-delay-1000">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-venturi-navy mb-4">
              Our <span className="text-venturi-coral">PEOPLE</span> Values
            </h3>
            <p className="text-xl text-venturi-slate max-w-2xl mx-auto">
              Six core values that define who we are and guide how we work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreValues.map((value, index) => (
              <div 
                key={value}
                className="bg-white rounded-2xl p-6 shadow-lg border border-venturi-coral/10 hover:shadow-xl hover:border-venturi-coral/30 hover:bg-venturi-coral/5 transition-all duration-300 hover-lift text-center group"
                style={{ animationDelay: `${index * 100 + 1100}ms` }}
              >
                <div className="text-3xl font-bold text-venturi-coral mb-2 group-hover:scale-110 transition-transform duration-300">
                  {value[0]}
                </div>
                <div className="font-semibold text-venturi-navy text-sm">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 animate-fade-in animation-delay-1200">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-venturi-coral/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-venturi-navy mb-4">
              Experience Our Mission in Action
            </h3>
            <p className="text-venturi-slate mb-6 text-lg">
              See how our mission statement comes to life in the daily care and support we provide to our residents and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-venturi-coral hover:bg-venturi-orange text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover-lift shadow-lg">
                Visit Our Homes
              </button>
              <button className="bg-transparent hover:bg-venturi-coral/5 text-venturi-slate border-2 border-venturi-slate hover:border-venturi-coral hover:text-venturi-coral px-8 py-3 rounded-xl font-medium transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}