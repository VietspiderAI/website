import { Button } from "../ui/button";

export const CtaBannerSection = () => {
  return (
    <section className="container py-12">
      <div className="flex h-96 flex-col items-center justify-center overflow-hidden rounded-lg border">
        <h2 className="text-4xl font-semibold">AI-driven SEO for everyone.</h2>
        <p className="mt-2">Get in touch or create an account.</p>
        <div className="mt-4">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
