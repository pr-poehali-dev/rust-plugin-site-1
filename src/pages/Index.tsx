import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-foreground">RUST PLUGINS</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#plugins" className="text-muted-foreground hover:text-primary transition-colors">ПЛАГИНЫ</a>
              <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">ПОДДЕРЖКА</a>
              <a href="#download" className="text-muted-foreground hover:text-primary transition-colors">СКАЧАТЬ</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Download" size={16} className="mr-2" />
              СКАЧАТЬ
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            RUST SERVER
            <br />
            <span className="text-primary">PLUGINS</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Мощные плагины для конфигурации и настройки сервера Rust. 
            Полный контроль над игровым процессом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              <Icon name="Download" size={20} className="mr-2" />
              СКАЧАТЬ ПЛАГИН
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Icon name="FileText" size={20} className="mr-2" />
              ДОКУМЕНТАЦИЯ
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="plugins" className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">ВОЗМОЖНОСТИ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:border-primary transition-colors animate-scale-in">
              <CardHeader>
                <Icon name="Settings" className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">КОНФИГУРАЦИЯ</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Полная настройка параметров сервера через удобный интерфейс
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Настройка спавна предметов
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Управление PvP зонами
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Кастомные события
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors animate-scale-in">
              <CardHeader>
                <Icon name="Server" className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">УПРАВЛЕНИЕ</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Мониторинг и администрирование сервера в реальном времени
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Статистика игроков
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Банов и кики
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Логирование действий
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover:border-primary transition-colors animate-scale-in">
              <CardHeader>
                <Icon name="Puzzle" className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">ПЛАГИНЫ</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Расширенный функционал для уникального игрового опыта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Экономическая система
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Кланы и группы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-primary mr-2" />
                    Кастомные команды
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Configuration Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">НАСТРОЙКА<br />СЕРВЕРА</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Конфигурируйте все аспекты вашего Rust сервера через простой в использовании интерфейс. 
                От базовых настроек до продвинутых параметров игрового процесса.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Wrench" className="text-primary mr-3" size={20} />
                  <span>Конфигурационные файлы JSON</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Database" className="text-primary mr-3" size={20} />
                  <span>Управление базой данных</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" className="text-primary mr-3" size={20} />
                  <span>Система прав и ролей</span>
                </div>
              </div>
            </div>
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Icon name="FileCode" className="text-primary mr-2" size={24} />
                  config.json
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-background p-4 rounded-md text-sm overflow-x-auto">
                  <code className="text-muted-foreground">
{`{
  "ServerName": "Мой Rust Сервер",
  "MaxPlayers": 100,
  "WorldSize": 3000,
  "PVP": true,
  "Plugins": {
    "Economics": true,
    "Clans": true,
    "AdminTools": true
  }
}`}
                  </code>
                </pre>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 px-6 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">ПОДДЕРЖКА</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Нужна помощь с настройкой или возникли вопросы? Мы готовы помочь!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardHeader>
                <Icon name="MessageCircle" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle>Discord</CardTitle>
                <CardDescription>Сообщество разработчиков</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader>
                <Icon name="Mail" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle>Email</CardTitle>
                <CardDescription>Техническая поддержка</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader>
                <Icon name="FileText" className="text-primary mx-auto mb-4" size={48} />
                <CardTitle>Документация</CardTitle>
                <CardDescription>Подробные инструкции</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Zap" className="text-primary" size={24} />
            <span className="text-xl font-bold">RUST PLUGINS</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Rust Plugins. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;