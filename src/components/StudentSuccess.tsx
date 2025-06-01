
const StudentSuccess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Right Content */}
          <div className="space-y-6 text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              إنشاء <span className="text-emerald-600">نجاح الطلاب</span> مع{" "}
              <span className="text-emerald-600">القرآن الكريم</span>
            </h2>
            
            <p className="text-slate-600 leading-relaxed">
              نحن نفهم أن جدول كل شخص مختلف. لهذا السبب نقدم خيارات تعلم مرنة.
            </p>

            {/* Success Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-xl text-right">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 mr-auto">
                  <span className="text-emerald-600 text-xl">📚</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">مدرسون خبراء يقودون الطريق</h3>
                <p className="text-sm text-slate-600">تعلم من علماء إسلاميين معتمدين بسنوات من الخبرة التعليمية.</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl text-right">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mr-auto">
                  <span className="text-yellow-600 text-xl">⭐</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">تجربة تعلم شخصية</h3>
                <p className="text-sm text-slate-600">دروس مخصصة تتناسب مع وتيرة وأسلوب تعلمك.</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl text-right">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mr-auto">
                  <span className="text-blue-600 text-xl">🎯</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">جلسات تعلم تفاعلية</h3>
                <p className="text-sm text-slate-600">تفاعل مع زملائك الطلاب من خلال الأنشطة الجماعية والمناقشات.</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl text-right">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mr-auto">
                  <span className="text-purple-600 text-xl">🏆</span>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">شهادة عند الإنجاز</h3>
                <p className="text-sm text-slate-600">احصل على شهادات رسمية معترف بها من المؤسسات الإسلامية.</p>
              </div>
            </div>
          </div>

          {/* Left Content - Feature Cards */}
          <div className="space-y-6">
            {/* Easy Quran Learning Card */}
            <div className="bg-emerald-50 p-6 rounded-2xl">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-semibold text-slate-800 mb-2">تعلم القرآن بسهولة عبر الإنترنت</h3>
                  <p className="text-sm text-slate-600 mb-4">
                    ادخل إلى منصتنا الشاملة عبر الإنترنت من أي مكان وفي أي وقت. تعلم بوتيرتك الخاصة مع دروس تفاعلية.
                  </p>
                  <button className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors">
                    اعرف المزيد
                  </button>
                </div>
              </div>
            </div>

            {/* How to Memorize Quran Card */}
            <div className="bg-slate-50 p-6 rounded-2xl">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧠</span>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="font-semibold text-slate-800 mb-2">كيفية حفظ القرآن <span className="italic">دراسة عبر الإنترنت</span></h3>
                  <p className="text-sm text-slate-600 mb-4">
                    تقنيات حفظ مثبتة وبرامج منظمة لمساعدتك على حفظ القرآن الكريم بفعالية.
                  </p>
                  <button className="text-sm bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-900 transition-colors">
                    اعرف المزيد
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
