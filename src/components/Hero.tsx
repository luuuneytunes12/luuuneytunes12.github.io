import { useEffect, useRef, Suspense } from "react";
import { Github, Linkedin, Instagram, FileText, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import profileImageDark from "@/assets/profile-placeholder.jpeg";
// TODO: Add light mode profile image as profileImageLight from "@/assets/profile-light.jpg";
import profileImageLight from "@/assets/profile-light.jpeg";
import { DataParticles3D } from "./DataParticles3D";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { theme, resolvedTheme } = useTheme();

  // Use resolvedTheme for better theme detection, fallback to theme, then to 'dark'
  const currentTheme = resolvedTheme || theme || "dark";

  // Choose profile image based on theme
  const profileImage = profileImageDark;

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
          ease: "power3.out",
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
          ease: "back.out(1.4)",
        }
      );
    }
  }, []);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/luuuneytunes12",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "www.linkedin.com/in/cheng-wei-lun",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/luuuney_tunes",
      label: "Instagram",
    },
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
      {/* 3D Data Particles Background */}
      <Suspense fallback={null}>
        <DataParticles3D />
      </Suspense>

      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div ref={heroRef} className="space-y-6">
          <div className="space-y-2">
            <p className="text-muted-foreground text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
              Cheng Wei Lun
            </h1>
            <br></br>
            <p className="text-xl md:text-3xl gradient-text font-bold">
              Aspiring Data Scientist | ML Enthusiast
            </p>
          </div>

          <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
            Welcome to my personal website! 💫
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
              className="px-8 hover:scale-105 transition-transform duration-300"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1KOIQpv5zMZkdy-q1Nqj0kYvUrS5DAI-Y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              key={currentTheme} // Force re-render when theme changes
              src={profileImage}
              alt="Profile"
              className="relative w-80 h-80 md:w-90 md:h-90 rounded-full object-cover object-center shadow-2xl ring-4 ring-primary/20"
              style={{
                objectPosition: "55% center",
                transform: "scale(1.6)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
