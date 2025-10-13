import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Import icons - all available images from assets folder
import pythonIcon from "../assets/Python.png";
import sqlIcon from "../assets/SQL.png";
import javascriptIcon from "../assets/JavaScript.png";
import htmlIcon from "../assets/html.png";
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
import erdmodeling from "../assets/erd.png";
import dockerIcon from "../assets/docker.png";

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
  erdmodeling,
  dockerIcon,
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
        description:
          "Core programming language for data analysis & machine learning",
        tags: ["Data Science", "General"],
      },
      {
        name: "SQL",
        icon: "sqlIcon",
        obtainedFrom: "Singapore Management University",
        description: "Database query language for data engineering tasks",
        tags: ["MySQL", "PostgreSQL", "Database"],
      },
      {
        name: "PySpark",
        icon: "sparkIcon",
        obtainedFrom: "Self-Learning",
        description: "Big data processing framework for large-scale analytics",
        tags: ["Big Data", "Analytics", "Distributed Computing"],
      },
      {
        name: "JavaScript",
        icon: "javascriptIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Dynamic programming language for interactive web applications",
        tags: ["Web Development", "Frontend"],
      },
      {
        name: "Vue.js",
        icon: "vueicon",
        obtainedFrom: "Singapore Management University",
        description: "JavaScript framework for building web interfaces",
        tags: ["Web Development", "Frontend"],
      },
      {
        name: "HTML",
        icon: "htmlIcon",
        obtainedFrom: "Singapore Management University",
        description: "Structuring web content",
        tags: ["Web Development", "Frontend"],
      },
      {
        name: "CSS",
        icon: "cssIcon",
        obtainedFrom: "Singapore Management University",
        description: "Styling language for designing web interfaces",
        tags: ["Web Development", "Frontend"],
      },
      {
        name: "Bootstrap",
        icon: "bootstrapIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "CSS framework for rapid prototyping and responsive design",
        tags: ["Web Development", "Frontend"],
      },
      {
        name: "PHP",
        icon: "phpIcon",
        obtainedFrom: "Singapore Management University",
        description: "Server-side scripting language for web development",
        tags: ["Backend", "Web Development", "Server-side"],
      },
    ],
  },
  {
    category: "Data & Data Tools",
    skills: [
      {
        name: "Pandas",
        icon: "pandasIcon",
        obtainedFrom: "Singapore Management University",
        description: "Python library for data manipulation and analysis",
        tags: ["Data Science", "Python"],
      },
      {
        name: "PySpark",
        icon: "sparkIcon",
        obtainedFrom: "Self-Learning",
        description: "Big data processing with Apache Spark",
        tags: ["Big Data", "Distributed Computing", "ETL"],
      },
      {
        name: "Databricks",
        icon: "databricksIcon",
        obtainedFrom: "Internship",
        description:
          "Data Platform for big data processing and machine learning",
        tags: [
          "ETL",
          "Medallion Architecture",
          "Lakehouse",
          "Data Engineering",
        ],
      },
      {
        name: "Matplotlib",
        icon: "matplotlibIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Python plotting library for creating static and interactive visualizations",
        tags: ["Data Visualization"],
      },
      {
        name: "Seaborn",
        icon: "seabornIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Statistical data visualization library based on matplotlib",
        tags: ["Data Visualization"],
      },
      {
        name: "Tableau",
        icon: "tableauIcon",
        obtainedFrom: "Google Business Intelligence Certificate",
        description: "Business intelligence and interactive dashboard creation",
        tags: ["BI", "Dashboards", "Data Visualization"],
      },
      {
        name: "NumPy",
        icon: "numpyIcon",
        obtainedFrom: "Singapore Management University",
        description: "Fundamental package for scientific computing with Python",
        tags: ["Scientific Computing", "Arrays", "Mathematical Functions"],
      },
      {
        name: "DBeaver",
        icon: "dbeaverIcon",
        obtainedFrom: "Internship",
        description:
          "Universal database tool for developers and database administrators",
        tags: ["Database Client", "Multi-platform"],
      },
      {
        name: "PgAdmin",
        icon: "pgadminIcon",
        obtainedFrom: "Internship",
        description: "PostgreSQL administration and development platform",
        tags: ["PostgreSQL", "Database Client"],
      },
      {
        name: "Data Modeling (ERD)",
        icon: "erdmodeling",
        obtainedFrom: "Singapore Management University",
        description:
          "Entity-Relationship Diagram (ERD) design for database modeling",
        tags: ["Database Design", "Data Modeling", "Normalization"],
      },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      {
        name: "Pytorch",
        icon: "pytorchIcon",
        obtainedFrom: "Singapore Management University, Self Learning",
        description: "Deep learning framework",
        tags: ["Deep Learning", "Neural Networks"],
      },
      {
        name: "Scikit-Learn",
        icon: "scikitIcon",
        obtainedFrom: "Singapore Management University",
        description: "Machine learning library for classical ML algorithms",
        tags: ["Machine Learning", "Supervised", "Unsupervised Learning"],
      },
      {
        name: "Regression",
        icon: "regressionIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Statistical method for modeling relationships between variables",
        tags: ["Predictive Modeling", "Statistics", "Linear Models"],
      },
      {
        name: "Decision Trees",
        icon: "decisionTreesIcon",
        obtainedFrom: "Singapore Management University",
        description: "Tree-like model for decision making and classification",
        tags: ["Classification", "Interpretable", "Rule-based"],
      },
      {
        name: "Clustering",
        icon: "clusteringIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Unsupervised learning technique for grouping similar data",
        tags: ["Unsupervised Learning", "Pattern Recognition", "Segmentation"],
      },
      {
        name: "Ensemble Learning",
        icon: "ensembleIcon",
        obtainedFrom: "Self Learning",
        description: "Combining multiple models for improved predictions",
        tags: ["Boosting", "Bagging"],
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        name: "Github",
        icon: "githubIcon",
        obtainedFrom: "Self-Learning",
        description: "Version control platform for collaborative development",
        tags: ["Version Control", "Collaboration"],
      },
      {
        name: "Git",
        icon: "gitIcon",
        obtainedFrom: "Self-Learning",
        description: "Distributed version control for tracking code changes",
        tags: ["Version Control", "Branching"],
      },
      {
        name: "Gitlab",
        icon: "gitlabIcon",
        obtainedFrom: "Internship",
        description:
          "DevOps platform for the entire software development lifecycle",
        tags: ["CI/CD", "Version Control"],
      },
      {
        name: "Docker",
        icon: "dockerIcon",
        obtainedFrom: "Singapore Management University",
        description:
          "Containerization platform for developing and deploying applications",
        tags: ["Containerization", "MLOps"],
      },
      {
        name: "BigQuery",
        icon: "bigqueryIcon",
        obtainedFrom: "Google Business Intelligence Certificate",
        description: "Serverless data warehouse for analytics at scale",
        tags: ["SQL", "Cloud Analytics"],
      },
      {
        name: "Supabase",
        icon: "supabaseIcon",
        obtainedFrom: "Self-Learning",
        description: "Open source Firebase alternative with PostgreSQL",
        tags: ["PostgreSQL"],
      },
      {
        name: "SAP Signavio",
        icon: "sapSignavioIcon",
        obtainedFrom: "Singapore Management University",
        description: "Business process management and modeling platform",
        tags: ["Process Modeling"],
      },
      {
        name: "Confluence",
        icon: "confluenceIcon",
        obtainedFrom: "Internship Experience",
        description: "Team collaboration and documentation platform",
        tags: ["Documentation", "Knowledge Management"],
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
        description:
          "Fluent communication in professional and academic settings",
        tags: ["Communication", "Professional", "Academic"],
      },
      {
        name: "Mandarin",
        icon: "chineseIcon",
        obtainedFrom: "Native Speaker",
        description: "Native language for cross-cultural communication",
        tags: ["Native", "Cross-cultural", "Business"],
      },
    ],
  },
];

