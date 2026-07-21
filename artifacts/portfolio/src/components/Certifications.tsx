import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Oracle Certified Agentic AI Foundations Associate',
    issuer: 'Oracle',
    type: 'Professional Certification'
  },
  {
    title: 'Oracle Certified AI Foundations Associate',
    issuer: 'Oracle',
    type: 'Professional Certification'
  },
  {
    title: 'AWS Cloud Foundations',
    issuer: 'Amazon Web Services',
    type: 'Cloud Computing'
  },
  {
    title: 'Introduction to MS Excel',
    issuer: 'Simplilearn',
    type: 'Data Tools'
  }
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" ref={ref} className="py-24 sm:py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="text-gradient">Learning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Continuous learning through industry-recognized certifications and courses
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-card border border-card-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              data-testid={`cert-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <span className="inline-block px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground">
                    {cert.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
