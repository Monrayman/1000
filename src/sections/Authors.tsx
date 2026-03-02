import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const authors = [
  {
    name: 'Дмитрий Атерлей',
    book: 'Когнитивное моделирование будущего',
    description:
      'Эксперт-практик в области стратегического моделирования будущего и прогнозирования надёжности деятельности человека и команды.',
    initials: 'ДА',
  },
  {
    name: 'Vitus Daniloff',
    book: 'Человек-пароход',
    description:
      'Автор с 25-летним опытом в юридической сфере. Помогает читателям познать свои права и научиться их защищать.',
    initials: 'VD',
  },
  {
    name: 'Михаил Гусманов',
    book: 'Эксперт по retail',
    description:
      'Эксперт в области освещения для сферы retail. Сотни реализованных проектов, опыт во всех сферах розничной торговли.',
    initials: 'МГ',
  },
  {
    name: 'Лиана Лашхия',
    book: 'Приключения кота Чиабаты',
    description:
      'Врач-стоматолог, детский писатель. Создаёт увлекательные истории для юных читателей.',
    initials: 'ЛЛ',
  },
  {
    name: 'Константин Дубровин',
    book: '8 граней',
    description:
      'Предприниматель, спикер, основатель компании TOPsharing.center. Ведущий блога «Вдумчиво о продажах».',
    initials: 'КД',
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

export default function Authors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="authors" className="py-20 md:py-32 bg-gray-bg">
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
            Наши авторы —
            <br />
            <span className="text-gradient">лидеры в своих нишах</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Книги, которые мы издаём, становятся инструментами развития бизнеса
            и личного бренда.
          </p>
        </motion.div>

        {/* Authors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {authors.map((author) => (
            <motion.div
              key={author.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-card card-hover group"
            >
              {/* Avatar & Book */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">
                    {author.initials}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-gold mb-1">
                    <BookOpen className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wide">
                      Книга
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-dark leading-tight">
                    «{author.book}»
                  </p>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-dark mb-2">{author.name}</h3>
              <p className="text-gray-text text-sm leading-relaxed mb-4">
                {author.description}
              </p>

              {/* Link */}
              <a
                href="#contacts"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-dark transition-colors"
              >
                Стать автором
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Присоединиться к авторам
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
