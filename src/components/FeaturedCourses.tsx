
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, Award } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "أساسيات قراءة القرآن",
      price: "٩٩ دولار",
      rating: 4.8,
      students: "١٢٠٠ طالب",
      duration: "٨ أسابيع",
      level: "مبتدئ",
      image: "📖"
    },
    {
      id: 2,
      title: "القرآن والتجويد",
      price: "٣٥ دولار",
      rating: 4.9,
      students: "٩٥٦ طالب", 
      duration: "١٢ أسبوع",
      level: "متوسط",
      image: "🎵"
    },
    {
      id: 3,
      title: "تلاوة القرآن",
      price: "٧٠ دولار",
      rating: 4.7,
      students: "٢١٠٠ طالب",
      duration: "١٦ أسبوع", 
      level: "متقدم",
      image: "🕌"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            استكشف <span className="text-emerald-600">الدورات المميزة</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Course Image */}
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-8 flex items-center justify-center">
                <div className="text-6xl">{course.image}</div>
              </div>

              {/* Course Content */}
              <div className="p-6 text-right">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{course.title}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-4">{course.price}</p>

                {/* Rating */}
                <div className="flex items-center justify-end space-x-1 space-x-reverse mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-600 mr-2">({course.rating})</span>
                </div>

                {/* Course Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-end text-sm text-slate-600">
                    <span className="mr-2">{course.students}</span>
                    <Users size={16} />
                  </div>
                  <div className="flex items-center justify-end text-sm text-slate-600">
                    <span className="mr-2">{course.duration}</span>
                    <Clock size={16} />
                  </div>
                  <div className="flex items-center justify-end text-sm text-slate-600">
                    <span className="mr-2">{course.level}</span>
                    <Award size={16} />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                    سجل الآن
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    عرض التفاصيل
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
