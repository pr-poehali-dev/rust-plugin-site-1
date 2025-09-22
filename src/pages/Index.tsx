import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ConfigEditor from "@/components/ConfigEditor";
import PluginTabs from "@/components/PluginTabs";

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
        <PluginTabs />
      </section>

      {/* Configuration Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">ИНТЕРАКТИВНЫЙ<br />КОНФИГУРАТОР</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Настройте сервер Rust в реальном времени. Измените параметры слева и сразу увидьте результат в JSON справа.
              Скопируйте готовую конфигурацию одним кликом!
            </p>
          </div>
          <ConfigEditor />
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