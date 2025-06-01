
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Happy Student Testimonials
        </h2>

        {/* Testimonial Card */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
            </div>
            
            <div className="flex justify-center space-x-1 mb-6">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed">
              "The online Quran classes have been transformative for my spiritual journey. The instructors are knowledgeable, patient, and truly dedicated to helping students understand and recite the Quran properly. I highly recommend this program to anyone seeking authentic Islamic education."
            </blockquote>

            <div className="border-t pt-6">
              <p className="font-semibold text-slate-800">Ahmad Rahman</p>
              <p className="text-slate-600 text-sm">Student, Advanced Quran Studies</p>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
