import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart } from 'lucide-react';

export default function Volunteering() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="volunteering" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Community <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Supporting educational development through volunteer mentoring.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-card border border-card-border rounded-3xl p-8 sm:p-10 hover:border-primary/30 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-2xl font-bold">Academic Support Volunteer</h3>
                  <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent">
                    July 2023 – April 2025
                  </span>
                </div>
                
                <p className="text-lg font-semibold text-muted-foreground mb-4">
                  Make A Difference (MAD)
                </p>
                
                <p className="text-base text-foreground/70 leading-relaxed">
                  Guided students through academic mentoring while fostering consistent learning habits and educational development. 
                  Collaborated with volunteers to coordinate lessons, monitor progress, and deliver effective academic support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
