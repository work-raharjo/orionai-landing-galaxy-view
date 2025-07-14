import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Bot, Mail, Phone } from "lucide-react"

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-stellar">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-gradient-cosmic border-0 shadow-glow-orion overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
            
            <CardContent className="p-12 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm">
                  <Bot className="w-12 h-12 text-white" />
                </div>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Customer Experience?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join leading Indonesian businesses already using OrionAI to deliver 
                exceptional conversational experiences and drive growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="secondary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
              
              <p className="text-sm text-white/70">
                No credit card required • 14-day free trial • Setup in minutes
              </p>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Card className="bg-card/50 backdrop-blur-md border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Get detailed information and custom quotes
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  sales@galacticindonesia.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-md border-border hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-3 rounded-lg bg-accent/10 w-fit mx-auto mb-4">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground mb-4">
                  Speak directly with our AI specialists
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  +62 21 1234 5678
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA