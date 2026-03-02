import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';

const teamMembers = [
  {
    name: 'Жанна Фролова',
    role: 'Основатель и директор',
    description:
      'В прошлом — руководитель литературного агентства «Книжкин дом», топ-менеджер крупнейшего в России издательского холдинга «АСТ-Эксмо». Суммарный тираж её книг — более 5 000 000 экземпляров.',
    quote:
      'Я не только издатель, но и автор. Поэтому мы создали компанию, максимально гибкую под запросы любого автора.',
  },
  {
    name: 'Яна Радаева',
    role: 'Директор литературного агентства',
    description:
      'Экспертный взгляд на верстку, дизайн и вычитку книг. Знает все нормативы, ГОСТы и требования типографий. Шеф-редактор с опытом работы более 15 лет.',
    quote: '',
  },
  {
    name: 'Екатерина Такмазян',
    role: 'Главный редактор',
    description:
      'Стрессоустойчивость 80 lvl. Редактор-спринтер. Богатый опыт ведения проектов от детских развивающих пособий до срочных книг под ключ.',
    quote: '',
  },
  {
    name: 'Ольга Грачева',
    role: 'Маркетолог',
    description:
      'Знает, что такое лиды, воронки, конверсии, ROMI, AOV, CTR, CPC, NPS и много других букв. Создаёт стратегии продвижения книг.',
    quote: '',
  },
  {
    name: 'Екатерина Черкасова',
    role: 'Редактор',
    description:
      '«Я люблю работать с текстом и верю в магию слова. За 15 лет в профессии я создала больше тысячи статей, сотрудничала с издательствами Проф-Пресс и ЭКСМО».',
    quote: '',
  },
  {
    name: 'Майя Рыжкова',
    role: 'Дизайнер',
    description:
      'Редактор с навыками дизайнера и развитым чувством прекрасного. Мало говорит, много делает. Берётся за самые необычные проекты — от манги до кулинарных книг.',
    quote: '',
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

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-white">
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
            Наша
            <br />
            <span className="text-gradient">команда</span>
          </h2>
          <p className="section-subtitle mx-auto">
            35 специалистов под проекты любой тематики и сложности. Каждый
            эксперт в своём деле.
          </p>
        </motion.div>

        {/* Founder Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                <span className="text-4xl md:text-5xl font-bold text-white">
                  ЖФ
                </span>
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-1">
                  {teamMembers[0].name}
                </h3>
                <p className="text-gold font-semibold mb-4">
                  {teamMembers[0].role}
                </p>
                <p className="text-gray-text mb-6">{teamMembers[0].description}</p>

                {/* Quote */}
                <div className="relative bg-white rounded-xl p-6 shadow-card">
                  <Quote className="absolute -top-3 -left-3 w-8 h-8 text-gold" />
                  <p className="text-dark italic font-display">
                    {teamMembers[0].quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {teamMembers.slice(1).map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-gray-bg rounded-2xl p-6 card-hover"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gold">
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-dark mb-1">
                {member.name}
              </h3>
              <p className="text-gold text-sm font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-text text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
