import { useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, Palette, Award } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX - innerWidth / 2) / innerWidth;
      const y = (clientY - innerHeight / 2) / innerHeight;
      imageRef.current.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(1.05)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <div
          ref={imageRef}
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: 'scale(1.05)' }}
        >
          <img
            src="/hero-cloisonne.jpg"
            alt="景泰蓝艺术"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      {/* Animated Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-blue-500/20 rounded-full rotate-slow opacity-30" />
      <div className="absolute bottom-40 right-20 w-48 h-48 border border-amber-500/20 rounded-full rotate-slow opacity-20" style={{ animationDirection: 'reverse' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full pulse-glow" />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-amber-500 rounded-full pulse-glow" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-20 pb-24 sm:pb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">中央民族大学社会实践团队</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-white mb-2">探索</span>
            <span className="block text-gradient mb-2">景泰蓝</span>
            <span className="block text-white">非遗文化之旅</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            走进北京景泰蓝艺术博物馆，感受六百年皇家工艺的璀璨魅力，
            <br className="hidden sm:block" />
            见证传统与现代的完美融合
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Palette className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">600+</div>
                <div className="text-sm text-slate-400">年历史传承</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">108</div>
                <div className="text-sm text-slate-400">道制作工序</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">国家级</div>
                <div className="text-sm text-slate-400">非物质文化遗产</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              开始探索
            </button>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('#team');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 glass text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              团队风采
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
        >
          <span className="text-sm">向下滚动</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent z-10" />
    </section>
  );
};

export default Hero;
