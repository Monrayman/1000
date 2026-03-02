import Header from './sections/Header';
import Hero from './sections/Hero';
import ForWhom from './sections/ForWhom';
import WhyUs from './sections/WhyUs';
import Process from './sections/Process';
import Services from './sections/Services';
import Team from './sections/Team';
import Authors from './sections/Authors';
import Contacts from './sections/Contacts';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ForWhom />
        <WhyUs />
        <Process />
        <Services />
        <Team />
        <Authors />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
