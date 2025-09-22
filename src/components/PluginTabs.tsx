import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const PluginTabs = () => {
  const freePlugins = [
    {
      icon: "Settings",
      title: "КОНФИГУРАЦИЯ",
      description: "Полная настройка параметров сервера через удобный интерфейс",
      features: [
        "Настройка спавна предметов",
        "Управление PvP зонами", 
        "Кастомные события"
      ]
    },
    {
      icon: "Server",
      title: "УПРАВЛЕНИЕ",
      description: "Мониторинг и администрирование сервера в реальном времени",
      features: [
        "Статистика игроков",
        "Банов и кики",
        "Логирование действий"
      ]
    },
    {
      icon: "Puzzle",
      title: "ПЛАГИНЫ",
      description: "Расширенный функционал для уникального игрового опыта",
      features: [
        "Экономическая система",
        "Кланы и группы",
        "Кастомные команды"
      ]
    }
  ];

  const premiumPlugins = [
    {
      icon: "Crown",
      title: "ADVANCED ECONOMY",
      description: "Продвинутая экономическая система с банками и биржей",
      price: "1,500₽",
      features: [
        "Система банков и займов",
        "Фондовая биржа предметов",
        "Автоматические аукционы",
        "Налоговая система",
        "Криптовалюта сервера"
      ],
      popular: true
    },
    {
      icon: "Shield",
      title: "RAID PROTECTION",
      description: "Защита от рейдов с системой страхования построек",
      price: "2,200₽",
      features: [
        "Страхование построек",
        "Рейд-календарь",
        "Защищенные зоны",
        "Система компенсаций",
        "Антигриф защита"
      ]
    },
    {
      icon: "Zap",
      title: "PERFORMANCE PRO",
      description: "Оптимизация сервера для максимальной производительности",
      price: "3,000₽",
      features: [
        "AI оптимизация ресурсов",
        "Автоочистка мира",
        "Умное управление NPC",
        "Предсказание лагов",
        "Турбо-режим сервера"
      ]
    },
    {
      icon: "Users",
      title: "SOCIAL NETWORKS",
      description: "Система социальных связей и репутации игроков",
      price: "1,800₽",
      features: [
        "Система репутации",
        "Друзья и враги",
        "Внутриигровой чат",
        "Гильдии и альянсы",
        "Система торговли"
      ]
    },
    {
      icon: "Map",
      title: "WORLD GENERATOR",
      description: "Процедурная генерация уникальных карт и локаций",
      price: "2,500₽",
      features: [
        "Кастомные биомы",
        "Уникальные POI",
        "Динамические события",
        "Сезонные изменения",
        "Эксклюзивные ресурсы"
      ]
    },
    {
      icon: "Trophy",
      title: "ACHIEVEMENTS",
      description: "Система достижений и наград для мотивации игроков",
      price: "1,200₽",
      features: [
        "200+ достижений",
        "Система рангов",
        "Еженедельные квесты",
        "Эксклюзивные награды",
        "Таблица лидеров"
      ]
    }
  ];

  return (
    <div className="container mx-auto">
      <Tabs defaultValue="free" className="w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">ВОЗМОЖНОСТИ</h2>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card">
            <TabsTrigger value="free" className="text-sm font-medium">БЕСПЛАТНЫЕ</TabsTrigger>
            <TabsTrigger value="premium" className="text-sm font-medium">ПЛАТНЫЕ</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="free" className="space-y-8">
          <div className="grid md:grid-cols-3 gap-8">
            {freePlugins.map((plugin, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary transition-colors animate-scale-in">
                <CardHeader>
                  <Icon name={plugin.icon as any} className="text-primary mb-4" size={48} />
                  <CardTitle className="text-2xl">{plugin.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plugin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {plugin.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    СКАЧАТЬ БЕСПЛАТНО
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="premium" className="space-y-8">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Премиум плагины для профессиональных серверов. Получите конкурентное преимущество и уникальные возможности!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumPlugins.map((plugin, index) => (
              <Card key={index} className="bg-background border-border hover:border-primary transition-colors animate-scale-in relative">
                {plugin.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={plugin.icon as any} className="text-primary" size={40} />
                    <span className="text-2xl font-bold text-primary">{plugin.price}</span>
                  </div>
                  <CardTitle className="text-xl">{plugin.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plugin.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    {plugin.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Crown" size={14} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      КУПИТЬ
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Icon name="Eye" size={16} className="mr-2" />
                      ДЕМО
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Benefits */}
          <Card className="bg-card border-primary/50 mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary flex items-center justify-center">
                <Icon name="Star" className="mr-2" size={32} />
                ПРЕМИУМ ПРЕИМУЩЕСТВА
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <Icon name="Headphones" className="text-primary mx-auto" size={32} />
                  <h4 className="font-semibold">24/7 ПОДДЕРЖКА</h4>
                  <p className="text-sm text-muted-foreground">Приоритетная техническая поддержка</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Download" className="text-primary mx-auto" size={32} />
                  <h4 className="font-semibold">ОБНОВЛЕНИЯ</h4>
                  <p className="text-sm text-muted-foreground">Бесплатные обновления навсегда</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Shield" className="text-primary mx-auto" size={32} />
                  <h4 className="font-semibold">ГАРАНТИЯ</h4>
                  <p className="text-sm text-muted-foreground">30 дней возврат средств</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PluginTabs;