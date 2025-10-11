import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import icons - all available images from assets folder
import pythonIcon from "../assets/Python.png";
import sqlIcon from "../assets/SQL.png";
import javascriptIcon from "../assets/JavaScript.png";
import htmlIcon from "../assets/html-5.png";
import cssIcon from "../assets/CSS.png";
import phpIcon from "../assets/php.png";
import tableauIcon from "../assets/Tableau.png";
import matplotlibIcon from "../assets/Matplotlib.png";
import seabornIcon from "../assets/seaborn-1.svg";
import scikitIcon from "../assets/Scikit_learn.png";
import bigqueryIcon from "../assets/BigQuery.png";
import bootstrapIcon from "../assets/Bootstrap.png";
import regressionIcon from "../assets/Regression.png";
import decisionTreesIcon from "../assets/DecisionTrees.png";
import clusteringIcon from "../assets/Clustering.png";
import ensembleIcon from "../assets/Ensemble.png";
import supabaseIcon from "../assets/Supabase.png";
import githubIcon from "../assets/Github.png";
import gitIcon from "../assets/Git_icon.svg.png";
import gitlabIcon from "../assets/GitLab_icon.svg.png";
import confluenceIcon from "../assets/Confluence.png";
import dbeaverIcon from "../assets/Bronze_DBeaver.jpg";
import pgadminIcon from "../assets/Pgadmin.png";
import sapSignavioIcon from "../assets/SAP.jpg";
import englishIcon from "../assets/English.png";
import chineseIcon from "../assets/Chinese.png";
import sparkIcon from "../assets/Spark.png";
import databricksIcon from "../assets/databricks.png";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: (
          <img
            src={pythonIcon}
            alt="Python"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "SQL",
        icon: (
          <img src={sqlIcon} alt="SQL" className="w-14 h-14 object-contain" />
        ),
      },
      {
        name: "PySpark",
        icon: (
          <img src={sparkIcon} alt="PySpark" className="w-14 h-14 object-contain" />
        ),
      },
      {
        name: "JavaScript",
        icon: (
          <img
            src={javascriptIcon}
            alt="JavaScript"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "HTML",
        icon: (
          <img src={htmlIcon} alt="HTML" className="w-14 h-14 object-contain" />
        ),
      },
      {
        name: "CSS",
        icon: (
          <img src={cssIcon} alt="CSS" className="w-14 h-14 object-contain" />
        ),
      },
      {
        name: "Bootstrap",
        icon: (
          <img
            src={bootstrapIcon}
            alt="Bootstrap"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "PHP",
        icon: (
          <img src={phpIcon} alt="PHP" className="w-14 h-14 object-contain" />
        ),
      },
    ],
  },
  {
    category: "Data Visualization",
    skills: [
      {
        name: "Matplotlib",
        icon: (
          <img
            src={matplotlibIcon}
            alt="Matplotlib"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Seaborn",
        icon: (
          <img
            src={seabornIcon}
            alt="Seaborn"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Tableau",
        icon: (
          <img
            src={tableauIcon}
            alt="Tableau"
            className="w-14 h-14 object-contain"
          />
        ),
      },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      {
        name: "Scikit-Learn",
        icon: (
          <img
            src={scikitIcon}
            alt="Scikit-Learn"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Regression",
        icon: (
          <img
            src={regressionIcon}
            alt="Regression"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Decision Trees",
        icon: (
          <img
            src={decisionTreesIcon}
            alt="Decision Trees"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Clustering",
        icon: (
          <img
            src={clusteringIcon}
            alt="Clustering"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Ensemble",
        icon: (
          <img
            src={ensembleIcon}
            alt="Ensemble"
            className="w-14 h-14 object-contain"
          />
        ),
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Github",
        icon: (
          <img
            src={githubIcon}
            alt="Github"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Git",
        icon: (
          <img src={gitIcon} alt="Git" className="w-14 h-14 object-contain" />
        ),
      },
      {
        name: "Gitlab",
        icon: (
          <img
            src={gitlabIcon}
            alt="Gitlab"
            className="w-14 h-14 object-contain"
          />
        ),
      },
       {
        name: "Databricks",
        icon: (
          <img
            src={databricksIcon}
            alt="Databricks"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "BigQuery",
        icon: (
          <img
            src={bigqueryIcon}
            alt="BigQuery"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Supabase",
        icon: (
          <img
            src={supabaseIcon}
            alt="Supabase"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      

      {
        name: "SAP Signavio",
        icon: (
          <img
            src={sapSignavioIcon}
            alt="SAP Signavio"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Confluence",
        icon: (
          <img
            src={confluenceIcon}
            alt="Confluence"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "DBeaver",
        icon: (
          <img
            src={dbeaverIcon}
            alt="DBeaver"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "PgAdmin",
        icon: (
          <img
            src={pgadminIcon}
            alt="PgAdmin"
            className="w-14 h-14 object-contain"
          />
        ),
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      {
        name: "English",
        icon: (
          <img
            src={englishIcon}
            alt="English"
            className="w-14 h-14 object-contain"
          />
        ),
      },
      {
        name: "Mandarin",
        icon: (
          <img
            src={chineseIcon}
            alt="Mandarin"
            className="w-14 h-14 object-contain"
          />
        ),
      },
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
                    className="skill-card card-gradient px-8 py-6 rounded-xl flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-16 flex items-center justify-center">
                      <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </span>
                    </div>
                    <span className="text-base font-medium text-center">
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
