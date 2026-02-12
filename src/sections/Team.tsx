import { useEffect, useRef, useState } from 'react';
import { Users, MapPin, Calendar, Camera, MessageCircle } from 'lucide-react';
import TeamGallery, { type TeamGalleryItem } from '../components/TeamGallery';

const Team = () => {
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

  const galleryItems: TeamGalleryItem[] = [
    {
      url: '/1.jpg',
      title: '景泰蓝馆参观合影',
      caption: '展厅学习记录',
    },
    {
      url: '/2.jpg',
      title: '讲解区合影',
      caption: '文化调研留念',
    },
    {
      url: '/3.jpg',
      title: '展品参观打卡',
      caption: '实践活动合影',
    },
    {
      url: '/4.jpg',
      title: '展厅实践合影',
      caption: '景泰蓝馆参观合影',
    },
    {
      url: '/5.jpg',
      title: '手作环节记录',
      caption: '展品参观打卡',
    },
    {
      url: '/6.jpg',
      title: '工艺展室紀念',
      caption: '展厅学习记录',
    },
    {
      url: '/7.jpg',
      title: '团队调研留念',
      caption: '文化调研留念',
    },
    {
      url: '/8.jpg',
      title: '活动合影留念',
      caption: '景泰蓝馆参观合影',
    },
    {
      url: '/9.jpg',
      title: '交流调研记录',
      caption: '实践活动合影',
    },
    {
      url: '/10.jpg',
      title: '展馆参观打卡',
      caption: '展品参观打卡',
    },
    {
      url: '/11.jpg',
      title: '展品观摩合影',
      caption: '展厅学习记录',
    },
    {
      url: '/12.jpg',
      title: '馆内展品展示',
      caption: '实践活动留念',
    },
  ];


  const teamMembers = [
    { name: '李美', role: '团队负责人', avatar: 'L' },
    { name: '宋雨飞', role: '拍摄剪辑', avatar: 'S' },
    { name: '尹子琪', role: '网页制作', avatar: 'Y' },
    { name: '石一惠', role: '参观讲解', avatar: 'S' },
    { name: '申雯雯', role: '调研分析', avatar: 'S' },
    { name: '牛悦彤', role: '实地调研', avatar: 'N' },
    { name: '郝泽贤', role: '推文排版', avatar: 'H' },
    { name: '黄涵', role: '撰写文案', avatar: 'H' },
    { name: '马若晗', role: '撰写文案', avatar: 'M' },
    { name: '翁灿', role: '撰写文案', avatar: 'W' },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] radial-gradient opacity-20" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Users className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-slate-300">团队风采</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            我们的<span className="text-gradient">实践之旅</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            当寒假遇上非遗，当青春对话传统，中央民族大学社会实践团队的脚步，
            从河北踏入了北京景泰蓝艺术博物馆这座"珐琅艺术殿堂"。
          </p>
        </div>

        {/* Trip Info Cards */}
        <div className={`grid sm:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-blue-500/20 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">实践地点</div>
              <div className="text-lg font-semibold text-white">北京景泰蓝艺术博物馆</div>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
              <Calendar className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">实践时间</div>
              <div className="text-lg font-semibold text-white">2026年寒假期间</div>
            </div>
          </div>
          <div className="glass rounded-xl p-6 flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center">
              <Camera className="w-7 h-7 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm text-slate-400">团队规模</div>
              <div className="text-lg font-semibold text-white">10人实践小组</div>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
            <Camera className="w-6 h-6 text-blue-400" />
            实践掠影
          </h3>
          <TeamGallery items={galleryItems} />

        </div>

        {/* Team Reflection */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-amber-400" />
              实践感悟
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-blue-400 font-semibold">初遇：</span>
                  推开博物馆的大门，仿佛穿越时光长廊——2012年开馆的它，是国内首家景泰蓝主题博物馆，
                  承载着从元蒙西征传入到明清宫廷鼎盛的工艺传奇。
                </p>
                <p>
                  <span className="text-amber-400 font-semibold">探秘：</span>
                  在工艺展演区，我们看到技师们端坐工作台前，手中镊子夹着细如发丝的铜丝，
                  弯折、粘附，动作行云流水；点蓝时，料勺刮取天然矿石研磨的釉料，小心翼翼填入铜丝框架。
                </p>
              </div>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  <span className="text-cyan-400 font-semibold">感悟：</span>
                  博物馆中陈列的珐琅与琉璃结合的摆件、抽象纹样的饰品，打破了我们对景泰蓝"传统复古"的固有印象；
                  2014年APEC会议的《四海升平》赏瓶更是让我们自豪。
                </p>
                <p>
                  <span className="text-rose-400 font-semibold">传承：</span>
                  作为中央民族大学的学子，我们来自不同民族，却在景泰蓝的魅力中找到了共同的文化认同。
                  未来，我们愿继续做非遗传播的使者。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">团队成员</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-blue-500/30 group-hover:border-blue-500/60">
                  <span className="text-2xl font-bold text-gradient">{member.avatar}</span>
                </div>
                <div className="text-white font-medium">{member.name}</div>
                <div className="text-sm text-slate-400">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
