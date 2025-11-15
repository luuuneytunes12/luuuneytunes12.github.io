import { useEffect, useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import project0 from '@/assets/fraud.png';
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 0,
    title: "Fraud Detection in Credit Card Transactions",
    description:
      "This project aims to detect fraudulent credit card transactions using machine learning techniques. I used the Credit Card Fraud Detection dataset from Kaggle, which contains a mix of legitimate and fraudulent transactions. I built advanced learning algorithms, including LightGBM, Pytorch MLP Neural Network, and a Stacking Ensemble Model, and explored hyperparameter tuning methods such as WandB Hyperparameter Sweeps and Optuna. The final selected model achieved an extremely high F2 score, capturing ~80% of fraudulent transactions, while minimizing false alarms (87% precision). ", 
    image: project0,
    tech: [
      "LightGBM",
      'Scikit-Learn', 
      'SMOTE', 
      "Pytorch MLP Neural Network",
      "Pytorch Lightning",
      "Stacking Ensemble Model",
      "Hyperparameter Sweeps",
      "Optuna", 
      'FastAPI', 
    ],
    github:
      "https://github.com/luuuneytunes12/Fraud-Detection-ML",
    demo: "/Fraud-Detection-A-Hybrid-ML-Approach.pptx",
  },
  {
    id: 1,
    title: "Credit Risk Loan Default Modeling",
    description:
      "Most loan default projects focus on small datasets and basic models, but this project addresses real-world big data at scale. By leveraging PySpark on multiple CPU cores of my local machine, I processed over a million records and simulated the Medallion Architecture within the Databricks environment to build a robust data engineering pipeline. This experience prepared me for my Hyundai internship and deepened my knowledge of advanced feature engineering techniques, cutting-edge machine learning algorithms, and MLOps experiment tracking. Additionally, studying the data dictionary provided valuable insights into banks' credit risk business, enhancing my domain expertise.",
    image: project1,
    tech: [
      "Pandas",
      "Scikit-learn",
      "Pyspark",
      "XGBoost",
      "RandomForest",
      "Logistic Regression",
      "WandB",
      "Medallion Architecture",
      "Databricks",
    ],
    github:
      "https://github.com/luuuneytunes12/Credit-Risk-Modeling-PySpark.git",
    demo: "https://github.com/luuuneytunes12/Credit-Risk-Modeling-PySpark.git",
  },
  {
    id: 2,
    title: "Ride Intelligence Dashboard: Bike Sharing Analytics",
    description:
      "Most business dashboards just visualize data — However, through this project, \
      I attempted to use a business intelligence mindset to build a dynamic dashboard to guide \
      geospatial analytics and station optimization, enabling Cyclistic to uncover targeted growth opportunities through deep analysis of seasonality, behavior, and city-wide trends.",
    image: project2,
    tech: ["Tableau", "SQL", "Geospatial Analysis", "Google BigQuery"],
    github:
      "https://public.tableau.com/views/GoogleBIProjCyclistic/CyclisticStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    demo: "https://public.tableau.com/views/GoogleBIProjCyclistic/CyclisticStory?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  },
  {
    id: 3,
    title: "Fitness Tracker Analysis",
    description:
      "Via IoT, companies often struggle to understand how consumers' exercise patterns influence product use. I analyzed over 4 million Bellabeat fitness tracker records, gaining skills in data cleaning and transformation with SQL and Excel. By uncovering user behavior and peak activity trends, I helped optimize targeted marketing strategies, especially referral campaigns. This project highlights my ability to extract insights that drive data-driven decisions in health tech.",
    image: project3,
    tech: ["Python", "Excel", "SQL"],
    github:
      "https://docs.google.com/document/d/1hJWr0IELszVjGbv7qoaIyrqwPKZCt8Lai54i-u4GzMs/edit?usp=sharing",
    demo: "https://docs.google.com/document/d/1hJWr0IELszVjGbv7qoaIyrqwPKZCt8Lai54i-u4GzMs/edit?usp=sharing",
  },
  {
    id: 4,
    title: "RecycleLah Web Development Project",
    description:
      "Led design and deployment of Recyclelah, a gamified app to incentivize recycling, earning an A- grade. In this project, I led the data modeling \
      and schema design process in Supabase. This not only allowed me to apply normalization schema principles for best practices in database design, but also   \
       allowed me to think about the metrics users would want to track. \
       I also developed a real-time, visually engaging recycling metrics dashboard using Vue.js, Chart.js, and CSS in attempts to boost user engagement through data visualization.",
    image: project4,
    tech: ["Vue.js", "Chart.js", "CSS", "HTML", "Supabase", "Data Modeling"],
    github: "https://github.com/brejeshb/G6T6-WAD2",
    demo: "https://youtu.be/GbHG0F7vkLE?si=OoEV7qpQLGF_ni-U",
  },
];

export const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my data science work and analytical solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="card-gradient p-6 rounded-2xl group hover:scale-105 transition-all duration-300"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 relative z-10">
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    download={project.id === 0 ? "Fraud-Detection-A-Hybrid-ML-Approach.pptx" : undefined}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
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
