import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Clock } from 'lucide-react';

const stats = [
  { icon: BookOpen, value: '8000+', label: 'изданных книг' },
  { icon: Award, value: '25', label: 'лет опыта' },
  { icon: Users, value: '35', label: 'специалистов' },
  { icon: Clock, value: '1 час', label: 'в неделю от вас' },
];

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      
      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-1/4 right-10 w-64 h-64 md:w-96 md:h-96 rounded-full bg-gold/10 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-1/4 left-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-gold/5 blur-3xl"
      />

      <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-gold/10 text-gold-dark text-sm font-semibold rounded-full mb-6">
                Книжный продюсерский центр
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-dark leading-tight mb-6"
            >
              Создаём книги,
              <br />
              <span className="text-gradient">которые меняют</span>
              <br />
              бизнес
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-text mb-8 leading-relaxed"
            >
              От идеи до полки в магазине — за{' '}
              <span className="font-semibold text-dark">5 месяцев</span>. При
              вашем участии всего{' '}
              <span className="font-semibold text-dark">1 час в неделю</span>.
              Мы берём на себя всю работу — вы получаете готовый бестселлер.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button
                onClick={() => scrollToSection('#contacts')}
                className="btn-primary flex items-center justify-center gap-2 text-base"
              >
                Получить консультацию
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollToSection('#services')}
                className="btn-secondary flex items-center justify-center text-base"
              >
                Рассчитать стоимость
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <stat.icon className="w-6 h-6 text-gold mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-dark">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-text">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Book Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Book */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="relative z-10"
              >
                <div className="w-80 h-96 bg-gradient-to-br from-gold to-gold-light rounded-r-2xl rounded-l-sm shadow-2xl relative overflow-hidden">
                  {/* Book Cover Design */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <BookOpen className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ВАША КНИГА
                    </h3>
                    <p className="text-white/80 text-sm">
                      Бестселлер в вашей нише
                    </p>
                    <div className="mt-8 px-6 py-2 bg-white/20 rounded-full">
                      <span className="text-white text-sm font-semibold">
                        1000 бестселлеров
                      </span>
                    </div>
                  </div>
                  {/* Decorative Lines */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-dark to-gold" />
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-gold to-gold-dark" />
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -top-8 -right-8 w-24 h-24 bg-white rounded-xl shadow-card flex items-center justify-center"
              >
                <Award className="w-12 h-12 text-gold" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-8 w-20 h-20 bg-dark rounded-xl shadow-card flex items-center justify-center"
              >
                <span className="text-2xl font-bold text-gold">#1</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
