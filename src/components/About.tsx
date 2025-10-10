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
            Passionate about extracting meaningful insights from data
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a data scientist with a strong foundation in statistical analysis, 
              machine learning, and data visualization. My journey in data science 
              began with a fascination for patterns and a drive to solve real-world 
              problems through data-driven insights.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              With expertise in Python, SQL, and modern ML frameworks, I've worked 
              on diverse projects ranging from predictive modeling to business 
              intelligence dashboards. I believe in the power of data to transform 
              decision-making and drive innovation.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">5+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">10+</h3>
                <p className="text-muted-foreground">Technologies</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-bold gradient-text">100%</h3>
                <p className="text-muted-foreground">Client Satisfaction</p>
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
