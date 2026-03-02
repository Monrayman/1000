import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Своя книга',
    price: '100 000',
    description: 'Для тех, кто написал книгу и хочет её издать',
    features: [
      'Изготовление макета электронной книги',
      'Изготовление макета бумажной книги',
      'Подготовка к печати',
      'Оформление ISBN',
      'Консультация по продвижению',
    ],
    cta: 'Издать готовое',
    popular: false,
  },
  {
    name: 'Книга под ключ',
    price: '300 000',
    description: 'Для новых авторов — станьте писателем с нуля',
    features: [
      'Всё из пакета "Своя книга"',
      'Написание книги по интервью',
      'Личный менеджер проекта',
      'Консультации по позиционированию',
      'Отстройка от конкурентов',
      'Рассрочка платежа',
    ],
    cta: 'Стань автором',
    popular: true,
  },
  {
    name: 'Бестселлер',
    price: '500 000',
    description: 'Премиум-формат с полным продюсированием',
    features: [
      'Всё из пакета "Книга под ключ"',
      'Полное продюсирование проекта',
      'Продвижение книги включено',
      'Стратегия вывода на рынок',
      'Помощь в получении статуса бестселлера',
      'Приоритетная поддержка 24/7',
    ],
    cta: 'Выведем на ТОП',
    popular: false,
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-bg">
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
            Форматы
            <br />
            <span className="text-gradient">сотрудничества</span>
          </h2>
          <p className="section-subtitle mx-auto">
            От готового макета до полного продюсирования — найдём решение под
            ваши задачи и бюджет.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-white rounded-2xl overflow-hidden ${
                service.popular
                  ? 'shadow-card-hover ring-2 ring-gold md:scale-105'
                  : 'shadow-card card-hover'
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-white text-center py-2 text-sm font-semibold">
                  <Star className="w-4 h-4 inline-block mr-1" />
                  Самый популярный
                </div>
              )}

              <div className={`p-8 ${service.popular ? 'pt-14' : ''}`}>
                {/* Header */}
                <h3 className="text-2xl font-bold text-dark mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-text text-sm mb-6">
                  {service.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-dark">
                    {service.price}
                  </span>
                  <span className="text-gray-text ml-1">₽</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacts"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gold text-dark hover:bg-gold-dark'
                      : 'bg-dark text-white hover:bg-dark-light'
                  }`}
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-text mb-4">
            Нужен индивидуальный подход? Мы гибкие — обсудим ваш проект
            отдельно.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-dark">
              <Check className="w-4 h-4 text-gold" />
              Рассрочка платежа
            </span>
            <span className="flex items-center gap-2 text-dark">
              <Check className="w-4 h-4 text-gold" />
              Партнёрская программа
            </span>
            <span className="flex items-center gap-2 text-dark">
              <Check className="w-4 h-4 text-gold" />
              Издание за счёт издательства
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
