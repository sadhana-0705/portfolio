import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Layers, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Problem Solving',
    description: 'Tackling complex challenges with algorithmic thinking and clean, maintainable code'
  },
  {
    icon: Layers,
    title: 'Full Stack Development',
    description: 'Building end-to-end applications from responsive frontends to scalable backends'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Designing REST APIs, managing databases, and implementing secure authentication'
  },
  {
    icon: Sparkles,
    title: 'AI Applications',
    description: 'Integrating AI models and building intelligent features with modern ML tools'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a Computer Science undergraduate passionate about building scalable software and AI-powered applications. 
            Currently pursuing my degree while actively developing projects that solve real-world problems.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary" />
              <div className="pb-8">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science Engineering</h3>
                  <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                    2023 – 2027
                  </span>
                </div>
                <p className="text-muted-foreground">Vasireddy Venkatadri Institute of Technology, Guntur</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-card border border-card-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
