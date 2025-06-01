
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedCourses from '@/components/FeaturedCourses';
import StudentSuccess from '@/components/StudentSuccess';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-messiri">
      <Header />
      <Hero />
      <FeaturedCourses />
      <StudentSuccess />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
