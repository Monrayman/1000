import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  CheckCircle2,
  BookOpen,
  Users,
  Trophy,
  Target,
  Shield,
  Clock,
} from 'lucide-react';

const benefits = [
  {
    icon: BookOpen,
    title: 'Полный цикл',
    description: 'От идеи до продажи тиража. Все этапы — под одной крышей.',
  },
  {
    icon: Trophy,
    title: '25 лет опыта',
    description: '8000+ изданных книг, 5 000 000+ суммарный тираж.',
  },
  {
    icon: Users,
    title: 'Команда экспертов',
    description: '35 специалистов под проекты любой сложности.',
  },
  {
    icon: Target,
    title: 'Результат',
    description: 'Книги приносят авторам известность и прибыль.',
  },
  {
    icon: Shield,
    title: 'Гарантии',
    description: 'Рассрочка платежа, прозрачные договоры.',
  },
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Ваше участие — всего 1 час в неделю.',
  },
];

const bigStats = [
  { value: '8000+', label: 'изданных книг' },
  { value: '5M+', label: 'суммарный тираж' },
  { value: '25', label: 'лет на рынке' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gray-bg">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title mb-4">
            Почему авторы
            <br />
            <span className="text-gradient">выбирают нас</span>
          </h2>
          <p className="section-subtitle mx-auto">
            25 лет создаём бестселлеры. Доверьте свою книгу профессионалам,
            которые знают, как сделать её успешной.
          </p>
        </motion.div>

        {/* Big Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {bigStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-text">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-card card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-card"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-dark mb-2">
                Гарантируем результат
              </h3>
              <p className="text-gray-text">
                Или вернём деньги. Мы уверены в качестве своей работы.
              </p>
            </div>
            <div className="flex items-center gap-4">
              {[
                'Полный цикл',
                'Опыт 25 лет',
                'Гарантия качества',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-gold" />
                  <span className="text-sm font-medium text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
