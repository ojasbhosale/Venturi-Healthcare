import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Hero from '@/components/sections/hero';
import Info from '@/components/sections/info';
import Commitment from '@/components/sections/commitment';
import CoreValues from '@/components/sections/core-values';
import Mission from '@/components/sections/mission';
import Feedback from '@/components/sections/feedback';
import Complaints from '@/components/sections/complaints';

export default function OurCommitmentPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Info />
      <Commitment />
      <CoreValues />
      <Mission />
      <Feedback />
      <Complaints />
      <Footer />
    </div>
  );
}