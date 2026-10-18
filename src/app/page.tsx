import dynamic from 'next/dynamic';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkOverview from '@/components/WorkOverview';
import SelectedWork from '@/components/SelectedWork';
import FeaturedSkills from '@/components/FeaturedSkills';
import CollaborationTabs from '@/components/CollaborationTabs';
import ResumeSection from '@/components/ResumeSection';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const MotionController = dynamic(() => import('@/components/MotionController'), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <div className="scroll-bar" id="sbar" />
      <MotionController />
      <TopBar />
      <Navbar />
      <Hero />
      <WorkOverview />
      <SelectedWork />
      <FeaturedSkills />
      <CollaborationTabs />
      <ResumeSection />
      <ExperienceTimeline />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
