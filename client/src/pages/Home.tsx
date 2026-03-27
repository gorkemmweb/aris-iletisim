/**
 * Design Philosophy: "Sıcak Güven" (Warm Trust)
 * - Koyu lacivert zemin + Turuncu-amber vurgu
 * - Nunito (başlıklar) + Source Sans 3 (gövde)
 * - Kart bazlı asimetrik yerleşim, sıcak ve profesyonel
 * - WhatsApp yeşil CTA, smooth scroll animasyonları
 */

import { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  Battery,
  Zap,
  Download,
  Wifi,
  ShoppingBag,
  Phone,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Menu,
  X,
  MessageCircle,
  CheckCircle,
  Wrench,
  Shield,
  ThumbsUp,
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485517259/fPQzuGY4YANnxurT2Umd6U/hero-bg-ds326BGnJHwaepjYcFaY9s.webp";
const REPAIR_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485517259/fPQzuGY4YANnxurT2Umd6U/repair-service-VzxQFxDzBdYkeHaemssxbd.webp";
const SHOP_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485517259/fPQzuGY4YANnxurT2Umd6U/shop-front-QEitFTJVbWghhmtzgg7t8c.webp";

const services = [
  {
    icon: Smartphone,
    title: "Ekran Değişimi",
    desc: "Kırık veya çatlak ekranınızı orijinal kalitede yeni ekranla değiştiriyoruz.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Battery,
    title: "Batarya Değişimi",
    desc: "Şarj tutmayan veya şişen bataryanızı güvenli şekilde değiştiriyoruz.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Şarj Soketi Tamiri",
    desc: "Şarj almayan veya bağlantı sorunu yaşayan soketleri tamir ediyoruz.",
    color: "from-yellow-500 to-amber-600",
  },
  {
    icon: Download,
    title: "Yazılım Güncelleme",
    desc: "Donma, yavaşlama ve yazılım sorunlarınızı hızlıca çözüyoruz.",
    color: "from-green-500 to-emerald-700",
  },
  {
    icon: Wifi,
    title: "Sinyal Sorunları",
    desc: "Anten ve sinyal problemlerini uzman ekibimizle gideriyoruz.",
    color: "from-purple-500 to-purple-700",
  },
  {
    icon: ShoppingBag,
    title: "Aksesuar Satışı",
    desc: "Kılıf, cam, şarj aleti ve diğer aksesuarları uygun fiyata sunuyoruz.",
    color: "from-rose-500 to-pink-700",
  },
];

const reviews = [
  {
    name: "Mehmet Y.",
    rating: 5,
    text: "Telefonum düştü ve ekranı parçalandı. Arış İletişim'de 1 saat içinde değiştirildi. Çok memnun kaldım!",
    date: "2 hafta önce",
  },
  {
    name: "Ayşe K.",
    rating: 5,
    text: "Batarya sorunum vardı, çok hızlı ve uygun fiyata çözdüler. Kesinlikle tavsiye ederim.",
    date: "1 ay önce",
  },
  {
    name: "Ali R.",
    rating: 5,
    text: "Yazılım sorunu yaşıyordum, aynı gün içinde hallettiler. Güler yüzlü ve profesyonel ekip.",
    date: "3 hafta önce",
  },
];

const stats = [
  { value: "500+", label: "Mutlu Müşteri" },
  { value: "5+", label: "Yıl Deneyim" },
  { value: "1 Saat", label: "Ortalama Tamir" },
  { value: "%100", label: "Müşteri Memnuniyeti" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-body bg-background text-foreground">
      {/* ─── NAVBAR ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1a2f50]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center shadow-md group-hover:bg-amber-400 transition-colors">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="font-heading font-800 text-white text-lg leading-tight">
              Arış<span className="text-amber-400"> İletişim</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Hizmetler", id: "hizmetler" },
              { label: "Hakkımızda", id: "hakkimizda" },
              { label: "Yorumlar", id: "yorumlar" },
              { label: "İletişim", id: "iletisim" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:text-amber-400 font-medium transition-colors text-sm"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-green-500/30" style={{backgroundColor: '#ed0c0c'}}
            >
              <MessageCircle className="w-4 h-4" />
              
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#1a2f50]/98 backdrop-blur-md border-t border-white/10 py-4">
            <div className="container flex flex-col gap-3">
              {[
                { label: "Hizmetler", id: "hizmetler" },
                { label: "Hakkımızda", id: "hakkimizda" },
                { label: "Yorumlar", id: "yorumlar" },
                { label: "İletişim", id: "iletisim" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/80 hover:text-amber-400 font-medium text-left py-2 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-xl font-semibold w-full justify-center mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp ile Yaz
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f3c]/85 via-[#1a2f50]/75 to-[#0d1f3c]/80" />

        <div className="container relative z-10 pt-20 pb-16">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              TURKCEL BAYİİ
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-900 text-white leading-tight mb-6">
              Telefonunuz{" "}
              <span className="text-amber-400 relative">
                Bozuldu mu?
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6 Q100 2 198 6" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
              <br />
              <span className="text-white">Hızlı Çözüm Burada!</span>
            </h1>

            <p className="text-white/75 text-lg md:text-xl mb-8 max-w-xl leading-relaxed font-body">
              Ekran değişimi, batarya tamiri, yazılım sorunları ve daha fazlası için
              <strong className="text-amber-300"> Arış İletişim</strong>'e gelin.
              Uygun fiyat, kaliteli hizmet, aynı gün teslimat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+905314333131"
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-heading font-800 px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-amber-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0" style={{paddingTop: '0px', paddingRight: '0px', paddingBottom: '0px', paddingLeft: '0px'}}
              >
                <Phone className="w-5 h-5" />
                
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-heading font-700 px-8 py-4 rounded-xl text-lg shadow-xl hover:shadow-green-500/40 transition-all hover:-translate-y-0.5 active:translate-y-0" style={{paddingTop: '0px', paddingRight: '0px', paddingLeft: '0px'}}
              >
                <MessageCircle className="w-5 h-5" />
                
              </a>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-4 mt-8">
              {[
                { icon: Clock, text: "Pzt-Cts 09:00-19:00" },
                { icon: MapPin, text: "Merkezi Konum" },
                { icon: CheckCircle, text: "Aynı Gün Tamir" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <item.icon className="w-4 h-4 text-amber-400" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollTo("hizmetler")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-amber-400 transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-amber-500 py-10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-900 text-[#0d1f3c]">
                  {stat.value}
                </div>
                <div className="text-[#1a2f50]/80 font-medium text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HİZMETLER ─── */}
      <section id="hizmetler" className="py-20 bg-[#f8f9fc]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Ne Yapıyoruz?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-800 text-[#0d1f3c] mt-2 mb-4">
                Hizmetlerimiz
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
                Birçok marka ve model telefonlar için profesyonel tamir hizmeti sunuyoruz.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title}>
                <div
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-700 text-[#0d1f3c] text-lg mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HAKKIMIZDA ─── */}
      <section id="hakkimizda" className="py-20 bg-[#0d1f3c]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <img
                  src={REPAIR_IMG}
                  alt="Teknik servis tamiri"
                  className="rounded-2xl w-full object-cover shadow-2xl"
                  style={{ maxHeight: "420px" }}
                />
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-[#0d1f3c] rounded-xl p-4 shadow-xl font-heading">
                  <div className="text-3xl font-900">5+</div>
                  <div className="text-sm font-600">Yıl Deneyim</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection>
              <span className="text-amber-400 font-semibold text-sm uppercase tracking-widest">
                Biz Kimiz?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-800 text-white mt-2 mb-6">
                Arış İletişim{" "}
                <span className="text-amber-400">Teknik Servis</span>
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Arış İletişim Teknik Servis olarak, cep telefonu tamiri konusunda 5 yılı aşkın
                deneyimimizle müşterilerimize hızlı, güvenilir ve uygun fiyatlı hizmet sunuyoruz.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Ekran değişimi, batarya değişimi, şarj soketi tamiri, yazılım güncelleme ve sinyal
                sorunları dahil tüm teknik servis ihtiyaçlarınızda yanınızdayız. Müşteri
                memnuniyeti her zaman önceliğimizdir.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "Garantili Hizmet", desc: "Tüm tamirlerimiz garantilidir" },
                  { icon: Zap, title: "Hızlı Tamir", desc: "Çoğu tamir aynı gün teslim" },
                  { icon: ThumbsUp, title: "Uygun Fiyat", desc: "Rekabetçi ve şeffaf fiyatlar" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <item.icon className="w-6 h-6 text-amber-400 mb-2" />
                    <div className="font-heading font-700 text-white text-sm">{item.title}</div>
                    <div className="text-white/50 text-xs mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── MÜŞTERİ YORUMLARI ─── */}
      <section id="yorumlar" className="py-20 bg-white">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Müşterilerimiz Ne Diyor?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-800 text-[#0d1f3c] mt-2 mb-4">
                Müşteri Yorumları
              </h2>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-gray-500 ml-2 text-sm">4.9 / 5.0 ortalama puan</span>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name}>
                <div
                  className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center font-heading font-700 text-amber-700 text-sm">
                        {review.name[0]}
                      </div>
                      <span className="font-heading font-700 text-[#0d1f3c] text-sm">
                        {review.name}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">{review.date}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DÜKKAN GÖRSELI + CTA ─── */}
      <section className="relative py-0 overflow-hidden">
        <div className="relative h-72 md:h-96">
          <img
            src={SHOP_IMG}
            alt="Arış İletişim dükkanı"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f3c]/90 via-[#0d1f3c]/60 to-transparent flex items-center">
            <div className="container">
              <AnimatedSection>
                <h2 className="font-heading text-2xl md:text-4xl font-800 text-white mb-4">
                  Telefonunuz için<br />
                  <span className="text-amber-400">Hemen Randevu Alın</span>
                </h2>
                <p className="text-white/70 mb-6 max-w-sm">
                  Bizi arayın veya WhatsApp'tan yazın, en kısa sürede size dönelim.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+905314333131"
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-heading font-700 px-6 py-3 rounded-xl transition-all shadow-lg"
                  >
                    <Phone className="w-4 h-4" />
                    ARA
                  </a>
                  <a
                    href="https://wa.me/905551234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white font-heading font-700 px-6 py-3 rounded-xl transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ─── İLETİŞİM ─── */}
      <section id="iletisim" className="py-20 bg-[#f8f9fc]">
        <div className="container">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-widest">
                Bize Ulaşın
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-800 text-[#0d1f3c] mt-2 mb-4">
                İletişim Bilgileri
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Cards */}
            <AnimatedSection>
              <div className="space-y-4">
                {[
                  {
                    icon: Phone,
                    title: "Telefon",
                    value: "0531 433 31 31",
                    href: "tel:+905314333131",
                    color: "bg-blue-100 text-blue-600",
                    action: "Hemen Ara",
                  },
                  {
                    icon: MessageCircle,
                    title: "WhatsApp",
                    value: "0531 433 31 31",
                    href: "https://wa.me/905314333131",
                    color: "bg-green-100 text-green-600",
                    action: "Mesaj Gönder",
                  },
                  {
                    icon: MapPin,
                    title: "Adres",
                    value: "Atatürk, Cumhuriyet Cd., 31795 Samandağ/Hatay",
                    href: "https://maps.apple.com/?q=Arış+İletişim+Teknik+Servis",
                    color: "bg-amber-100 text-amber-600",
                    action: "Yol Tarifi Al",
                  },
                  {
                    icon: Clock,
                    title: "Çalışma Saatleri",
                    value: "Pzt-Cmt: 09:00 - 19:00",
                    href: null,
                    color: "bg-purple-100 text-purple-600",
                    action: null,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                        {item.title}
                      </div>
                      <div className="font-heading font-700 text-[#0d1f3c] text-sm mt-0.5 truncate">
                        {item.value}
                      </div>
                    </div>
                    {item.href && item.action && (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="shrink-0 text-xs bg-gray-100 hover:bg-amber-100 hover:text-amber-700 text-gray-600 px-3 py-1.5 rounded-lg font-medium transition-colors"
                      >
                        {item.action}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Map placeholder */}
            <AnimatedSection>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full min-h-[320px] flex flex-col">
                <div className="bg-[#0d1f3c] px-5 py-4">
                  <h3 className="font-heading font-700 text-white text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" />
                    Konumumuz
                  </h3>
                </div>
                <div className="flex-1 bg-gray-100 relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6!2d28.9784!3d41.0082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDAwJzI5LjUiTiAyOMKwNTgnNDIuMiJF!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: "260px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Arış İletişim Konumu"
                  />
                </div>
                <div className="p-4">
                  <a
                    href="https://maps.apple.com/?q=Arış+İletişim+Teknik+Servis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-400 text-[#0d1f3c] font-heading font-700 py-3 rounded-xl transition-all text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    Yol Tarifi Al
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0d1f3c] border-t border-white/10 py-10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-heading font-800 text-white">
                  Arış <span className="text-amber-400">İletişim</span>
                </div>
                <div className="text-white/40 text-xs">Teknik Servis</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-white/50">
              <span>© 2024 Arış İletişim Teknik Servis</span>
              <span className="hidden md:inline">·</span>
              <span>Tüm hakları saklıdır.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="tel:+905551234567"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://maps.apple.com/?q=Arış+İletişim+Teknik+Servis"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center text-white/60 hover:text-white transition-all"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-110 active:scale-95"
        title="WhatsApp ile iletişime geç"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}
