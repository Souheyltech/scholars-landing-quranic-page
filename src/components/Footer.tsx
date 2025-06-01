
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4 text-right">
            <div className="flex items-center justify-end space-x-2 space-x-reverse">
              <span className="font-semibold">جمعية العلماء المسلمين</span>
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">جع</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              مكرسة لتوفير التعليم الإسلامي الأصيل ودراسات القرآن للمسلمين في جميع أنحاء العالم.
            </p>
            <div className="flex justify-end space-x-4 space-x-reverse">
              <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-right">
            <h3 className="font-semibold text-lg">روابط سريعة</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">مهمتنا</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">المدرسون</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">قصص النجاح</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">المدونة</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4 text-right">
            <h3 className="font-semibold text-lg">الدورات</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">أساسيات القرآن</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">التجويد</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الحفظ</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">اللغة العربية</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">الدراسات الإسلامية</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 text-right">
            <h3 className="font-semibold text-lg">التواصل</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>📧 info@muslimscholars.org</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 ١٢٣ شارع المركز الإسلامي<br />سبرينغفيلد، إيل ٦٢٧٠١</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-right">
          <p className="text-slate-400 text-sm">
            © ٢٠٢٤ جمعية العلماء المسلمين. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">سياسة الخصوصية</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">شروط الخدمة</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">سياسة ملفات تعريف الارتباط</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
