
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-800/30 px-3 py-1 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>AL QURAN</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recite the <span className="text-yellow-400">Quran</span> in an orderly and clear manner
            </h1>
            
            <p className="text-lg text-slate-300 max-w-lg">
              <span className="text-yellow-400 font-semibold">(Surah Muzammil, Verse 4)</span>
            </p>
            
            <p className="text-slate-300 max-w-lg">
              Comprehensive Arabic Quran and Islamic studies courses suitable for all ages and skill levels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                Find your course
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                Sign up for free
              </Button>
            </div>
          </div>

          {/* Right Content - Course Card */}
          <div className="flex justify-center">
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 max-w-sm w-full">
              <div className="bg-slate-600 rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl">📖</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">Reading Quran Basics</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-4">$99.00</p>
              
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-slate-300 ml-2">(4.8)</span>
              </div>
              
              <div className="space-y-2 mb-6">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Register Now
                </Button>
                <Button variant="outline" className="w-full border-slate-500 text-white hover:bg-slate-600">
                  See Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
