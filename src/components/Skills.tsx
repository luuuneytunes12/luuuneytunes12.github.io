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
import vueicon from "../assets/vue.png";
import pandasIcon from "../assets/Pandas.png";
import pytorchIcon from "../assets/pytorch.png";
import numpyIcon from "../assets/numpy.png";

// Icon mapping for easy reference
const icons = {
  pythonIcon,
  sqlIcon,
  javascriptIcon,
  htmlIcon,
  cssIcon,
  phpIcon,
  tableauIcon,
  matplotlibIcon,
  seabornIcon,
  scikitIcon,
  bigqueryIcon,
  bootstrapIcon,
  regressionIcon,
  decisionTreesIcon,
  clusteringIcon,
  ensembleIcon,
  supabaseIcon,
  githubIcon,
  gitIcon,
  gitlabIcon,
  confluenceIcon,
  dbeaverIcon,
  pgadminIcon,
  sapSignavioIcon,
  englishIcon,
  chineseIcon,
  sparkIcon,
  databricksIcon,
  vueicon,
  pandasIcon,
  pytorchIcon,
  numpyIcon,
};

// Skill data configuration - easy to add/modify
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", icon: "pythonIcon" },
      { name: "SQL", icon: "sqlIcon" },
      { name: "PySpark", icon: "sparkIcon" },
      { name: "JavaScript", icon: "javascriptIcon" },
      { name: "Vue.js", icon: "vueicon" },
      { name: "HTML", icon: "htmlIcon" },
      { name: "CSS", icon: "cssIcon" },
      { name: "Bootstrap", icon: "bootstrapIcon" },
      { name: "PHP", icon: "phpIcon" },
    ],
  },
  {
    category: "Data & Data Tools",
    skills: [
      { name: "Pandas", icon: "pandasIcon" },
      { name: "PySpark", icon: "sparkIcon" },
      { name: "Databricks", icon: "databricksIcon" },
      { name: "Matplotlib", icon: "matplotlibIcon" },
      { name: "Seaborn", icon: "seabornIcon" },
      { name: "Tableau", icon: "tableauIcon" },
      { name: "NumPy", icon: "numpyIcon" },
      { name: "DBeaver", icon: "dbeaverIcon" },
      { name: "PgAdmin", icon: "pgadminIcon" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Pytorch", icon: "pytorchIcon" },

      { name: "Scikit-Learn", icon: "scikitIcon" },
      { name: "Regression", icon: "regressionIcon" },
      { name: "Decision Trees", icon: "decisionTreesIcon" },
      { name: "Clustering", icon: "clusteringIcon" },
      { name: "Ensemble Learning", icon: "ensembleIcon" },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Github", icon: "githubIcon" },
      { name: "Git", icon: "gitIcon" },
      { name: "Gitlab", icon: "gitlabIcon" },
      { name: "BigQuery", icon: "bigqueryIcon" },
      { name: "Supabase", icon: "supabaseIcon" },
      { name: "SAP Signavio", icon: "sapSignavioIcon" },
      { name: "Confluence", icon: "confluenceIcon" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "English", icon: "englishIcon" },
      { name: "Mandarin", icon: "chineseIcon" },
    ],
  },
];

// Generate skill categories with icons
const skillCategories = skillsData.map((category) => ({
  category: category.category,
  skills: category.skills.map((skill) => ({
    name: skill.name,
    icon: (
      <img
        src={icons[skill.icon as keyof typeof icons]}
        alt={skill.name}
        className="w-14 h-14 object-contain"
      />
    ),
  })),
}));

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
