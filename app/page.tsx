import Hero from '@/components/Hero/Hero';
import AboutMain from '@/components/AboutMain/AboutMain'
import ServiceMain from '@/components/ServiceMain/ServiceMain'
import WorkPlan from '@/components/WorkPlan/WorkPlan'
export default function Home() {
  return (
    <>
      <Hero />
      <AboutMain />
      <ServiceMain />
      <WorkPlan/>
    </>
  );
}