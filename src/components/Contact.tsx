import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll(".contact-item"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Create mailto link to send email to wlunlun1212@gmail.com
    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:wlunlun1212@gmail.com?subject=${subject}&body=${body}`;

    // Open default email client
    window.location.href = mailtoUrl;

    // Success feedback
    toast({
      title: "Email Client Opened!",
      description:
        "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    console.log("Input changed:", e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:wlunlun1212@gmail.com",
      label: "Email",
      text: "wlunlun1212@gmail.com",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/cheng-wei-lun",
      label: "LinkedIn",
      text: "linkedin.com/in/cheng-wei-lun",
    },
    {
      icon: Github,
      href: "https://github.com/luuuneytunes12",
      label: "GitHub",
      text: "github.com/luuuneytunes12",
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 contact-item">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            I would love to discuss how my skills and enthusiasm can support
            your team’s goals and add value to your ongoing data science &
            machine learning projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 contact-item">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing data science projects, or simply
                connecting with fellow data enthusiasts. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="card-gradient p-8 rounded-2xl space-y-6 contact-item relative z-20"
            style={{ pointerEvents: "auto", position: "relative" }}
            onClick={(e) => {
              console.log("Form clicked");
              e.stopPropagation();
            }}
          >
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onClick={(e) => {
                  console.log("Name input clicked");
                  e.stopPropagation();
                }}
                onFocus={() => console.log("Name input focused")}
                placeholder="Your full name"
                className="bg-background border-border relative z-10"
                style={{ pointerEvents: "auto" }}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-background border-border relative z-10"
                style={{ pointerEvents: "auto" }}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or how I can help..."
                rows={5}
                className="bg-background border-border resize-none relative z-10"
                style={{ pointerEvents: "auto" }}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full hover:scale-105 transition-transform duration-300"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
