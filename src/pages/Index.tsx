import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const weddingDate = new Date('2025-08-15');
  const today = new Date();
  const daysUntil = Math.ceil((weddingDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const schedule = [
    { time: '14:00', event: 'Сбор гостей', icon: 'Users' },
    { time: '15:00', event: 'Церемония бракосочетания', icon: 'Heart' },
    { time: '16:00', event: 'Фотосессия', icon: 'Camera' },
    { time: '17:00', event: 'Банкет', icon: 'Utensils' },
    { time: '19:00', event: 'Первый танец', icon: 'Music' },
    { time: '20:00', event: 'Торт и шампанское', icon: 'Cake' },
  ];

  const story = [
    { year: '2020', title: 'Первая встреча', description: 'Наши пути пересеклись солнечным майским днем в парке' },
    { year: '2021', title: 'Первое свидание', description: 'Романтический ужин при свечах в любимом ресторане' },
    { year: '2023', title: 'Предложение', description: 'Незабываемый момент на берегу моря на закате' },
    { year: '2025', title: 'Свадьба', description: 'Начало нашей совместной жизни' },
  ];

  const gallery = [
    'https://cdn.poehali.dev/projects/42531c59-4b13-4aa8-8110-32c23b0fb676/files/9aa28452-0ce6-4b45-9659-7e0b47b9e455.jpg',
    'https://cdn.poehali.dev/projects/42531c59-4b13-4aa8-8110-32c23b0fb676/files/de09a9a0-5d57-4e80-8cdd-abd7d37b7077.jpg',
    'https://cdn.poehali.dev/projects/42531c59-4b13-4aa8-8110-32c23b0fb676/files/ac2d059b-bcaf-4cb2-ac16-108d4e7e30dd.jpg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center gap-6">
          {['home', 'story', 'location', 'schedule', 'gallery', 'gifts'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === section ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {section === 'home' && 'Главная'}
              {section === 'story' && 'История'}
              {section === 'location' && 'Локация'}
              {section === 'schedule' && 'Расписание'}
              {section === 'gallery' && 'Галерея'}
              {section === 'gifts' && 'Подарки'}
            </button>
          ))}
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8 text-6xl animate-float">🌸</div>
          <h1 className="text-7xl md:text-9xl font-light mb-4 text-foreground">Анна & Иван</h1>
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">15 августа 2025</p>
          <p className="text-lg text-muted-foreground mb-8">Через {daysUntil} дней</p>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Мы рады пригласить вас разделить с нами этот особенный день, 
            когда мы начнем наше совместное путешествие по жизни
          </p>
        </div>
      </section>

      <section id="story" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">Наша история</h2>
          <div className="space-y-12">
            {story.map((item, index) => (
              <Card key={index} className="p-8 bg-white/60 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="text-4xl font-light text-primary min-w-[100px]">{item.year}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-medium mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="min-h-screen py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">Место проведения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-white/60 backdrop-blur-sm border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <Icon name="MapPin" className="text-primary" size={32} />
                <div>
                  <h3 className="text-2xl font-medium mb-2 text-foreground">Загородный клуб "Зеленая роща"</h3>
                  <p className="text-muted-foreground">Московская область, Истринский район</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" className="text-primary" size={20} />
                  <span className="text-muted-foreground">Начало в 14:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Car" className="text-primary" size={20} />
                  <span className="text-muted-foreground">Бесплатная парковка</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="TreePine" className="text-primary" size={20} />
                  <span className="text-muted-foreground">Церемония на природе</span>
                </div>
              </div>
              <Button className="w-full mt-6" variant="outline">
                <Icon name="Navigation" className="mr-2" size={18} />
                Открыть в картах
              </Button>
            </Card>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=37.617700,55.755800&z=10"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="schedule" className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">Расписание дня</h2>
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <Card key={index} className="p-6 bg-white/60 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Icon name={item.icon as any} className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-light text-primary mb-1">{item.time}</div>
                    <div className="text-xl text-foreground">{item.event}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen py-20 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 text-foreground">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow aspect-square">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gifts" className="min-h-screen py-20 px-4 flex items-center">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-foreground">Подарки</h2>
          <Card className="p-12 bg-white/60 backdrop-blur-sm border-primary/20">
            <div className="mb-8 text-6xl">🎁</div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Ваше присутствие — самый ценный подарок для нас. 
              Если вы хотите нас порадовать, мы будем благодарны за вклад в наше свадебное путешествие.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-accent/20 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Сбербанк</p>
                <p className="text-lg font-medium">2202 2020 2020 2020</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <div className="text-4xl mb-4">💐</div>
          <p className="text-muted-foreground mb-2">С любовью, Анна и Иван</p>
          <p className="text-sm text-muted-foreground">15 августа 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
