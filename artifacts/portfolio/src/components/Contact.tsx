import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'layasadhana07@gmail.com',
    href: 'mailto:layasadhana07@gmail.com',
    color: 'accent'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/laya-sadhana',
    href: 'https://linkedin.com/in/laya-sadhana',
    color: 'primary'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@LayaSadhana',
    href: 'https://github.com/LayaSadhana',
    color: 'primary'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32 relative bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to Software Engineer internship and fresher opportunities. 
            Feel free to reach out for collaborations or just to say hello.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Email' ? '_blank' : undefined}
                rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-card border border-card-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 text-center"
                data-testid={`link-contact-${link.label.toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/60 mb-2">
                  {link.label}
                </h3>
                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="glow-primary"
            data-testid="button-download-resume-contact"
          >
            <a href="/Laya_Sadhana_Resume_1784653544655.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
