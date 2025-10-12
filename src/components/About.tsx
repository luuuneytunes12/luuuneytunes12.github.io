import { useEffect, useRef } from "react";
import aboutBg from "@/assets/about-bg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about extracting meaningful insights from data <br></br>&
            building robust ML models
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-md leading-relaxed text-muted-foreground">
              Hello, I’m Wei Lun! I’m a{" "}
              <strong>
                Year 3 Business Analytics student at Singapore Management
                University (SMU)
              </strong>{" "}
              with a strong passion for machine learning, data science, and
              analytical problem-solving.
            </p>

            <p className="text-md leading-relaxed text-muted-foreground">
              I’m an <strong>aspiring data scientist</strong> skilled in Python,
              SQL, and Scikit-Learn, with hands-on experience across the data
              lifecycle — from <strong>data engineering and analysis to model
              development and visualisation</strong>. Constantly seeking new ways to
              leverage data for better decision-making and innovation, I bring
              the <strong>determination and reliability</strong> of a Taurus.
            </p>

            <p className="text-md leading-relaxed text-muted-foreground">
              <strong>Fluent in both English and Mandarin,</strong> I value clear communication
              and cross-cultural collaboration, which enables me to translate
              complex data insights into actionable strategies for diverse teams
              and stakeholders. I take pride in transforming ideas into
              impactful, data-driven solutions that enhance performance and
              create lasting value.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">3+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">3+</h3>
                <p className="text-muted-foreground">
                  Years Experience in Developing
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">20+</h3>
                <p className="text-muted-foreground">Technologies</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">100%</h3>
                <p className="text-muted-foreground">
                  Running on Coffee & Curiosity
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="card-gradient p-1 rounded-2xl glow">
              <img
                src={aboutBg}
                alt="Data visualization"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
