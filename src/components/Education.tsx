import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    type: "University",
    period: "2023 - 2027",
    status: "Undergraduate",
    statusColor: "text-blue-400",
    institution: "Singapore Management University",
    qualification: "BsC in Information Systems (Business Analytics)",
    subjects: [
      { name: "Analytics Foundation", grade: "A+" },
      { name: "Statistics", grade: "A+" },
      { name: "Digital Transformation", grade: "A-" },
      { name: "Computational Thinking", grade: "A-" },
      { name: "Web Development", grade: "A-" },
      { name: "Python Fundamentals", grade: "A-" },
    ],
    scoreLabel: "GPA",
    score: "3.51 / 4.00",
    scoreSubtext: "(Cum Laude)",
    scoreProgress: (3.51 / 4) * 100, // 3.51/4.00 * 100
    cardColor: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800",
    titleColor: "text-blue-600 dark:text-blue-400",
    progressColor: "bg-blue-500",
  },
  {
    type: "High School",
    period: "2019 - 2020",
    status: "Graduated",
    statusColor: "text-blue-400",
    institution: "Eunoia Junior College",
    qualification: "A-Level Results",
    subjects: [
      { name: "H2 Mathematics", grade: "A" },
      { name: "H2 Physics", grade: "A" },
      { name: "H2 Chemistry", grade: "A" },
      { name: "H1 Economics", grade: "A" },
      { name: "H1 General Paper", grade: "A" },
      { name: "Higher Chinese", grade: "A1" },
    ],
    scoreLabel: "Rank Points",
    score: "90 / 90",
    scoreSubtext: "(Highest Distinction)",
    scoreProgress: 100, // 90/90 * 100
    cardColor: "bg-blue-100 dark:bg-blue-900/30",
    borderColor: "border-blue-300 dark:border-blue-700",
    titleColor: "text-blue-600 dark:text-blue-400",
    progressColor: "bg-blue-400",
  },
];

const getGradeColor = (grade: string) => {
  switch (grade) {
    case "A+":
      return "bg-emerald-500 text-white";
    case "A1":
      return "bg-green-500 text-white";

    case "A":
      return "bg-green-500 text-white";
    case "A-":
      return "bg-lime-500 text-white";
    case "B+":
      return "bg-yellow-400 text-white";
    case "B":
      return "bg-yellow-500 text-white";
    case "B-":
      return "bg-orange-400 text-white";
    case "C":
      return "bg-orange-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
};

export const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".education-card");

      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate progress bars
      cards?.forEach((card) => {
        const progressBar = card.querySelector(".progress-fill");
        if (progressBar) {
          gsap.fromTo(
            progressBar,
            { width: "0%" },
            {
              width: progressBar.getAttribute("data-width") + "%",
              duration: 1.5,
              ease: "power2.out",
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
    <section id="education" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-card card-gradient p-8 rounded-2xl ${edu.cardColor} border ${edu.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className={`text-2xl font-bold ${edu.titleColor}`}>
                  {edu.type}
                </h3>
                <span className="text-lg font-semibold text-muted-foreground bg-white/50 dark:bg-black/20 px-3 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>

              {edu.status && (
                <div
                  className={`inline-block ${edu.statusColor} text-sm font-medium mb-4 bg-blue-100 dark:bg-blue-950/50 px-3 py-1 rounded-full`}
                >
                  {edu.status}
                </div>
              )}

              <h4 className={`text-xl font-bold mb-2 ${edu.titleColor}`}>
                {edu.institution}
              </h4>

              <div className="mb-4">
                <p className={`text-lg font-semibold ${edu.titleColor}`}>
                  {edu.qualification}
                </p>
              </div>

              <div className="mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {edu.subjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-white/60 dark:bg-black/20 rounded-lg"
                    >
                      <span className="text-sm font-medium">
                        {subject.name}
                      </span>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded ${getGradeColor(
                          subject.grade
                        )}`}
                      >
                        {subject.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      {edu.scoreLabel}
                    </span>
                    <span className="text-lg font-bold">
                      {edu.score}{" "}
                      {edu.scoreSubtext && (
                        <span className="text-sm text-muted-foreground">
                          {edu.scoreSubtext}
                        </span>
                      )}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`progress-fill h-3 ${edu.progressColor} rounded-full transition-all duration-1000`}
                      data-width={edu.scoreProgress}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
