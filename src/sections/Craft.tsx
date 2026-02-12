import { useEffect, useRef, useState } from 'react';
import { Hammer, Paintbrush, Flame, Sparkles, Wand2, Gem } from 'lucide-react';

const Craft = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Hammer,
      title: '制胎',
      description: '选用优质紫铜，经过裁剪、锤打、焊接等工序，制作出器物的胎型。胎体的厚薄均匀直接影响成品的质量。',
      detail: '制胎是景泰蓝制作的第一步，工匠需要根据设计图纸，将铜板裁剪成合适的形状，然后通过锤打、焊接等工艺，制作出精美的胎型。',
      color: 'amber',
    },
    {
      icon: Wand2,
      title: '掐丝',
      description: '将细铜丝轧扁后，按照设计图案用镊子掐成各种花纹，粘贴在胎体上。这是景泰蓝工艺中最精细的环节。',
      detail: '掐丝是景泰蓝的灵魂所在。工匠需要用镊子将细如发丝的铜丝，按照设计图案一根根掐出，然后粘贴在胎体上，形成精美的图案框架。',
      color: 'blue',
    },
    {
      icon: Paintbrush,
      title: '点蓝',
      description: '将天然矿物研磨成的珐琅釉料，按照设计色彩填入铜丝框架内。需要反复填充，确保色彩饱满。',
      detail: '点蓝是赋予景泰蓝色彩的关键步骤。工匠使用特制的小铲，将各种颜色的珐琅釉料小心翼翼地填入铜丝框架，如同绘画一般精细。',
      color: 'cyan',
    },
    {
      icon: Flame,
      title: '烧蓝',
      description: '将点蓝后的器物放入窑中，经800-900度高温烧制。釉料熔化后与铜丝完美融合，需反复烧制多次。',
      detail: '烧蓝是将点蓝后的器物放入特制窑炉中，经过高温烧制，使珐琅釉料熔化并与铜丝紧密结合。一件作品往往需要经过多次点蓝、烧蓝的反复。',
      color: 'rose',
    },
    {
      icon: Sparkles,
      title: '磨光',
      description: '用砂石、木炭等工具，将烧制后的器物表面打磨平整，使釉面光滑如镜，展现出宝石般的光泽。',
      detail: '磨光是让景泰蓝展现光泽的重要步骤。工匠需要用不同粗细的砂石、木炭等工具，反复打磨器物表面，直到光滑如镜。',
      color: 'emerald',
    },
    {
      icon: Gem,
      title: '镀金',
      description: '在器物表面镀上一层黄金，不仅增加美观，更能防止铜胎氧化，使作品永葆光彩。',
      detail: '镀金是景泰蓝制作的最后一道工序。通过在器物表面镀上一层黄金，不仅使作品更加华丽，还能有效保护铜胎，防止氧化。',
      color: 'yellow',
    },
  ];
  const stepImages = [
    '/15.jpg',
    '/16.jpg',
    '/craft-dianlan.jpg',
    '/17.jpg',
    '/18.jpg',
    '/19.jpg',
  ];

  const activeImage = stepImages[activeStep] ?? '/craft-dianlan.jpg';

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] radial-gradient opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Gem className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-slate-300">匠心工艺</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="text-gradient">108道工序</span>的极致美学
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            从设计到成品，景泰蓝需要经历制胎、掐丝、点蓝、烧蓝、磨光、镀金等108道繁复工序，
            每一环皆需匠人数十年功力，是真正的"择一事，终一生"。
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps List */}
          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {steps.map((step, index) => (
              <div
                key={step.title}
                onClick={() => setActiveStep(index)}
                className={`group relative p-5 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeStep === index
                    ? 'glass border-blue-500/50'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-${step.color}-500/20 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110`}>
                    <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-slate-500">0{index + 1}</span>
                      <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                {/* Active Indicator */}
                {activeStep === index && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                )}
              </div>
            ))}
          </div>

          {/* Detail Card */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="sticky top-24">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border-gradient">
                <img
                  src={activeImage}
                  alt="景泰蓝制作工艺"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Step Number Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-500/30 backdrop-blur-sm flex items-center justify-center border border-blue-500/50">
                    <span className="text-xl font-bold text-white">0{activeStep + 1}</span>
                  </div>
                  <div>
                    <div className="text-sm text-slate-300">当前工序</div>
                    <div className="text-lg font-semibold text-white">{steps[activeStep].title}</div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className={`w-6 h-6 text-${steps[activeStep].color}-400`} />;
                  })()}
                  {steps[activeStep].title}工序详解
                </h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {steps[activeStep].detail}
                </p>
                
                {/* Progress */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">工序进度</span>
                  <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500"
                      style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-slate-400">{activeStep + 1}/{steps.length}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">108</div>
                  <div className="text-xs text-slate-400">道工序</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient-gold">数月</div>
                  <div className="text-xs text-slate-400">制作周期</div>
                </div>
                <div className="glass rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">0.1mm</div>
                  <div className="text-xs text-slate-400">掐丝精度</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className={`mt-24 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto relative">
            <div className="absolute -top-4 -left-4 text-6xl text-blue-500/30 font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-blue-500/30 font-serif rotate-180">"</div>
            
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-6">
              原来每一件景泰蓝，都是匠人用时间熬出来的精品！
              从设计到成品，需要经历<span className="text-blue-400 font-semibold">108道工序</span>，
              耗时<span className="text-amber-400 font-semibold">数日乃至数月</span>，
              这正是"择一事，终一生"的坚守。
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-blue-500" />
              <span className="text-slate-500">— 社会实践团队感悟</span>
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craft;
