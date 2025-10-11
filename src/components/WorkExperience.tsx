import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    title: "Data Engineer Intern",
    company: "Hyundai Motor Group Innovation Center (HMGICS)",
    period: "July 2025 - Present",
    location: "Singapore",
    description:
      "Leading ML initiatives for predictive analytics platform. Developed ensemble models achieving 95% accuracy in customer churn prediction. Mentoring team of 3 junior data scientists.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Web Dev Teaching Assistant",
    company: "Singapore Management University",
    period: "Jan 2025 - May 2025",
    location: "Singapore",
    description:
      "Built recommendation systems using collaborative filtering and deep learning. Optimized SQL queries reducing dashboard load time by 60%. Deployed models to production using Docker and AWS.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    title: "Mandarin Tutor",
    company: "School of Language & Communication",
    period: "Dec 2022 - Jun 2023",
    location: "Singapore",
    description:
      "Conducted exploratory data analysis and created interactive dashboards in Tableau. Automated reporting workflows with Python reducing manual work by 40%. Collaborated with cross-functional teams.",
    color: "from-blue-600 to-indigo-600",
  },
];

export const WorkExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        timelineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              ease: "back.out(1.2)",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden bg-muted/20"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey thus far
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div
            ref={timelineRef}
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2 origin-top"
            style={{ transformOrigin: "top" }}
          />

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg ring-4 ring-background`}
                    >
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} blur-xl opacity-50 animate-pulse-glow`}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <div className="card-gradient p-6 rounded-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold group-hover:gradient-text transition-all">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span className="px-3 py-1 rounded-full bg-secondary">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-secondary">
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
