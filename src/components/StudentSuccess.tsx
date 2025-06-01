
const StudentSuccess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Creating student <span className="text-emerald-600">success</span> with our{" "}
              <span className="text-emerald-600">Al Quran</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              We understand that everyone's schedule is different. That's why we offer flexible learning options.
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-emerald-600 text-xl">📚</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Expert instructors leading the way</h3>
                <p className="text-sm text-slate-600">Learn from certified Islamic scholars with years of teaching experience.</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-yellow-600 text-xl">⭐</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Personalized learning experience</h3>
                <p className="text-sm text-slate-600">Customized lessons adapted to your learning pace and style.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Interactive learning sessions</h3>
                <p className="text-sm text-slate-600">Engage with fellow students through group activities and discussions.</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-purple-600 text-xl">🏆</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Certification upon completion</h3>
                <p className="text-sm text-slate-600">Receive official certificates recognized by Islamic institutions.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {/* Easy Quran Learning Card */}
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-2">Easy Quran learning through online</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Access our comprehensive online platform from anywhere, anytime. Learn at your own pace with interactive lessons.
                  </p>
                  <button className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* How to Memorize Quran Card */}
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-2">How to memorize Quran <span className="italic">study online</span></h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Proven memorization techniques and structured programs to help you memorize the Holy Quran effectively.
                  </p>
                  <button className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentSuccess;
