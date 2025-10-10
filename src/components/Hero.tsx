import { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram, FileText, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile-placeholder.jpg";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out"
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.4)"
        }
      );
    }
  }, []);

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div ref={heroRef} className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Your Name
            </h1>
            <p className="text-xl md:text-2xl gradient-text font-semibold">
              Data Scientist | Analyst | ML Enthusiast
            </p>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Transforming data into actionable insights with machine learning, 
            statistical analysis, and compelling visualizations. Passionate about 
            solving complex problems through data-driven approaches.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              variant="gradient"
              className="px-8 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 hover:scale-105 transition-transform duration-300"
              onClick={scrollToContact}
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right: Profile Image */}
        <div ref={imageRef} className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl animate-pulse-glow" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl ring-4 ring-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
