import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const games = [
    { id: 'cs2', name: 'CS2', icon: 'Target' },
    { id: 'dota2', name: 'Dota 2', icon: 'Shield' },
    { id: 'valorant', name: 'Valorant', icon: 'Crosshair' },
    { id: 'pubg', name: 'PUBG', icon: 'Scope' }
  ];

  const teams = {
    cs2: [
      { name: 'NeonStrike', role: 'AWPer', country: '🇷🇺', rating: 1.24 },
      { name: 'CyberVolt', role: 'Entry Fragger', country: '🇺🇦', rating: 1.18 },
      { name: 'StormEye', role: 'IGL', country: '🇰🇿', rating: 1.15 },
      { name: 'ThunderBolt', role: 'Support', country: '🇧🇾', rating: 1.12 },
      { name: 'LightningFast', role: 'Lurker', country: '🇷🇺', rating: 1.09 }
    ],
    dota2: [
      { name: 'VortexCore', role: 'Carry', country: '🇷🇺', mmr: 8450 },
      { name: 'SpinMaster', role: 'Mid', country: '🇺🇦', mmr: 8200 },
      { name: 'WhirlWind', role: 'Offlaner', country: '🇰🇿', mmr: 7950 },
      { name: 'StormCaller', role: 'Support', country: '🇧🇾', mmr: 7800 },
      { name: 'TempestGuard', role: 'Captain', country: '🇷🇺', mmr: 8100 }
    ],
    valorant: [
      { name: 'VortexAim', role: 'Duelist', country: '🇷🇺', rank: 'Radiant' },
      { name: 'CycloneShot', role: 'Controller', country: '🇺🇦', rank: 'Immortal 3' },
      { name: 'TwisterFlash', role: 'Initiator', country: '🇰🇿', rank: 'Immortal 2' },
      { name: 'WhirlSmoke', role: 'Sentinel', country: '🇧🇾', rank: 'Immortal 1' },
      { name: 'StormBreaker', role: 'Flex', country: '🇷🇺', rank: 'Immortal 3' }
    ],
    pubg: [
      { name: 'VortexSniper', role: 'Sniper', country: '🇷🇺', rank: 'Conqueror' },
      { name: 'CycloneDriver', role: 'Driver', country: '🇺🇦', rank: 'Ace' },
      { name: 'TwisterAssault', role: 'Assault', country: '🇰🇿', rank: 'Ace' },
      { name: 'StormMedic', role: 'Support', country: '🇧🇾', rank: 'Crown' },
      { name: 'WhirlTactic', role: 'IGL', country: '🇷🇺', rank: 'Ace' }
    ]
  };

  const tournaments = [
    {
      name: 'BLAST Premier World Final 2024',
      game: 'CS2',
      place: '2 место',
      prize: '$400,000',
      date: '2024-12-15',
      status: 'completed'
    },
    {
      name: 'The International 2024',
      game: 'Dota 2', 
      place: '5-6 место',
      prize: '$800,000',
      date: '2024-10-20',
      status: 'completed'
    },
    {
      name: 'VCT Champions 2024',
      game: 'Valorant',
      place: '1 место',
      prize: '$1,000,000',
      date: '2024-08-25',
      status: 'completed'
    },
    {
      name: 'PUBG Global Championship 2025',
      game: 'PUBG',
      place: 'Группа',
      prize: 'TBD',
      date: '2025-02-15',
      status: 'upcoming'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/img/5a261b46-4d37-464b-abcf-86c8b7e2ff5c.jpg" 
                alt="VORTEX"
                className="h-10 w-10 rounded-lg"
              />
              <h1 className="text-2xl font-bold gradient-text">VORTEX</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#teams" className="hover:text-primary transition-colors">Команды</a>
              <a href="#tournaments" className="hover:text-primary transition-colors">Турниры</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <Button variant="outline" size="sm">
                <Icon name="Users" size={16} className="mr-2" />
                Присоединиться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black mb-6 glow-text">
              VORTEX
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Вихрь победы в мире киберспорта
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              VORTEX — это передовая киберспортивная организация, объединяющая лучшие команды 
              по самым популярным дисциплинам: CS2, Dota 2, Valorant и PUBG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="animate-glow hover-scale">
                <Icon name="Trophy" size={20} className="mr-2" />
                Наши достижения
              </Button>
              <Button variant="outline" size="lg" className="hover-scale">
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть матчи
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teams Section */}
      <section id="teams" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Наши команды</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональные составы по каждой дисциплине, готовые покорять вершины киберспорта
            </p>
          </div>

          <Tabs defaultValue="cs2" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {games.map(game => (
                <TabsTrigger key={game.id} value={game.id} className="flex items-center gap-2">
                  <Icon name={game.icon as any} size={16} />
                  {game.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {games.map(game => (
              <TabsContent key={game.id} value={game.id} className="animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teams[game.id as keyof typeof teams].map((player, index) => (
                    <Card key={index} className="hover-scale bg-card border-border">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{player.name}</CardTitle>
                          <span className="text-2xl">{player.country}</span>
                        </div>
                        <CardDescription className="text-primary font-medium">
                          {player.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">
                            {'rating' in player && `Rating: ${player.rating}`}
                            {'mmr' in player && `MMR: ${player.mmr}`}
                            {'rank' in player && player.rank}
                          </Badge>
                          <Icon name="Star" size={16} className="text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Tournaments Section */}
      <section id="tournaments" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Турниры</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Наши достижения и предстоящие соревнования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Icon name="Trophy" size={24} className="mr-2 text-primary" />
                Достижения
              </h3>
              <div className="space-y-4">
                {tournaments.filter(t => t.status === 'completed').map((tournament, index) => (
                  <Card key={index} className="bg-card border-border hover-scale">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{tournament.name}</CardTitle>
                          <CardDescription className="text-primary">
                            {tournament.game}
                          </CardDescription>
                        </div>
                        <Badge 
                          variant={tournament.place.includes('1') ? 'default' : 'secondary'}
                          className={tournament.place.includes('1') ? 'animate-glow' : ''}
                        >
                          {tournament.place}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-secondary font-semibold">{tournament.prize}</span>
                        <span className="text-muted-foreground text-sm">{tournament.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Icon name="Calendar" size={24} className="mr-2 text-secondary" />
                Предстоящие
              </h3>
              <div className="space-y-4">
                {tournaments.filter(t => t.status === 'upcoming').map((tournament, index) => (
                  <Card key={index} className="bg-card border-border hover-scale">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{tournament.name}</CardTitle>
                          <CardDescription className="text-secondary">
                            {tournament.game}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="border-secondary text-secondary">
                          Скоро
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">{tournament.prize}</span>
                        <span className="text-foreground font-semibold">{tournament.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6 gradient-text">
                Почему VORTEX?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Мы верим в силу командной работы, профессионализм и инновации. Наша организация 
                стремится создать активное сообщество вокруг киберспорта, поддерживая как игроков, 
                так и фанатов.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Профессиональных игроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">$2.2M</div>
                  <div className="text-muted-foreground">Общий призовой фонд</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25</div>
                  <div className="text-muted-foreground">Турниров за год</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">4</div>
                  <div className="text-muted-foreground">Игровых дисциплины</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/3096cc90-d031-4c74-a20e-7e357f1545f8.jpg" 
                alt="VORTEX Team" 
                className="rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Присоединяйтесь к вихрю побед!
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Следите за нашими успехами, новостями и событиями. Станьте частью сообщества VORTEX 
            и вдохновляйтесь на достижение величия в киберспорте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="animate-glow hover-scale">
              <Icon name="UserPlus" size={20} className="mr-2" />
              Стать фанатом
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-card/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img 
                src="/img/5a261b46-4d37-464b-abcf-86c8b7e2ff5c.jpg" 
                alt="VORTEX"
                className="h-8 w-8 rounded"
              />
              <span className="text-xl font-bold gradient-text">VORTEX ESPORTS</span>
            </div>
            <div className="flex items-center space-x-6">
              <Icon name="Twitter" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Youtube" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Twitch" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Icon name="Instagram" size={20} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2024 VORTEX Esports. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;