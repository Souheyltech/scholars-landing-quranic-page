
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-emerald-900 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
      <div className="absolute bottom-20 right-20 w-6 h-6 bg-emerald-400 rounded-full opacity-60"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full opacity-40"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content */}
          <div className="space-y-6 text-right">
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-emerald-800/30 px-3 py-1 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
              <span>القرآن الكريم</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              اقرأ <span className="text-yellow-400">القرآن</span> بطريقة منظمة وواضحة
            </h1>
            
            <p className="text-lg text-slate-300 max-w-lg">
              <span className="text-yellow-400 font-semibold">(سورة المزمل، الآية 4)</span>
            </p>
            
            <p className="text-slate-300 max-w-lg">
              دورات شاملة في القرآن الكريم والدراسات الإسلامية مناسبة لجميع الأعمار ومستويات المهارة.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:flex-row-reverse">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8">
                اعثر على دورتك
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-800">
                سجل مجاناً
              </Button>
            </div>
          </div>

          {/* Left Content - Course Card */}
          <div className="flex justify-center">
            <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600 max-w-sm w-full">
              <div className="bg-slate-600 rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg flex items-center justify-center">
                  <div className="text-white text-4xl">📖</div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-right">أساسيات قراءة القرآن</h3>
              <p className="text-2xl font-bold text-emerald-400 mb-4 text-right">٩٩ دولار</p>
              
              <div className="flex items-center justify-end space-x-1 space-x-reverse mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-slate-300 mr-2">(4.8)</span>
              </div>
              
              <div className="space-y-2 mb-6">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  سجل الآن
                </Button>
                <Button variant="outline" className="w-full border-slate-500 text-white hover:bg-slate-600">
                  عرض التفاصيل
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
