import { GraduationCap, Stethoscope, Award, Users, Sparkles } from "lucide-react";
import drOmer from "@/assets/dr-omer.png";

const Doctor = () => (
  <section id="doctor" className="relative py-24 lg:py-32">
    <div className="container relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="relative animate-scale-in order-2 lg:order-1">
        <div className="absolute -inset-6 bg-hero-gradient rounded-[2.5rem] blur-3xl opacity-30" />
        <div className="relative rounded-[2rem] overflow-hidden bg-primary-deep shadow-elegant aspect-[4/5]">
          <img
            src={drOmer}
            alt="Asst. Prof. Dr. Muhammad Omer Siddiqui — Cosmetic Dentist at Denticare Dental Clinic Islamabad"
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-5 -right-5 glass rounded-2xl px-5 py-3 shadow-elegant float-anim">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <div>
              <div className="text-xs text-muted-foreground">Lead Dentist</div>
              <div className="text-sm font-semibold text-primary-deep">BDS · MHPE</div>
            </div>
          </div>
        </div>
      </div>

      <div className="animate-fade-in-up order-1 lg:order-2 text-center lg:text-left">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Meet Your Dentist
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
          Asst. Prof. Dr. Muhammad{" "}
          <span className="text-gradient">Omer Siddiqui</span>
        </h2>
        <p className="mt-3 text-primary font-medium">BDS, MHPE · PMDC Verified Dentist</p>

        <p className="mt-5 text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
          With over 16 years of clinical experience, Dr. Omer is renowned for his
          calm, ethical and patient-first approach. His expertise spans cosmetic
          dentistry, implants, root canals and complex restorations — delivered
          with precision and genuine care.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-4 text-left">
          <Item icon={GraduationCap} title="BDS, MHPE" sub="Qualified Specialist" />
          <Item icon={Award} title="16+ Years" sub="Clinical Experience" />
          <Item icon={Stethoscope} title="PMDC Verified" sub="Licensed Practitioner" />
          <Item icon={Users} title="1000+ Patients" sub="Treated with Care" />
        </div>
      </div>
    </div>
  </section>
);

const Item = ({ icon: Icon, title, sub }: { icon: any; title: string; sub: string }) => (
  <div className="flex items-center gap-4 p-4 rounded-2xl bg-card-gradient border border-border/60 shadow-soft">
    <div className="w-12 h-12 rounded-xl bg-hero-gradient grid place-items-center text-primary-foreground shadow-elegant">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <div className="font-semibold text-primary-deep">{title}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  </div>
);

export default Doctor;