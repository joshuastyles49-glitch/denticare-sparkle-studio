import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Award, Sparkles, Phone, MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden"
    >
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass shadow-soft mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-deep">
              PMDC Verified · 16+ Years Experience
            </span>
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-semibold leading-[1.05] text-primary-deep">
            Your Smile,{" "}
            <span className="text-gradient">Perfected</span> with Care.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Premium dental care in Islamabad by Asst. Prof. Dr. Muhammad Omer
            Siddiqui. From cosmetic dentistry to advanced implants — experience
            comfort, precision and a smile you'll love.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#book">Book Your Appointment</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="#services">Explore Services</a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat icon={<Star className="w-5 h-5" />} value="4.7★" label="30+ Reviews" />
            <Stat icon={<Award className="w-5 h-5" />} value="16 Yrs" label="Experience" />
            <Stat icon={<ShieldCheck className="w-5 h-5" />} value="PMDC" label="Verified" />
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute -inset-10 bg-hero-gradient rounded-[2.5rem] blur-3xl opacity-25" />
          <div className="relative grid gap-5">
            <div className="glass rounded-3xl p-8 shadow-elegant float-anim">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold text-primary-deep">
                    Denticare Clinic
                  </div>
                  <div className="text-xs text-muted-foreground">Premium Dental Care</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
                <span className="ml-1 text-sm font-semibold text-primary-deep">4.7</span>
                <span className="text-xs text-muted-foreground">· 30 Google Reviews</span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                "Truly one of the best dentists I've visited. Painless, professional and gentle."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Hamza Q.</p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="glass rounded-3xl p-5 shadow-elegant">
                <Clock className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Open Today</div>
                <div className="text-sm font-semibold text-primary-deep">5 PM – 8:30 PM</div>
              </div>
              <div className="glass rounded-3xl p-5 shadow-elegant">
                <Phone className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Call Us</div>
                <div className="text-sm font-semibold text-primary-deep">0333 5299143</div>
              </div>
              <div className="glass rounded-3xl p-5 shadow-elegant col-span-2">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <div className="text-xs text-muted-foreground">Visit</div>
                <div className="text-sm font-semibold text-primary-deep">
                  Options Arcade, Main Road, PWD, Islamabad
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="flex flex-col">
    <div className="text-primary mb-1">{icon}</div>
    <div className="font-display text-2xl font-semibold text-primary-deep">{value}</div>
    <div className="text-xs text-muted-foreground">{label}</div>
  </div>
);

export default Hero;