
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Right Content */}
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                اشترك في نشرتنا الإخبارية
              </h2>
              <p className="text-slate-300 mb-6">
                ابق محدثاً بأحدث الدورات والأحداث الإسلامية والموارد التعليمية. انضم إلى مجتمعنا من المتعلمين المتفانين.
              </p>
              
              {/* Newsletter Features */}
              <div className="space-y-3">
                <div className="flex items-center justify-end space-x-3 space-x-reverse">
                  <span className="text-slate-300">نصائح الدراسة الإسلامية الأسبوعية</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-end space-x-3 space-x-reverse">
                  <span className="text-slate-300">إعلانات الدورات الجديدة</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-end space-x-3 space-x-reverse">
                  <span className="text-slate-300">الوصول للمحتوى الحصري</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-end space-x-3 space-x-reverse">
                  <span className="text-slate-300">تحديثات أحداث المجتمع</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Left Content - Newsletter Form */}
            <div className="bg-slate-700 p-8 rounded-2xl">
              <form className="space-y-4">
                <div className="text-right">
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    الاسم الكامل
                  </label>
                  <Input 
                    id="name"
                    placeholder="أدخل اسمك الكامل" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 text-right"
                    dir="rtl"
                  />
                </div>
                
                <div className="text-right">
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    عنوان البريد الإلكتروني
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="أدخل عنوان بريدك الإلكتروني" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400 text-right"
                    dir="rtl"
                  />
                </div>

                <div className="text-right">
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    مجالات الاهتمام
                  </label>
                  <select className="w-full p-3 bg-slate-600 border border-slate-500 rounded-md text-white text-right" dir="rtl">
                    <option value="">اختر اهتمامك</option>
                    <option value="quran-basics">أساسيات القرآن</option>
                    <option value="tajweed">التجويد</option>
                    <option value="memorization">حفظ القرآن</option>
                    <option value="arabic">اللغة العربية</option>
                    <option value="islamic-studies">الدراسات الإسلامية</option>
                  </select>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  اشترك الآن
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
