
import { Button } from '@/components/ui/button';
import { Star, Users, Clock, Award } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    {
      id: 1,
      title: "Reading Quran Basics",
      price: "$99.00",
      rating: 4.8,
      students: "1.2k Students",
      duration: "8 Weeks",
      level: "Beginner",
      image: "📖"
    },
    {
      id: 2,
      title: "Quran & Tajweed",
      price: "$35.00",
      rating: 4.9,
      students: "956 Students", 
      duration: "12 Weeks",
      level: "Intermediate",
      image: "🎵"
    },
    {
      id: 3,
      title: "Quran Recitation",
      price: "$70.00",
      rating: 4.7,
      students: "2.1k Students",
      duration: "16 Weeks", 
      level: "Advanced",
      image: "🕌"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Explore Featured <span className="text-emerald-600">Courses</span>
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
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{course.title}</h3>
                <p className="text-2xl font-bold text-emerald-600 mb-4">{course.price}</p>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-600 ml-2">({course.rating})</span>
                </div>

                {/* Course Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Users size={16} className="mr-2" />
                    {course.students}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Clock size={16} className="mr-2" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <Award size={16} className="mr-2" />
                    {course.level}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white">
                    Register Now
                  </Button>
                  <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                    See Details
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
