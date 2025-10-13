import { useEffect, useRef } from "react";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "./ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: 1,
    title: "IBM Data Science Professional Certificate",
    description:
      "Program covering Python, SQL, data visualization, machine learning techniques",
    issuer: "IBM",
    skills: [
      "Python",
      "SQL",
      "Machine Learning",
      "Data Visualization",
      "Pandas",
      "Jupyter",
    ],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/professional-cert/Z3GUN0KKX88Y", // Updated to actual program page
    completionDate: "2024",
  },
  {
    id: 2,
    title: "Google Business Intelligence Certificate",
    description:
      "Advanced business intelligence program focusing on strategic dashboard creation.",
    issuer: "Google",
    skills: ["Tableau", "SQL", "Business Intelligence", "Dashboard Design"],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/LTAJWDZ82NKA", // Updated to actual program page
    completionDate: "2024",
  },
  {
    id: 3,
    title: "Google Data Analytics Certificate",
    description:
      "Foundational data analytics program covering data cleaning, analysis, and visualization using industry-standard tools.",
    issuer: "Google",
    skills: ["SQL", "Data Cleaning", "Excel", "Statistical Analysis"],
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/specialization/NFYKQZDLWVAM", // Updated to actual program page
    completionDate: "2024",
  },
];

export const Certifications = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 px-6 bg-muted/30"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data
            science and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="card-gradient p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-primary/10 mr-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.completionDate}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="relative z-10">
                <Button size="sm" className="w-full" asChild>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
