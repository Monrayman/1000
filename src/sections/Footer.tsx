import { BookOpen } from 'lucide-react';

const footerLinks = [
  { label: 'Начало', href: '#hero' },
  { label: 'Об издательстве', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Авторы', href: '#authors' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white py-12">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-dark" />
              </div>
              <div>
                <div className="text-lg font-bold">1000</div>
                <div className="text-xs text-white/60">бестселлеров</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Книжный продюсерский центр. Создаём книги от идеи до полки в
              магазине. 25 лет опыта, 8000+ изданных книг.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-white/60 hover:text-gold transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-white/60">
              <p>
                <a
                  href="tel:+79951180102"
                  className="hover:text-gold transition-colors"
                >
                  +7 995 118 01 02
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@1000bestsellers.ru"
                  className="hover:text-gold transition-colors"
                >
                  info@1000bestsellers.ru
                </a>
              </p>
              <p>Москва, 2-я Фрезерная, 14с1б</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2024 «1000 бестселлеров». Все права защищены.
          </p>
          <p className="text-white/40 text-sm">
            Книжный продюсерский центр
          </p>
        </div>
      </div>
    </footer>
  );
}
