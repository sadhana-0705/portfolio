import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const headlines = [
  'Computer Science Undergraduate',
  'Building Modern Web Applications',
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-6"
            >
              Open to Software Engineer roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Laya Sadhana <br />
              <span className="text-gradient">Perungulam Kanaka</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 mb-8"
            >
              {headlines.map((headline, index) => (
                <motion.p
                  key={headline}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-lg sm:text-xl text-muted-foreground font-medium"
                >
                  {headline}
                </motion.p>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-base sm:text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl"
            >
              I enjoy building scalable full-stack web applications — from responsive frontends to robust backends and REST APIs. 
              I also explore integrating AI into practical applications to make software smarter and more useful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => handleScroll('#projects')}
                className="glow-primary"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-download-resume-hero"
              >
                <a href="/Laya_Sadhana_Resume_1784656570728.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={() => handleScroll('#contact')}
                data-testid="button-contact-me"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center"
          >
            <CodeIllustration />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll to about section"
            data-testid="button-scroll-down"
          >
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function CodeIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
    >
      {/* Background circles */}
      <motion.circle
        cx="200"
        cy="200"
        r="180"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.circle
        cx="200"
        cy="200"
        r="140"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
        strokeOpacity="0.1"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Code window */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <rect x="80" y="80" width="240" height="180" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
        
        {/* Window header */}
        <rect x="80" y="80" width="240" height="30" fill="hsl(var(--muted))" />
        <circle cx="95" cy="95" r="4" fill="hsl(var(--destructive))" />
        <circle cx="110" cy="95" r="4" fill="hsl(var(--accent))" />
        <circle cx="125" cy="95" r="4" fill="hsl(var(--primary))" />
        
        {/* Code lines */}
        <rect x="95" y="125" width="120" height="4" rx="2" fill="hsl(var(--primary))" opacity="0.6" />
        <rect x="95" y="140" width="180" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.4" />
        <rect x="110" y="155" width="150" height="4" rx="2" fill="hsl(var(--primary))" opacity="0.3" />
        <rect x="110" y="170" width="100" height="4" rx="2" fill="hsl(var(--foreground))" opacity="0.2" />
        <rect x="95" y="185" width="140" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.5" />
        <rect x="110" y="200" width="160" height="4" rx="2" fill="hsl(var(--primary))" opacity="0.4" />
        <rect x="110" y="215" width="90" height="4" rx="2" fill="hsl(var(--foreground))" opacity="0.2" />
        <rect x="95" y="230" width="110" height="4" rx="2" fill="hsl(var(--accent))" opacity="0.3" />
      </motion.g>

      {/* Floating nodes */}
      <motion.circle
        cx="320"
        cy="120"
        r="8"
        fill="hsl(var(--primary))"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="60"
        cy="280"
        r="6"
        fill="hsl(var(--accent))"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="340"
        cy="300"
        r="5"
        fill="hsl(var(--primary))"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Connection lines */}
      <motion.line
        x1="200"
        y1="200"
        x2="320"
        y2="120"
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        strokeOpacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />
      <motion.line
        x1="200"
        y1="200"
        x2="60"
        y2="280"
        stroke="hsl(var(--accent))"
        strokeWidth="1"
        strokeOpacity="0.2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </svg>
  );
}
