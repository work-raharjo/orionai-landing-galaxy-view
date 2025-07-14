import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bot, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-xl bg-gradient-cosmic bg-clip-text text-transparent">
                  OrionAI
                </div>
                <div className="text-sm text-muted-foreground">
                  by PT Galactic Indonesia Perkasa
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-md leading-relaxed">
              Transforming business communication with next-generation AI technology. 
              Trusted by leading Indonesian companies for intelligent customer engagement.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Enterprise AI</Badge>
              <Badge variant="secondary">24/7 Support</Badge>
              <Badge variant="secondary">Indonesian Made</Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                Features
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                Use Cases
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                Pricing
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                Documentation
              </Button>
              <Button variant="ghost" size="sm" className="h-auto p-0 justify-start text-muted-foreground hover:text-primary">
                API Reference
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                <div>
                  <div>Jakarta, Indonesia</div>
                  <div>Jl. Sudirman No. 123</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+62 21 1234 5678</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@galacticindonesia.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>
            © 2024 PT Galactic Indonesia Perkasa. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Terms of Service
            </Button>
            <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
              Security
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer