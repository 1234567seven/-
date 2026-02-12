import { useEffect, useRef, useState } from 'react';
import { History, Crown, Globe, Heart } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const features = [
    {
      icon: History,
      title: '源远流长',
      description: '始于元代，成熟于明景泰年间，距今已有600多年历史',
      color: 'blue',
    },
    {
      icon: Crown,
      title: '皇家御用',
      description: '明清时期专为宫廷制作，是帝王贵族的珍贵收藏',
      color: 'amber',
    },
    {
      icon: Globe,
      title: '中外合璧',
      description: '融合阿拉伯珐琅技艺与中国传统工艺精髓',
      color: 'cyan',
    },
    {
      icon: Heart,
      title: '非遗传承',
      description: '2006年列入首批国家级非物质文化遗产名录',
      color: 'rose',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] radial-gradient opacity-30" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <History className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-slate-300">历史渊源</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            什么是<span className="text-gradient">景泰蓝</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            景泰蓝，学名"铜胎掐丝珐琅"，是一种在铜质胎型上，用柔软的扁铜丝掐成各种花纹焊上，
            然后把珐琅质的色釉填充在花纹内烧制而成的器物，是中国著名的特种金属工艺品之一。
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full h-[clamp(320px,45vh,520px)] rounded-2xl overflow-hidden border-gradient glow-blue">
              <img
                src="/14.jpg"
                alt="景泰蓝艺术品"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              东方艺术的璀璨明珠
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                景泰蓝正名叫做"铜胎掐丝珐琅"，其制作工艺距今已有600多年的历史，是最具北京特色的传统手工艺之一。
                它采用金银铜及多种天然矿物质为原材料，集美术、金属工艺、雕刻、镶嵌、玻璃熔炼、冶金等专业技术为一体。
              </p>
              <p>
                因其在明代景泰年间获得了史无前例的发展，又一般多外饰蓝色釉料，故而得名"景泰蓝"。
                古朴典雅，精美华贵，具有鲜明的民族风格和深刻文化内涵，被称为国宝"京"粹，又被誉为"燕京八绝"之首。
              </p>
              <p>
                2006年5月20日，景泰蓝制作技艺经国务院批准列入第一批国家级非物质文化遗产名录，
                成为中华民族传统文化的重要组成部分。
              </p>
            </div>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-blue-500/50">
              <p className="text-lg text-slate-400 italic">
                "一件景泰蓝，十件官窑器"
              </p>
              <p className="text-sm text-slate-500 mt-2">— 民间俗语</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative glass rounded-2xl p-6 hover-lift card-shine"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              
              {/* Hover Glow */}
              <div className={`absolute inset-0 rounded-2xl bg-${feature.color}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
            </div>
          ))}
        </div>

        {/* History Timeline */}
        <div className={`mt-24 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white text-center mb-12">发展历程</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent hidden lg:block" />
            
            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { era: '元代', title: '传入中国', desc: '蒙古西征带回阿拉伯珐琅工艺' },
                { era: '明代', title: '工艺成熟', desc: '景泰年间达到巅峰，得名景泰蓝' },
                { era: '清代', title: '皇家御用', desc: '专为宫廷制作，技艺更加精湛' },
                { era: '1956年', title: '技艺复兴', desc: '42家作坊合并成立北京市珐琅厂' },
                { era: '2006年', title: '非遗认定', desc: '列入国家级非物质文化遗产' },
              ].map((item, index) => (
                <div
                  key={item.era}
                  className="relative text-center group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="glass rounded-xl p-5 hover-lift">
                    <div className="text-blue-400 font-bold text-lg mb-1">{item.era}</div>
                    <div className="text-white font-semibold mb-2">{item.title}</div>
                    <div className="text-sm text-slate-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
