import { title } from "process";
import { CTAButton } from "../ui/cta";
import { Bot, LineChart, LucideIcon, ScanEye, SquareStack } from "lucide-react";
import { FeatureCard } from "../ui/feature-card";

export const FeatureSection = () => {
  const features: { title: string; description: string; icon: LucideIcon }[] = [
    {
      title: "Visualization",
      description:
        "We create intuitive no-code dashboards with generative AI for seamless data visualization.",
      icon: LineChart,
    },
    {
      title: "Insights",
      description:
        "Our AI-powered insights extractors generate comprehensive reports for data analysis.",
      icon: ScanEye,
    },
    {
      title: "Chatbot",
      description:
        "Users can fully interact with our chatbot for data quality validation, insights extraction, and predictive modeling.",
      icon: Bot,
    },
    {
      title: "Versatile",
      description:
        "Our solutions are applicable across various industries, including insurance, finance, education, and retail.",
      icon: SquareStack,
    },
  ];
  return (
    <section className="pb-16 pt-8">
      <div className="container grid gap-14 md:grid-cols-2">
        <div className="col-span-1 max-w-md space-y-6">
          <span className="font-medium text-primary">Our services</span>
          <h2 className="text-6xl font-medium tracking-tight">
            What we can offer for you
          </h2>
          <p className="text-foreground/70">
            Our AI-powered platform simplifies data analysis with no-code
            dashboards, actionable insights, and conversational AI.
          </p>
          <CTAButton variant="primary">Get started</CTAButton>
        </div>
        <div className="col-span-1 grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
