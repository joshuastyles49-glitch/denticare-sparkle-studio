import { GraduationCap, Stethoscope, Award, Users } from "lucide-react";
import doctor from "@/assets/doctor.jpg";

const Doctor = () => (
  <section id="doctor" className="relative py-24 lg:py-32">
    <div className="container relative z-10 grid lg:grid-cols-5 gap-12 items-center">
      <div className="lg:col-span-2 relative animate-scale-in">
        <div className="absolute -inset-6 bg-hero-gradient rounded-[2rem] blur-3xl opacity-25" />
        <div className="relative rounded-[2rem] overflow-hidden shadow-elegant">
          <img
            src={doctor}
            alt="Asst. Prof. Dr. Muhammad Omer Siddiqui"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="lg:col-span-3 animate-fade-in-up">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Meet Your Dentist
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
          Asst. Prof. Dr. Muhammad{" "}
          <span className="text-gradient">Omer Siddiqui</span>
        </h2>
        <p className="mt-3 text-primary font-medium">BDS, MHPE · PMDC Verified Dentist</p>

        <p className="mt-5 text-muted-foreground leading-relaxed">
          With over 16 years of clinical experience, Dr. Omer is renowned for his
          calm, ethical and patient-first approach. His expertise spans cosmetic
          dentistry, implants, root canals and complex restorations — delivered
          with precision and genuine care.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 gap-4">
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