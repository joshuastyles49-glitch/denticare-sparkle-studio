import {
  Sparkles,
  Wrench,
  Smile,
  Stethoscope,
  Baby,
  Scissors,
  Crown,
  Activity,
  ShieldCheck,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Teeth Whitening", desc: "Brighten your smile with safe, professional whitening treatments." },
  { icon: Wrench, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements that last a lifetime." },
  { icon: Smile, title: "Veneers", desc: "Custom porcelain veneers for a flawless Hollywood smile." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Restore strength and aesthetics with premium crowns and bridges." },
  { icon: Activity, title: "Root Canal Treatment", desc: "Pain-free, modern endodontic care to save your natural teeth." },
  { icon: ShieldCheck, title: "Scaling & Polishing", desc: "Deep cleaning to keep your gums healthy and teeth shining." },
  { icon: Stethoscope, title: "Permanent Fillings", desc: "Durable tooth-colored fillings that blend seamlessly." },
  { icon: Scissors, title: "Braces & Orthodontics", desc: "Straighten teeth with modern braces and aligner solutions." },
  { icon: Baby, title: "Children Dentistry", desc: "Gentle, friendly paediatric dental care for little smiles." },
];

const Services = () => (
  <section id="services" className="relative py-24 lg:py-32">
    <div className="container relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in-up">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Our Services
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
          Complete Dental Care{" "}
          <span className="text-gradient">Under One Roof</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          From routine cleanings to advanced cosmetic procedures, Denticare offers
          a full spectrum of premium dental treatments.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group relative bg-card-gradient rounded-2xl p-8 border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="w-14 h-14 rounded-xl bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant mb-5 group-hover:scale-110 transition-transform duration-500">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary-deep mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;