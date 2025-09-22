import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface ServerConfig {
  serverName: string;
  maxPlayers: number;
  worldSize: number;
  pvp: boolean;
  sleepers: boolean;
  decay: boolean;
  economics: boolean;
  clans: boolean;
  adminTools: boolean;
  gatherRate: number;
  craftingSpeed: number;
}

const ConfigEditor = () => {
  const [config, setConfig] = useState<ServerConfig>({
    serverName: "Мой Rust Сервер",
    maxPlayers: 100,
    worldSize: 3000,
    pvp: true,
    sleepers: true,
    decay: false,
    economics: true,
    clans: true,
    adminTools: true,
    gatherRate: 2,
    craftingSpeed: 1
  });

  const updateConfig = (key: keyof ServerConfig, value: any) => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const generateJSON = () => {
    return {
      "ServerName": config.serverName,
      "MaxPlayers": config.maxPlayers,
      "WorldSize": config.worldSize,
      "PVP": config.pvp,
      "Sleepers": config.sleepers,
      "Decay": config.decay,
      "GatherRate": config.gatherRate,
      "CraftingSpeed": config.craftingSpeed,
      "Plugins": {
        "Economics": config.economics,
        "Clans": config.clans,
        "AdminTools": config.adminTools
      }
    };
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(generateJSON(), null, 2));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Configuration Form */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center">
            <Icon name="Settings" className="text-primary mr-2" size={28} />
            КОНФИГУРАТОР СЕРВЕРА
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Server Name */}
          <div className="space-y-2">
            <Label htmlFor="serverName" className="text-sm font-medium">Название сервера</Label>
            <Input
              id="serverName"
              value={config.serverName}
              onChange={(e) => updateConfig('serverName', e.target.value)}
              className="bg-background border-border"
            />
          </div>

          {/* Max Players */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Максимум игроков: {config.maxPlayers}</Label>
            <Slider
              value={[config.maxPlayers]}
              onValueChange={(value) => updateConfig('maxPlayers', value[0])}
              min={10}
              max={300}
              step={10}
              className="w-full"
            />
          </div>

          {/* World Size */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Размер мира: {config.worldSize}</Label>
            <Slider
              value={[config.worldSize]}
              onValueChange={(value) => updateConfig('worldSize', value[0])}
              min={1000}
              max={4000}
              step={500}
              className="w-full"
            />
          </div>

          {/* Gather Rate */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Скорость сбора ресурсов: x{config.gatherRate}</Label>
            <Slider
              value={[config.gatherRate]}
              onValueChange={(value) => updateConfig('gatherRate', value[0])}
              min={0.5}
              max={10}
              step={0.5}
              className="w-full"
            />
          </div>

          {/* Crafting Speed */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Скорость крафта: x{config.craftingSpeed}</Label>
            <Slider
              value={[config.craftingSpeed]}
              onValueChange={(value) => updateConfig('craftingSpeed', value[0])}
              min={0.1}
              max={5}
              step={0.1}
              className="w-full"
            />
          </div>

          {/* Game Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">ИГРОВЫЕ НАСТРОЙКИ</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="pvp" className="text-sm font-medium">PvP режим</Label>
              <Switch
                id="pvp"
                checked={config.pvp}
                onCheckedChange={(checked) => updateConfig('pvp', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="sleepers" className="text-sm font-medium">Спящие игроки</Label>
              <Switch
                id="sleepers"
                checked={config.sleepers}
                onCheckedChange={(checked) => updateConfig('sleepers', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="decay" className="text-sm font-medium">Разрушение построек</Label>
              <Switch
                id="decay"
                checked={config.decay}
                onCheckedChange={(checked) => updateConfig('decay', checked)}
              />
            </div>
          </div>

          {/* Plugins */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">ПЛАГИНЫ</h3>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="economics" className="text-sm font-medium">Economics (Экономика)</Label>
              <Switch
                id="economics"
                checked={config.economics}
                onCheckedChange={(checked) => updateConfig('economics', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="clans" className="text-sm font-medium">Clans (Кланы)</Label>
              <Switch
                id="clans"
                checked={config.clans}
                onCheckedChange={(checked) => updateConfig('clans', checked)}
              />
            </div>

            <div className="flex items-center justify-between">
              <Label htmlFor="adminTools" className="text-sm font-medium">Admin Tools</Label>
              <Switch
                id="adminTools"
                checked={config.adminTools}
                onCheckedChange={(checked) => updateConfig('adminTools', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Live Preview */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center justify-between">
            <div className="flex items-center">
              <Icon name="FileCode" className="text-primary mr-2" size={28} />
              LIVE ПРЕВЬЮ
            </div>
            <Button 
              onClick={copyToClipboard}
              size="sm"
              className="bg-primary hover:bg-primary/90"
            >
              <Icon name="Copy" size={16} className="mr-2" />
              КОПИРОВАТЬ
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-background p-4 rounded-md border border-border">
            <pre className="text-sm overflow-x-auto">
              <code className="text-muted-foreground whitespace-pre-wrap">
                {JSON.stringify(generateJSON(), null, 2)}
              </code>
            </pre>
          </div>
          
          {/* Server Info */}
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-semibold text-primary">ИНФОРМАЦИЯ О СЕРВЕРЕ</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Icon name="Users" className="text-primary mr-2" size={16} />
                <span>{config.maxPlayers} игроков макс.</span>
              </div>
              <div className="flex items-center">
                <Icon name="Map" className="text-primary mr-2" size={16} />
                <span>{config.worldSize}x{config.worldSize} мир</span>
              </div>
              <div className="flex items-center">
                <Icon name={config.pvp ? "Sword" : "Shield"} className="text-primary mr-2" size={16} />
                <span>{config.pvp ? "PvP включен" : "PvE режим"}</span>
              </div>
              <div className="flex items-center">
                <Icon name="Zap" className="text-primary mr-2" size={16} />
                <span>x{config.gatherRate} сбор ресурсов</span>
              </div>
            </div>
            
            {/* Active Plugins */}
            <div>
              <h5 className="font-medium text-muted-foreground mb-2">Активные плагины:</h5>
              <div className="flex flex-wrap gap-2">
                {config.economics && (
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Economics</span>
                )}
                {config.clans && (
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Clans</span>
                )}
                {config.adminTools && (
                  <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Admin Tools</span>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigEditor;