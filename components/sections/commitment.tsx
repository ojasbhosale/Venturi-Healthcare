'use client';

import { Award, TrendingUp, Users, Heart, CheckCircle, Star } from 'lucide-react';

export default function Commitment() {
  const commitmentPoints = [
    {
      icon: Award,
      title: "Regulatory Excellence",
      description: "Regularly assessed by regulated authorities with feedback driving continuous improvement"
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Guided by openness, we evolve through honest conversations and external input"
    },
    {
      icon: Users,
      title: "Expert Leadership",
      description: "Head of Clinical Operations ensures standards across all homes"
    },
    {
      icon: Heart,
      title: "Empathetic Care",
      description: "Leading with empathy, recognizing unique needs and stories of every resident"
    }
  ];

  const qualityFeatures = [
    "Regular Senior Management Team visits",
    "Collaborative problem-solving approach",
    "Shared learning and growth opportunities", 
    "Creative solution implementation",
    "Continuous reflection and improvement"
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-white via-venturi-cream/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-venturi-coral/10 rounded-2xl mb-6">
            <Star className="h-10 w-10 text-venturi-coral" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-venturi-navy mb-6">
            Our Commitment to{' '}
            <span className="text-venturi-coral">Quality Care</span>
          </h2>
          <p className="text-xl text-venturi-slate max-w-3xl mx-auto leading-relaxed">
            Excellence isn&apos;t just our goal—it&apos;s our daily promise to every resident and their family
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start mb-16">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-6 text-venturi-slate leading-relaxed text-lg">
              <p className="text-xl font-medium text-venturi-navy">
                Our passion is to provide every resident with the{' '}
                <span className="text-venturi-coral font-semibold">highest standard of care</span>. 
                All of our homes are regularly assessed by regulated authorities, and we actively 
                use their feedback as part of our commitment to excellence and continuous improvement.
              </p>
              
              <p>
                Guided by our core value of <span className="font-semibold text-venturi-navy">openness</span>, 
                we welcome external input and honest conversations that help us evolve and grow. 
                Our Head of Clinical Operations and Quality Officer works closely with teams across 
                all homes to ensure we uphold our standards and deliver care that makes a meaningful 
                difference every day.
              </p>
              
              <p>
                As part of our quality assurance programme, members of the Senior Management Team 
                regularly visit each home. Their role is to offer support, share new and creative 
                ideas, and collaborate with teams to implement practical solutions.
              </p>
              
              <div className="bg-venturi-coral/5 border-l-4 border-venturi-coral rounded-r-xl p-6 my-8">
                <p className="text-venturi-navy font-medium text-lg italic">
                  &quot;We lead with empathy, recognising the unique needs and stories of every resident. 
                  By living our values each day, we aim to provide the very best in &apos;home from home&apos; 
                  care — care that is heartfelt, respectful, and continually improving.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-venturi-coral/10 hover-lift">
              <h3 className="text-2xl font-bold text-venturi-navy mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-venturi-coral mr-3" />
                Quality Assurance Features
              </h3>
              <div className="space-y-4">
                {qualityFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-venturi-coral/5 transition-colors duration-200"
                  >
                    <CheckCircle className="h-5 w-5 text-venturi-coral mt-0.5 flex-shrink-0" />
                    <span className="text-venturi-slate font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-gradient-to-br from-venturi-slate to-venturi-blue rounded-2xl p-8 text-white shadow-xl hover-lift">
              <h3 className="text-xl text-white font-bold mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-venturi-coral">100%</div>
                  <div className="text-sm opacity-90">CQC Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-venturi-coral">24/7</div>
                  <div className="text-sm opacity-90">Quality Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commitment Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in animation-delay-500">
          {commitmentPoints.map((point, index) => (
            <div 
              key={point.title}
              className="bg-white rounded-2xl p-6 shadow-lg border border-venturi-coral/10 hover:shadow-xl hover:border-venturi-coral/30 transition-all duration-300 hover-lift text-center"
              style={{ animationDelay: `${index * 100 + 600}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-venturi-coral/10 rounded-2xl mb-4">
                <point.icon className="h-8 w-8 text-venturi-coral" />
              </div>
              <h3 className="font-bold text-venturi-navy mb-3 text-lg">
                {point.title}
              </h3>
              <p className="text-venturi-slate text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 animate-fade-in animation-delay-1000">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-venturi-coral/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-venturi-navy mb-4">
              Experience Our Commitment Firsthand
            </h3>
            <p className="text-venturi-slate mb-6 text-lg">
              See how our dedication to quality care makes a difference in the lives of our residents and their families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-venturi-coral hover:bg-venturi-orange text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover-lift shadow-lg">
                Schedule a Visit
              </button>
              <button className="bg-transparent hover:bg-venturi-coral/5 text-venturi-slate border-2 border-venturi-slate hover:border-venturi-coral hover:text-venturi-coral px-8 py-3 rounded-xl font-medium transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}