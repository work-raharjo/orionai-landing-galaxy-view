import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Bot, Sparkles, Zap } from "lucide-react"
import heroImage from "@/assets/hero-orion.jpg"

declare global {
  interface Window {
    botpress: {
      open: () => void;
      init: (config: any) => void;
      on: (event: string, callback: () => void) => void;
    };
  }
}

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary-glow rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headlines */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 text-primary mb-4">
              <Bot className="w-8 h-8" />
              <span className="text-lg font-semibold">PT Galactic Indonesia Perkasa</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-cosmic bg-clip-text text-transparent leading-tight">
              Meet OrionAI
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The next-generation conversational AI that transforms how businesses communicate, 
              automate, and innovate in the digital cosmos.
            </p>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 my-8" style={{ animationDelay: '0.2s' }}>
            <Card className="px-4 py-2 bg-background/10 backdrop-blur-md border-primary/30">
              <div className="flex items-center space-x-2 text-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Advanced NLP</span>
              </div>
            </Card>
            <Card className="px-4 py-2 bg-background/10 backdrop-blur-md border-primary/30">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="w-4 h-4 text-primary" />
                <span>Lightning Fast</span>
              </div>
            </Card>
            <Card className="px-4 py-2 bg-background/10 backdrop-blur-md border-primary/30">
              <div className="flex items-center space-x-2 text-sm">
                <Bot className="w-4 h-4 text-accent" />
                <span>24/7 Intelligent</span>
              </div>
            </Card>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Button variant="cosmic" size="lg" className="group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="orion" 
              size="lg"
              onClick={() => {
                const webchat = document.getElementById('webchat');
                if (webchat) {
                  webchat.style.display = 'block';
                  window.botpress.open();
                }
              }}
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">50ms</div>
              <div className="text-sm text-muted-foreground">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero