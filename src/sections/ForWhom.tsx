import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase,
  TrendingUp,
  Users,
  Video,
  Building2,
  Lightbulb,
} from 'lucide-react';

const audiences = [
  {
    icon: Briefcase,
    title: 'Эксперты профессии',
    description:
      'Маркетологи, юристы, финансисты, психологи, бухгалтеры — фиксируйте экспертность в книге',
  },
  {
    icon: TrendingUp,
    title: 'Предприниматели',
    description:
      'Развивайте личный бренд и масштабируйте бизнес через книгу',
  },
  {
    icon: Users,
    title: 'Тренеры и коучи',
    description:
      'Масштабируйте экспертность, привлекайте новых клиентов',
  },
  {
    icon: Video,
    title: 'Блогеры',
    description:
      'Монетизируйте аудиторию и укрепляйте статус эксперта',
  },
  {
    icon: Building2,
    title: 'Руководители',
    description:
      'Корпоративные издания для команды и партнёров',
  },
  {
    icon: Lightbulb,
    title: 'Специалисты',
    description:
      'Защитите методику законом об авторском праве',
  },
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

export default function ForWhom() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
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
            Книга — ваш новый уровень
            <br />
            <span className="text-gradient">в бизнесе</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Издание книги открывает двери: новые клиенты, узнаваемость, статус
            эксперта. Узнайте, как книга поможет именно вам.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {audiences.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group bg-gray-bg rounded-2xl p-8 card-hover cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                <item.icon className="w-7 h-7 text-gold group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
              <p className="text-gray-text leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-text mb-6">
            Не нашли себя в списке? Свяжитесь с нами — обсудим ваш проект
            индивидуально.
          </p>
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Обсудить проект
          </a>
        </motion.div>
      </div>
    </section>
  );
}
