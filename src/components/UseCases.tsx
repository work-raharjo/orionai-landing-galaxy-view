import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShoppingBag, 
  Stethoscope, 
  GraduationCap, 
  Building, 
  Headphones,
  ArrowRight
} from "lucide-react"

const UseCases = () => {
  const useCases = [
    {
      icon: ShoppingBag,
      title: "E-Commerce & Retail",
      description: "Automate customer support, product recommendations, order tracking, and shopping assistance across all channels.",
      benefits: ["24/7 Customer Support", "Product Discovery", "Order Management"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Wellness",
      description: "Provide appointment scheduling, health information, medication reminders, and initial symptom assessment.",
      benefits: ["Appointment Booking", "Health Reminders", "FAQ Support"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Deliver personalized learning experiences, course guidance, assessment help, and administrative support.",
      benefits: ["Learning Assistance", "Course Guidance", "24/7 Help Desk"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Building,
      title: "Corporate & Enterprise",
      description: "Streamline internal processes, HR queries, IT support, and employee onboarding with intelligent automation.",
      benefits: ["HR Automation", "IT Help Desk", "Process Optimization"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description: "Transform customer service with instant responses, ticket routing, and seamless human handoff capabilities.",
      benefits: ["Instant Responses", "Smart Routing", "Agent Collaboration"],
      color: "from-cyan-500 to-blue-600"
    }
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 text-accent">
            Use Cases
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-cosmic bg-clip-text text-transparent">
            Transforming Industries with AI
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From e-commerce to healthcare, OrionAI adapts to your industry needs 
            and delivers tailored conversational experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {useCases.map((useCase, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-md border-border hover:border-primary/30 transition-all duration-300 hover:shadow-stellar group overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${useCase.color} shadow-lg`}>
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {useCase.title}
                      </CardTitle>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed text-base">
                  {useCase.description}
                </CardDescription>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <Badge 
                        key={benefitIndex} 
                        variant="secondary" 
                        className="text-xs bg-muted/50"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="group/btn w-full justify-start p-0 h-auto text-primary hover:text-primary">
                  Learn more about this use case
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-gradient-nebula border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
              <p className="text-muted-foreground mb-6">
                OrionAI is highly customizable and can be adapted to any industry or use case. 
                Let's discuss how we can tailor it for your specific needs.
              </p>
              <Button variant="cosmic" size="lg">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default UseCases