// Generate skill categories with icons and hover data
const skillCategories = skillsData.map((category) => ({
  category: category.category,
  skills: category.skills.map((skill) => ({
    name: skill.name,
    obtainedFrom: skill.obtainedFrom,
    description: skill.description,
    tags: skill.tags,
    icon: (
      <img
        src={icons[skill.icon as keyof typeof icons]}
        alt={skill.name}
        className="w-20 h-20 object-contain"
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
                    className="skill-card card-gradient px-6 py-8 rounded-xl flex flex-col items-center justify-center gap-3 group hover:scale-105 transition-all duration-300 cursor-pointer relative min-h-[240px]"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Default State */}
                    <div
                      className={`transition-opacity duration-300 flex flex-col items-center justify-center gap-3 ${
                        hoveredSkill === skill.name
                          ? "opacity-0"
                          : "opacity-100"
                      }`}
                    >
                      <div className="h-20 flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                      </div>
                      <span className="text-base font-medium text-center">
                        {skill.name}
                      </span>
                    </div>

                    {/* Hover State */}
                    <div
                      className={`absolute inset-0 p-4 flex flex-col justify-center transition-opacity duration-300 ${
                        hoveredSkill === skill.name
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <h4 className="font-semibold text-sm">{skill.name}</h4>
                        <p className="text-xs text-primary font-medium">
                          Obtained from {skill.obtainedFrom}
                        </p>
                        <div className="flex flex-wrap gap-1 justify-center mb-2">
                          {skill.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs rounded bg-primary/20 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
