import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  className?: string
}

export const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        'size-full space-y-3 rounded-2xl bg-foreground/10 p-6',
        className
      )}
    >
      <Icon size={64} strokeWidth={1.5} />
      <h3 className="text-xl font-medium text-primary">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  )
}
