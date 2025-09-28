'use client';

import { MessageSquare, Phone, Users, TrendingUp, Star, Heart, CheckCircle, ArrowRight } from 'lucide-react';

export default function Feedback() {
  const feedbackChannels = [
    {
      icon: Users,
      title: "Home Manager Meeting",
      description: "Arrange a face-to-face meeting for open, honest conversation",
      action: "Schedule Meeting",
      recommended: true
    },
    {
      icon: Phone,
      title: "Head Office Team",
      description: "Call 01772 321 480 to speak with Senior Management",
      action: "Call Now",
      recommended: false
    },
    {
      icon: MessageSquare,
      title: "Written Feedback",
      description: "Submit detailed feedback through our online form",
      action: "Submit Form",
      recommended: false
    }
  ];

  const feedbackTypes = [
    { icon: Star, label: "Positive Experiences", color: "text-green-600", bg: "bg-green-50" },
    { icon: TrendingUp, label: "Improvement Suggestions", color: "text-blue-600", bg: "bg-blue-50" },
    { icon: MessageSquare, label: "General Comments", color: "text-purple-600", bg: "bg-purple-50" },
    { icon: Heart, label: "Care Concerns", color: "text-venturi-coral", bg: "bg-venturi-coral/10" }
  ];

  const impactStats = [
    { number: "95%", label: "Feedback Response Rate", subtitle: "within 48 hours" },
    { number: "100%", label: "Issues Addressed", subtitle: "with action plans" },
    { number: "4.8/5", label: "Family Satisfaction", subtitle: "average rating" }
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-venturi-cream/40 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-venturi-coral/10 rounded-2xl mb-6">
            <MessageSquare className="h-10 w-10 text-venturi-coral" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            Your Voice{' '}
            <span className="text-venturi-coral">Shapes Our Care</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-3xl mx-auto leading-relaxed">
            Every piece of feedback helps us grow, improve, and deliver the exceptional care your family deserves
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-venturi-coral/10">
              <h3 className="text-2xl font-bold text-venturi-navy mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-venturi-coral mr-3" />
                Growing Through Feedback
              </h3>
              
              <div className="space-y-6 text-venturi-slate leading-relaxed text-lg">
                <p className="text-venturi-navy font-medium text-xl">
                  We are always eager to learn and improve so we can provide the{' '}
                  <span className="text-venturi-coral font-semibold">best possible care</span>, 
                  adapting our ways of working to meet the unique needs of every resident.
                </p>
                
                <p>
                  We understand the value of regular feedback, so both family members and residents 
                  are encouraged to share their experiences openly and honestly. Whether the feedback 
                  is positive, constructive, a suggestion, or a complaint, we want to hear it.
                </p>
                
                <div className="bg-venturi-coral/5 border-l-4 border-venturi-coral rounded-r-xl p-6">
                  <p className="font-medium text-venturi-navy text-lg">
                    Every piece of feedback—good or bad—is an opportunity for us to grow and build 
                    on our successes. By working together, we can ensure that the care we provide 
                    truly meets your needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Feedback Types */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-venturi-coral/10">
              <h3 className="text-xl font-bold text-venturi-navy mb-6">
                All Feedback Welcome
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {feedbackTypes.map((type, index) => (
                  <div 
                    key={index}
                    className={`${type.bg} rounded-xl p-4 flex items-center space-x-3 hover-lift transition-all duration-200`}
                  >
                    <type.icon className={`h-6 w-6 ${type.color}`} />
                    <span className="font-medium text-gray-700 text-sm">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-gradient-to-br from-venturi-slate to-venturi-blue rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl text-white font-bold mb-6 text-center">Our Impact</h3>
              <div className="space-y-4">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center border-b border-white/20 last:border-b-0 pb-4 last:pb-0">
                    <div className="text-3xl font-bold text-venturi-coral">{stat.number}</div>
                    <div className="text-sm font-medium opacity-90">{stat.label}</div>
                    <div className="text-xs opacity-70">{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-venturi-coral/5 rounded-2xl p-6 border border-venturi-coral/20">
              <h4 className="font-bold text-venturi-navy mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 text-venturi-coral mr-2" />
                Quick Feedback
              </h4>
              <p className="text-sm text-venturi-slate mb-4">
                Have something to share right now? Send us a quick message.
              </p>
              <button className="w-full bg-venturi-coral hover:bg-venturi-orange text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 hover-lift text-sm">
                Send Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Feedback Channels */}
        <div className="mb-16 animate-fade-in animation-delay-500">
          <h3 className="text-3xl font-bold text-venturi-navy text-center mb-12">
            How to Share Your Feedback
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {feedbackChannels.map((channel, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-xl border transition-all duration-300 hover-lift relative ${
                  channel.recommended 
                    ? 'border-venturi-coral/30 shadow-venturi-coral/10' 
                    : 'border-venturi-coral/10'
                }`}
                style={{ animationDelay: `${index * 200 + 600}ms` }}
              >
                {channel.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-venturi-coral text-white text-xs font-bold px-3 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    channel.recommended ? 'bg-venturi-coral/10' : 'bg-venturi-slate/10'
                  }`}>
                    <channel.icon className={`h-8 w-8 ${
                      channel.recommended ? 'text-venturi-coral' : 'text-venturi-slate'
                    }`} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-venturi-navy mb-4">
                    {channel.title}
                  </h4>
                  
                  <p className="text-venturi-slate mb-6 leading-relaxed">
                    {channel.description}
                  </p>
                  
                  <button className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 hover-lift flex items-center justify-center ${
                    channel.recommended
                      ? 'bg-venturi-coral hover:bg-venturi-orange text-white'
                      : 'bg-venturi-slate hover:bg-venturi-blue text-white'
                  }`}>
                    {channel.action}
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fade-in animation-delay-1000">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-venturi-coral/20 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-3xl font-bold text-venturi-navy mb-4">
                  Ready to Share Your Experience?
                </h3>
                <p className="text-xl text-venturi-slate mb-6">
                  Whether you&apos;re satisfied or have concerns, we&apos;d love to hear from you. 
                  Your feedback drives our continuous improvement.
                </p>
                <p className="text-venturi-slate leading-relaxed">
                  <strong className="text-venturi-coral">Call us at 01772 321 480</strong> to discuss your feedback with our Senior Management Team, 
                  or arrange a meeting with your Home Manager today.
                </p>
              </div>
              
              <div className="flex flex-col space-y-4">
                <button className="bg-venturi-coral hover:bg-venturi-orange text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover-lift shadow-lg">
                  Start a Conversation
                </button>
                <button className="bg-transparent hover:bg-venturi-coral/5 text-venturi-slate border-2 border-venturi-slate hover:border-venturi-coral hover:text-venturi-coral px-8 py-4 rounded-xl font-medium transition-all duration-300">
                  Schedule Meeting
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 text-center animate-fade-in animation-delay-1200">
          <div className="max-w-3xl mx-auto bg-venturi-coral/5 rounded-2xl p-8 border border-venturi-coral/20">
            <blockquote className="text-lg text-venturi-navy italic mb-4 leading-relaxed">
              &quot;We listen carefully to all feedback and use it to continuously improve the care we provide. 
              Your voice shapes our future—and helps us become the care provider your family deserves.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-2">
              <Heart className="h-5 w-5 text-venturi-coral" />
              <p className="font-semibold text-venturi-coral">The Venturi Healthcare Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}