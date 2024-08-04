import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { CTAButton } from "../ui/cta";
import Image from "next/image";
import AppScreenSpotlight from "@/public/assets/images/app-screen.png";
import { Badge } from "../ui/badge";

export const HeroSection = () => {
  return (
    <section className="relative">
      <BackgroundFlare>
        <div className="absolute z-10 flex flex-col items-center">
          <div className="mb-6 inline-flex gap-1.5 rounded-full border border-white/5 bg-background/5 px-3 py-1.5 text-primary backdrop-blur">
            <Badge className="bg-primary text-background">NEW</Badge>
            <span>Latest integrate just arrived</span>
          </div>
          <div className="container flex flex-col items-center gap-4 text-center md:max-w-3xl">
            <h1 className="inline-flex flex-col text-6xl font-semibold lg:text-7xl">
              <span>Pioneers innovative</span>
              <span className="space-x-4">
                {`AI-driven solutions.`.split(" ").map((char, i) => (
                  <span
                    key={char + i}
                    className="inline-block bg-gradient-to-b from-white to-primary bg-clip-text text-transparent"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="max-w-xl text-lg font-medium leading-8">
              We empower users with advanced AI tools for enhanced analysis,
              insights, and decision-making.
            </p>
            <CTAButton variant="default">Request a demo</CTAButton>
          </div>
          <div className="container max-sm:px-5">
            <div className="mt-12 w-full rounded-[10px] border border-white/10 bg-gradient-to-r from-background via-background/0 to-background p-1 md:p-2.5">
              <Image
                src={AppScreenSpotlight}
                alt="app spotlight preview"
                className="aspect-video w-full rounded-sm border border-white/10 object-cover object-top"
              />
            </div>
          </div>
        </div>
      </BackgroundFlare>
      <div className="pointer-events-none absolute inset-0 z-10 size-full bg-gradient-to-b from-transparent from-60% to-background to-95%" />
      <div className="pointer-events-none absolute inset-0 z-[2] size-full bg-[url('/assets/images/grain.png')] bg-[length:118px] bg-repeat opacity-[0.04]" />
    </section>
  );
};

const BackgroundFlare: React.FC<PropsWithChildren> = ({ children }) => {
  const centerPos =
    "absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2";
  return (
    <div className="relative flex max-h-[calc(100vh+20px)] justify-center overflow-hidden pt-[96px] md:max-h-[calc(100vh+60px)] lg:max-h-none">
      <div
        className={cn(
          centerPos,
          "aspect-square w-[750px] rounded-full bg-[#AC4D39] blur-[220px]",
        )}
      />
      <div
        className={cn(
          centerPos,
          "aspect-square w-[400px] rounded-full bg-[#FE8029] blur-[100px]",
        )}
      />
      <svg width="1032" height="1032" viewBox="0 0 1032 1032" fill="none">
        <g opacity="0.3">
          <circle opacity="0.1" cx="516" cy="516" r="515.5" stroke="white" />
          <circle
            opacity="0.15"
            cx="516"
            cy="516"
            r="399.373"
            stroke="white"
            strokeDasharray="4 4"
          />
          <circle opacity="0.2" cx="516" cy="516" r="282.15" stroke="white" />
          <circle cx="177.478" cy="127.083" r="10.4554" stroke="#4D3763" />
          <circle
            cx="177.478"
            cy="127.083"
            r="3.88217"
            fill="#391714"
            stroke="#4D3763"
          />
        </g>
      </svg>
      {children}
    </div>
  );
};
