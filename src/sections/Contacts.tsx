import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 995 118 01 02',
    href: 'tel:+79951180102',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@1000bestsellers.ru',
    href: 'mailto:info@1000bestsellers.ru',
  },
  {
    icon: MapPin,
    label: 'Адрес',
    value: 'Москва, 2-я Фрезерная, 14с1б',
    href: '#',
  },
];

export default function Contacts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '' });
    }, 3000);
  };

  return (
    <section id="contacts" className="py-20 md:py-32 bg-white">
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
            Создадим вашу книгу
            <br />
            <span className="text-gradient">вместе</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Оставьте заявку — мы свяжемся с вами в ближайшее время и обсудим
            ваш проект.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-bg rounded-2xl p-8">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-2">
                    Спасибо!
                  </h3>
                  <p className="text-gray-text">
                    Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold text-dark mb-6">
                    Получить консультацию
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Имя <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="Ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Телефон <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center gap-2 mt-6"
                    >
                      Отправить заявку
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-text mt-4 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-gray-bg rounded-xl hover:bg-gold/5 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-text">{item.label}</p>
                    <p className="text-lg font-semibold text-dark">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-8 p-6 bg-gold/10 rounded-xl">
              <h4 className="font-semibold text-dark mb-2">Режим работы</h4>
              <p className="text-gray-text">
                Пн-Пт: 9:00 — 18:00
                <br />
                Сб-Вс: выходной
              </p>
            </div>

            {/* Additional Info */}
            <div className="mt-8">
              <p className="text-gray-text text-sm">
                Наш склад находится в Москве по адресу: 2-я Фрезерная, 14с1б.
                Книги доступны в магазинах: «Дом Книги» (СПб), ЛитРес,
                Лабиринт, Ozon, Wildberries, Amazon.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
