import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="relative bg-primary-deep text-primary-foreground pt-20 pb-8 overflow-hidden">
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
    </div>
    <div className="container relative z-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-xl bg-hero-gradient grid place-items-center font-bold">
              D
            </div>
            <div className="font-display text-xl font-semibold">Denticare Dental Clinic</div>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            Premium dental care in Islamabad — led by Asst. Prof. Dr. Muhammad
            Omer Siddiqui (BDS, MHPE). Your smile, our priority.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /> Options Arcade, Main Road, PWD, Islamabad</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0" /> <a href="tel:+923335299143" className="hover:text-primary-foreground">0333 5299143</a></li>
            <li className="flex gap-2"><Clock className="w-4 h-4 mt-0.5 flex-shrink-0" /> 5:00 PM – 8:30 PM · Closed Sundays</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#services" className="hover:text-primary-foreground">Services</a></li>
            <li><a href="#doctor" className="hover:text-primary-foreground">Our Dentist</a></li>
            <li><a href="#reviews" className="hover:text-primary-foreground">Reviews</a></li>
            <li><a href="#book" className="hover:text-primary-foreground">Book Appointment</a></li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"><Facebook className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-primary-foreground/60">
        © {new Date().getFullYear()} Denticare Dental Clinic. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;