import { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink, Clock, User, ArrowRight, MessageSquare } from 'lucide-react';

const Articles = () => {
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

  const articles = [
    {
      title: '解锁北京景泰蓝艺术博物馆的非遗密码',
      excerpt: '当寒假遇上非遗，当青春对话传统，中央民族大学社会实践团队的脚步，从河北踏入了北京景泰蓝艺术博物馆这座"珐琅艺术殿堂"。在这里，我们用双眼捕捉铜丝釉彩的惊艳，用心感受千年匠心的温度...',
      author: '青蓝数影',
      date: '2026年2月7日',
      readTime: '5分钟',
      image: '/20.jpg',
      tags: ['社会实践', '非遗文化', '景泰蓝'],
      link: 'https://mp.weixin.qq.com/s/7PyEnoF4DfahMFhIpLfxCg',
      featured: true,
    },
    {
      title: '探秘景泰蓝：108道工序里的毫厘匠心',
      excerpt: '在工艺展演区，我们看到技师们端坐工作台前，手中镊子夹着细如发丝的铜丝，弯折、粘附，动作行云流水；点蓝时，料勺刮取天然矿石研磨的釉料，小心翼翼填入铜丝框架...',
      author: '青蓝数影',
      date: '2026年2月5日',
      readTime: '4分钟',
      image: '/21.jpg',
      tags: ['工艺探秘', '匠心精神', '传统技艺'],
      link: '#',
      featured: false,
    },
    {
      title: '守正创新：让非遗"活"在当下',
      excerpt: '博物馆中陈列的珐琅与琉璃结合的摆件、抽象纹样的饰品，打破了我们对景泰蓝"传统复古"的固有印象；2014年APEC会议的《四海升平》赏瓶更是让我们自豪...',
      author: '青蓝数影',
      date: '2026年2月3日',
      readTime: '6分钟',
      image: '/artwork-vase.jpg',
      tags: ['守正创新', '文化传承', '国礼风采'],
      link: '#',
      featured: false,
    },
  ];

  return (
    <section
      id="articles"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] radial-gradient opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <BookOpen className="w-4 h-4 text-rose-400" />
            <span className="text-sm text-slate-300">实践推文</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            探索<span className="text-gradient">记录</span>与分享
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            用文字和影像记录我们的实践之旅，让更多人了解景泰蓝这一国家级非物质文化遗产的魅力
          </p>
        </div>

        {/* Featured Article */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl overflow-hidden border-gradient">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-video lg:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden" />
                
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium">
                  精选推文
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {articles[0].tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {articles[0].title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{articles[0].readTime}阅读</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-end">
                  <a
                    href={articles[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    阅读全文
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Grid */}
        <div className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {articles.slice(1).map((article, index) => (
            <div
              key={article.title}
              className="group glass rounded-2xl overflow-hidden hover-lift card-shine"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}阅读</span>
                  </div>
                  
                </div>
                
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  阅读全文
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* More Articles CTA */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">关注我们的公众号</h3>
            <p className="text-slate-400 mb-6">
              获取更多关于景泰蓝非遗文化的精彩内容，以及我们团队的最新实践动态
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-slate-400">微信公众号</div>
                  <div className="text-white font-medium">青蓝数影</div>
                </div>
              </div>
              <a
                href="https://mp.weixin.qq.com/s/7PyEnoF4DfahMFhIpLfxCg"
                // href="http://mmbiz.qpic.cn/mmbiz_png/XkLBvOY6MEQs5w8c9lKoqK2y6UklgXjmFia7xg72jpuNNhXxsamJ7Ik1oKay6GeuErZBVtRXpJM8STRawyC4ySw/0?wx_fmt=png"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                查看更多推文
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
