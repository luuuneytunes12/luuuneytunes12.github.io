import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    category: "Programming",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "R", icon: "📊" },
      { name: "SQL", icon: "🗄️" },
      { name: "JavaScript", icon: "💛" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Scikit-learn", icon: "🤖" },
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "Keras", icon: "⚡" },
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      { name: "Tableau", icon: "📈" },
      { name: "Power BI", icon: "📊" },
      { name: "Matplotlib", icon: "🎨" },
      { name: "Plotly", icon: "📉" },
    ],
  },
  {
    category: "Data Tools",
    skills: [
      { name: "Pandas", icon: "🐼" },
      { name: "NumPy", icon: "🔢" },
      { name: "Apache Spark", icon: "⚡" },
      { name: "Excel", icon: "📊" },
    ],
  },
  {
    category: "Cloud & Dev Tools",
    skills: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌿" },
      { name: "Jupyter", icon: "📓" },
    ],
  },
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const cards = gridRef.current?.querySelectorAll(".skill-card");
      
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to turn data into insights
          </p>
        </div>

        <div ref={gridRef} className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-center gradient-text">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card card-gradient p-6 rounded-xl flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
