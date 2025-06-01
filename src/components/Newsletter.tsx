
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-slate-300 mb-6">
                Stay updated with the latest courses, Islamic events, and educational resources. Join our community of dedicated learners.
              </p>
              
              {/* Newsletter Features */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Weekly Islamic study tips</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">New course announcements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Exclusive content access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">Community event updates</span>
                </div>
              </div>
            </div>

            {/* Right Content - Newsletter Form */}
            <div className="bg-slate-700 p-8 rounded-2xl">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input 
                    id="name"
                    placeholder="Enter your full name" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="Enter your email address" 
                    className="bg-slate-600 border-slate-500 text-white placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium mb-2">
                    Areas of Interest
                  </label>
                  <select className="w-full p-3 bg-slate-600 border border-slate-500 rounded-md text-white">
                    <option value="">Select your interest</option>
                    <option value="quran-basics">Quran Basics</option>
                    <option value="tajweed">Tajweed</option>
                    <option value="memorization">Quran Memorization</option>
                    <option value="arabic">Arabic Language</option>
                    <option value="islamic-studies">Islamic Studies</option>
                  </select>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  Subscribe Now
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
