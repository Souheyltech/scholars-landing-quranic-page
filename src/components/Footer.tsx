
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">اس</span>
              </div>
              <span className="font-semibold">Association of Muslim Scholars</span>
            </div>
            <p className="text-slate-400 text-sm">
              Dedicated to providing authentic Islamic education and Quranic studies for Muslims worldwide.
            </p>
            <div className="flex space-x-4">
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
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Courses</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Quran Basics</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Tajweed</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Memorization</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Arabic Language</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Islamic Studies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-2 text-slate-400 text-sm">
              <p>📧 info@muslimscholars.org</p>
              <p>📞 +1 (555) 123-4567</p>
              <p>📍 123 Islamic Center St<br />Springfield, IL 62701</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 Association of Muslim Scholars. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
