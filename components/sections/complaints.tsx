'use client';

import { ArrowUpRight, MessageCircle, CheckCircle, Phone, MapPin, Mail, Shield } from 'lucide-react';

export default function Complaints() {
  const processSteps = [
    {
      step: "1",
      title: "Contact Home Manager",
      description: "Speak to us verbally or in writing - we're here to listen",
      icon: MessageCircle,
      timeframe: "Immediate"
    },
    {
      step: "2", 
      title: "Acknowledgment",
      description: "We'll acknowledge your complaint within 2 working days",
      icon: CheckCircle,
      timeframe: "Within 2 days"
    },
    {
      step: "3",
      title: "Investigation",
      description: "Thorough investigation and comprehensive response",
      icon: Shield,
      timeframe: "Within 28 days"
    }
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "01772 321 480" },
    { icon: Mail, label: "Email", value: "enquiries@venturihealthcare.co.uk" },
    { icon: MapPin, label: "Address", value: "Unit 10, Sceptre Court, Preston, PR5 6AW" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-venturi-cream/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-venturi-coral/10 rounded-2xl mb-6">
            <MessageCircle className="h-10 w-10 text-venturi-coral" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            Complaints{' '}
            <span className="text-venturi-coral">Procedure</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-3xl mx-auto leading-relaxed">
            Your voice matters. Every complaint helps us learn, grow, and provide better care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-venturi-coral/10">
              <h3 className="text-2xl font-bold text-venturi-navy mb-6 flex items-center">
                <Shield className="h-8 w-8 text-venturi-coral mr-3" />
                We Value Your Feedback
              </h3>
              
              <div className="space-y-6 text-venturi-slate leading-relaxed text-lg">
                <p className="text-venturi-navy font-medium text-xl">
                  Complaints are just as important as positive feedback.{' '}
                  <span className="text-venturi-coral">You can&apos;t learn anything from getting full marks.</span>
                </p>
                
                <p>
                  Any complaints you have will be treated seriously and dealt with as soon as possible. 
                  If you aren&apos;t happy with our care in the home, please let us know—don&apos;t just suffer in silence.
                </p>
                
                <div className="bg-venturi-coral/5 border-l-4 border-venturi-coral rounded-r-xl p-6">
                  <p className="font-medium text-venturi-navy">
                    Contact the Home Manager, either verbally or in writing. We will acknowledge 
                    any complaints within two days and will complete an investigation and get back 
                    to you within 28 days.
                  </p>
                </div>
              </div>

              {/* Policy Link */}
              <div className="mt-8 p-4 bg-venturi-slate/5 rounded-xl border border-venturi-slate/20">
                <a 
                  href="#" 
                  className="text-venturi-coral hover:text-venturi-orange font-semibold flex items-center text-lg transition-colors duration-200 group"
                >
                  <ArrowUpRight className="mr-2 h-5 w-5 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  Complaints Policy & Procedure
                </a>
                <p className="text-venturi-slate text-sm mt-2">
                  Download our complete complaints policy for detailed information
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-venturi-navy mb-6">
              Our Complaints Process
            </h3>
            
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-lg border border-venturi-coral/10 hover-lift relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-venturi-coral rounded-xl flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-venturi-navy text-lg flex items-center">
                        <step.icon className="h-5 w-5 text-venturi-coral mr-2" />
                        {step.title}
                      </h4>
                      <span className="text-sm font-medium text-venturi-coral bg-venturi-coral/10 px-3 py-1 rounded-full">
                        {step.timeframe}
                      </span>
                    </div>
                    <p className="text-venturi-slate leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connecting line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-9 -bottom-6 w-0.5 h-12 bg-venturi-coral/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Managing Director Contact Section */}
<div className="mt-20 animate-fade-in animation-delay-800">
  <div className="bg-gradient-to-br from-venturi-slate to-venturi-blue rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
    
    {/* Responsive grid: single column on small screens */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      {/* Text Section */}
      <div>
        <h3 className="text-3xl text-white font-bold mb-4">
          Still need to talk?
        </h3>
        <p className="text-xl mb-6 opacity-90">
          If you&apos;re still unhappy with our reply or just want to have a confidential chat, 
          you&apos;re more than welcome to contact our Managing Director directly.
        </p>
        <p className="text-lg opacity-75">
          We believe in complete transparency and are committed to resolving any concerns 
          at the highest level.
        </p>
      </div>
      
      {/* Contact Card */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full max-w-md mx-auto lg:mx-0">
        <h4 className="text-xl font-bold mb-4 text-venturi-coral">
          Managing Director Contact
        </h4>
        <div className="space-y-3">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex items-center space-x-3">
              <info.icon className="h-5 w-5 text-venturi-coral flex-shrink-0" />
              <div>
                <p className="text-sm opacity-75">{info.label}</p>
                <p className="font-extralight sm:font-medium">{info.value}</p>
              </div>
            </div>
          ))}
        </div>
        
        <button className="mt-6 w-full bg-venturi-coral hover:bg-venturi-orange text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift">
          Contact Managing Director
        </button>
      </div>

    </div>
  </div>
</div>


        {/* Bottom Assurance */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-venturi-slate leading-relaxed">
              Your feedback—whether positive or concerning—helps us maintain our commitment to{' '}
              <span className="font-semibold text-venturi-coral">exceptional care</span>. 
              Every complaint is an opportunity for us to improve and better serve our residents and families.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}