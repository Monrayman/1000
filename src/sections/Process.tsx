import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  MessageCircle,
  Search,
  FileText,
  Palette,
  Printer,
  Rocket,
} from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Консультация',
    duration: '30-60 минут',
    description:
      'Обсуждаем вашу идею, цели и ожидания. Отвечаем на все вопросы о процессе издания.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Диагностика',
    duration: '90-120 минут',
    description:
      'Анализируем нишу, конкурентов и целевую аудиторию. Формируем стратегию книги.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Работа над рукописью',
    duration: '10-90 дней',
    description:
      'Пишем текст на основе интервью с вами. Вы редактируете и утверждаете каждую главу.',
  },
  {
    icon: Palette,
    number: '04',
    title: 'Дизайн и вёрстка',
    duration: '30-60 дней',
    description:
      'Создаём уникальный дизайн обложки и макета книги. Всё согласовываем с вами.',
  },
  {
    icon: Printer,
    number: '05',
    title: 'Издание',
    duration: '10-40 дней',
    description:
      'Печатаем тираж, оформляем ISBN, регистрируем книгу в библиотеках.',
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Продвижение',
    duration: '30-90 дней',
    description:
      'Выводим книгу на рынок: размещаем в магазинах, организуем презентации.',
  },
];

export default function Process() {
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
            Как создаётся
            <br />
            <span className="text-gradient">бестселлер</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Прозрачный процесс из 6 этапов. Вы всегда знаете, на какой стадии
            находится ваш проект.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold-light to-gold/20 transform md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon Circle */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  className="w-16 h-16 rounded-full bg-gold shadow-lg flex items-center justify-center"
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div
                className={`ml-24 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                }`}
              >
                <div
                  className={`bg-gray-bg rounded-2xl p-6 card-hover ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <span className="text-3xl font-extrabold text-gold/30">
                      {step.number}
                    </span>
                    <span className="text-sm font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-text text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <a
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Начать с консультации
          </a>
        </motion.div>
      </div>
    </section>
  );
}
