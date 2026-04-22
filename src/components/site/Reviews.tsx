import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Irum Gilani",
    text: "My experience with Dr Omar has been very good. He is an expert dental surgeon with ethical behaviour which is rare combination. Dr Omar made every effort to make my experience comfortable and satisfying. I strongly recommend him.",
    when: "7 months ago",
  },
  {
    name: "Ghazal Zaman",
    text: "I got my scaling, filling and extractions done from Denticare and the experience has been amazing! The clinic is super clean, and the doctor is very skilled, professional and gentle. Highly recommend!",
    when: "9 months ago",
  },
  {
    name: "Hamza Qaiser",
    text: "My overall experience with Denticare has been excellent. Dr. Omer is extremely humble and cooperative — truly one of the best! I didn't feel any pain even after my extractions. Highly recommended!",
    when: "9 months ago",
  },
  {
    name: "Sana Ahmed",
    text: "Beautiful clinic and very modern equipment. Dr. Omer explained every step before starting. My whitening results are amazing — couldn't be happier!",
    when: "5 months ago",
  },
  {
    name: "Bilal Khan",
    text: "Got my crown done here. The fit and finish are perfect, and the team is genuinely caring. Worth every rupee.",
    when: "4 months ago",
  },
  {
    name: "Ayesha Malik",
    text: "Took my daughter for her first dental visit. The staff was so gentle and patient with her. Highly recommended for kids too!",
    when: "3 months ago",
  },
];

const Reviews = () => (
  <section id="reviews" className="relative py-24 lg:py-32 bg-soft-gradient overflow-hidden">
    <div className="container relative z-10">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold tracking-widest text-primary uppercase">
          Patient Stories
        </span>
        <h2 className="font-display text-4xl lg:text-5xl font-semibold mt-3 text-primary-deep">
          Loved by <span className="text-gradient">Our Patients</span>
        </h2>
        <div className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full glass shadow-soft">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
            ))}
          </div>
          <span className="font-semibold text-primary-deep">4.7</span>
          <span className="text-muted-foreground text-sm">· 30 Google Reviews</span>
        </div>
      </div>

      <div className="marquee-mask marquee-pause">
        <div className="marquee-track gap-6 py-4">
          {[...reviews, ...reviews].map((r, i) => (
            <div
              key={i}
              className="w-[340px] sm:w-[400px] shrink-0 relative bg-card-gradient rounded-2xl p-8 border border-border/60 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-500"
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed text-sm line-clamp-6">{r.text}</p>
              <div className="mt-6 pt-6 border-t border-border/60 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-hero-gradient grid place-items-center text-primary-foreground font-semibold">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-primary-deep">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.when}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Reviews;