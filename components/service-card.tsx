import type React from "react"
import { ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceItem {
  name: string
}

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  services: ServiceItem[]
}

export function ServiceCard({ icon, title, description, services }: ServiceCardProps) {
  return (
    <div className="rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-primary/10 p-2">{icon}</div>
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="p-6 pt-0">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{service.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" className="gap-1">
            Saiba mais <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

