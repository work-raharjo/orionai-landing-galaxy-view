import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  MessageSquare, 
  Shield, 
  Zap, 
  Globe, 
  BarChart3,
  Users,
  Settings,
  Smartphone
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Understanding",
      description: "Powered by cutting-edge natural language processing to understand context, intent, and nuance in conversations.",
      badge: "Core AI"
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Integration",
      description: "Seamlessly integrate with WhatsApp, Telegram, websites, and mobile apps for unified customer experience.",
      badge: "Integration"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with international security standards to protect your data.",
      badge: "Security"
    },
    {
      icon: Zap,
      title: "Lightning Performance",
      description: "Sub-50ms response times with 99.9% uptime guarantee for uninterrupted service delivery.",
      badge: "Performance"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in 100+ languages including Bahasa Indonesia, English, and regional dialects.",
      badge: "Global"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive insights and reporting to track performance, user satisfaction, and business metrics.",
      badge: "Analytics"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Human handoff capabilities with seamless agent collaboration and conversation history.",
      badge: "Workflow"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Build complex conversation flows and automate business processes with visual workflow builder.",
      badge: "Automation"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Native mobile experience with responsive design and progressive web app capabilities.",
      badge: "Mobile"
    }
  ]

  return (
    <section className="py-24 bg-gradient-stellar">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Powerful Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Everything You Need for Intelligent Conversations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            OrionAI combines advanced artificial intelligence with enterprise-grade reliability 
            to deliver exceptional conversational experiences at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-md border-border hover:border-primary/30 transition-all duration-300 hover:shadow-cosmic group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features