import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#2D3748] to-[#1A202C] text-white font-open-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-montserrat font-bold">CyberBun</h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {["Главная", "Услуги", "Команда", "Технологии", "Контакты"].map((item) => (
              <a key={item} href="#" className="hover:text-cyan-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>

          <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-6">
            Связаться
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-cyan-400 text-sm font-medium">Технобулочка будущего</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6">
              Инновации в
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent block">
                IT
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Создаем технологические решения будущего для вашего бизнеса
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-8 py-3 text-lg">
                <Icon name="Rocket" size={20} className="mr-2" />
                Начать проект
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Создать тикет
              </Button>
            </div>
          </div>

          {/* Central Logo */}
          <div className="mt-16 animate-slide-up">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center animate-glow">
              <Icon name="Zap" size={64} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Наши услуги</h2>
            <p className="text-gray-400 text-lg">Полный спектр IT-решений для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Code" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">Разработка веб-приложений</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Современные SPA и PWA решения</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Smartphone" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">Мобильные приложения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">iOS и Android приложения</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">Система управления</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">CRM и ERP системы</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up lg:col-span-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">ИИ и автоматизация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Машинное обучение и боты</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/50 transition-all duration-300 animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Cloud" size={32} className="text-white" />
                </div>
                <CardTitle className="text-white text-xl">Облачные решения</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Масштабируемая инфраструктура</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Технологический стек</h2>
            <p className="text-gray-400 text-lg">Используем передовые технологии</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", icon: "Code" },
              { name: "Node.js", icon: "Server" },
              { name: "TypeScript", icon: "FileCode" },
              { name: "Python", icon: "Bot" },
              { name: "Docker", icon: "Container" },
              { name: "AWS", icon: "Cloud" }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="text-center p-6 rounded-xl bg-gray-800/30 hover:bg-gray-700/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={tech.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="text-white font-medium">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-montserrat font-bold mb-4">Наша команда</h2>
            <p className="text-gray-400 text-lg">Профессионалы своего дела</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Алексей Петров", role: "Lead Developer", avatar: "👨‍💻" },
              { name: "Мария Иванова", role: "UI/UX Designer", avatar: "👩‍🎨" },
              { name: "Дмитрий Козлов", role: "DevOps Engineer", avatar: "👨‍🔧" }
            ].map((member) => (
              <Card key={member.name} className="bg-gray-800/50 border-gray-700/50 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                    {member.avatar}
                  </div>
                  <CardTitle className="text-white">{member.name}</CardTitle>
                  <p className="text-cyan-400">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-cyan-400/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-montserrat font-bold mb-8">Готовы к сотрудничеству?</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами для обсуждения вашего проекта
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-medium px-8 py-3 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-lg">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать письмо
            </Button>
          </div>

          <div className="flex justify-center space-x-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" size={20} />
              <span>Москва, Россия</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} />
              <span>24/7 поддержка</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-lg">CyberBun</span>
            </div>
            
            <p className="text-gray-400">© 2024 CyberBun. Все права защищены.</p>
            
            <div className="flex space-x-4 mt-4 md:mt-0">
              {["О компании", "Блог", "Кейсы", "Карьера"].map((link) => (
                <a key={link} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}