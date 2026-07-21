import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: ['Java', 'Python']
  },
  {
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js']
  },
  {
    title: 'Database',
    skills: ['SQL', 'MongoDB']
  },
  {
    title: 'Backend & Integration',
    skills: ['REST APIs', 'JWT Authentication']
  },
  {
    title: 'Tools & Platforms',
    skills: ['GitHub', 'MS Excel']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-24 sm:py-32 relative bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-card border border-card-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 rounded-lg text-sm font-medium text-primary transition-all duration-200 cursor-default"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
