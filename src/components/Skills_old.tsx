import { useEffect, useRef, useState } from "react";
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
      { 
        name: "Python", 
        icon: "pythonIcon",
        obtainedFrom: "Singapore Management University",
        description: "Primary language for data science, ML modeling, and automation scripts"
      },
      { 
        name: "SQL", 
        icon: "sqlIcon",
        obtainedFrom: "Singapore Management University",
        description: "Database querying, data extraction, and complex joins for analysis"
      },
      { 
        name: "PySpark", 
        icon: "sparkIcon",
        obtainedFrom: "Coursera",
        description: "Big data processing and distributed computing for large datasets"
      },
      { 
        name: "JavaScript", 
        icon: "javascriptIcon",
        obtainedFrom: "Singapore Management University",
        description: "Frontend development and interactive data visualizations"
      },
      { 
        name: "Vue.js", 
        icon: "vueicon",
        obtainedFrom: "Self-Learning",
        description: "Modern frontend framework for building responsive user interfaces"
      },
      { 
        name: "HTML", 
        icon: "htmlIcon",
        obtainedFrom: "Singapore Management University",
        description: "Web structure and semantic markup for data presentation"
      },
      { 
        name: "CSS", 
        icon: "cssIcon",
        obtainedFrom: "Singapore Management University",
        description: "Styling and responsive design for data dashboards"
      },
      { 
        name: "Bootstrap", 
        icon: "bootstrapIcon",
        obtainedFrom: "Self-Learning",
        description: "CSS framework for rapid prototyping and responsive design"
      },
      { 
        name: "PHP", 
        icon: "phpIcon",
        obtainedFrom: "Singapore Management University",
        description: "Server-side scripting for web applications and APIs"
      },
    ],
  },
  {
    category: "Data & Data Tools",
    skills: [
      { 
        name: "Pandas", 
        icon: "pandasIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Data manipulation, cleaning, and analysis with Python"
      },
      { 
        name: "PySpark", 
        icon: "sparkIcon",
        obtainedFrom: "Coursera",
        description: "Distributed data processing for large-scale analytics"
      },
      { 
        name: "Databricks", 
        icon: "databricksIcon",
        obtainedFrom: "Professional Experience",
        description: "Collaborative analytics platform for big data and ML workflows"
      },
      { 
        name: "Matplotlib", 
        icon: "matplotlibIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Python library for creating static and interactive visualizations"
      },
      { 
        name: "Seaborn", 
        icon: "seabornIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Statistical data visualization with enhanced matplotlib functionality"
      },
      { 
        name: "Tableau", 
        icon: "tableauIcon",
        obtainedFrom: "Google Business Intelligence Certificate",
        description: "Business intelligence and interactive dashboard creation"
      },
      { 
        name: "NumPy", 
        icon: "numpyIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Numerical computing and array operations for data science"
      },
      { 
        name: "DBeaver", 
        icon: "dbeaverIcon",
        obtainedFrom: "Professional Experience",
        description: "Universal database tool for SQL development and administration"
      },
      { 
        name: "PgAdmin", 
        icon: "pgadminIcon",
        obtainedFrom: "Professional Experience",
        description: "PostgreSQL administration and development platform"
      },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { 
        name: "PyTorch", 
        icon: "pytorchIcon",
        obtainedFrom: "Self-Learning",
        description: "Deep learning framework for neural networks and AI applications"
      },
      { 
        name: "Scikit-Learn", 
        icon: "scikitIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Machine learning library for classification, regression, and clustering"
      },
      { 
        name: "Regression", 
        icon: "regressionIcon",
        obtainedFrom: "Singapore Management University",
        description: "Linear and non-linear regression techniques for predictive modeling"
      },
      { 
        name: "Decision Trees", 
        icon: "decisionTreesIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Tree-based algorithms for classification and feature importance"
      },
      { 
        name: "Clustering", 
        icon: "clusteringIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Unsupervised learning for customer segmentation and pattern discovery"
      },
      { 
        name: "Ensemble Learning", 
        icon: "ensembleIcon",
        obtainedFrom: "IBM Data Science Certificate",
        description: "Combining multiple models for improved prediction accuracy"
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { 
        name: "Github", 
        icon: "githubIcon",
        obtainedFrom: "Singapore Management University",
        description: "Version control and collaborative development platform"
      },
      { 
        name: "Git", 
        icon: "gitIcon",
        obtainedFrom: "Singapore Management University",
        description: "Distributed version control for tracking code changes"
      },
      { 
        name: "Gitlab", 
        icon: "gitlabIcon",
        obtainedFrom: "Professional Experience",
        description: "DevOps platform for CI/CD and project management"
      },
      { 
        name: "BigQuery", 
        icon: "bigqueryIcon",
        obtainedFrom: "Google Data Analytics Certificate",
        description: "Cloud data warehouse for large-scale analytics and ML"
      },
      { 
        name: "Supabase", 
        icon: "supabaseIcon",
        obtainedFrom: "Self-Learning",
        description: "Open-source Firebase alternative for backend services"
      },
      { 
        name: "SAP Signavio", 
        icon: "sapSignavioIcon",
        obtainedFrom: "Professional Experience",
        description: "Business process management and workflow optimization"
      },
      { 
        name: "Confluence", 
        icon: "confluenceIcon",
        obtainedFrom: "Professional Experience",
        description: "Team collaboration and documentation platform"
      },
    ],
  },
  {
    category: "Languages",
    skills: [
      { 
        name: "English", 
        icon: "englishIcon",
        obtainedFrom: "Native Proficiency",
        description: "Fluent communication in professional and academic settings"
      },
      { 
        name: "Mandarin", 
        icon: "chineseIcon",
        obtainedFrom: "Native Speaker",
        description: "Native language for cross-cultural communication"
      },
    ],
  },
];

// Generate skill categories with icons
const skillCategories = skillsData.map((category) => ({
  category: category.category,
  skills: category.skills.map((skill) => ({
    name: skill.name,
    obtainedFrom: skill.obtainedFrom,
    description: skill.description,
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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
              <h3 className="text-3xl font-semibold text-center gradient-text">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card card-gradient px-6 py-8 rounded-xl flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all duration-300 cursor-pointer relative min-h-[180px]"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Default State */}
                    <div className={`transition-opacity duration-300 flex flex-col items-center justify-center gap-3 ${hoveredSkill === skill.name ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="h-16 flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                      </div>
                      <span className="text-base font-medium text-center">
                        {skill.name}
                      </span>
                    </div>

                    {/* Hover State */}
                    <div className={`absolute inset-0 p-4 flex flex-col justify-center transition-opacity duration-300 ${hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="text-center space-y-2">
                        <h4 className="font-semibold text-sm">{skill.name}</h4>
                        <p className="text-xs text-primary font-medium">
                          Obtained from {skill.obtainedFrom}
                        </p>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {skill.description}
                        </p>
                      </div>
                    </div>
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
