import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'HealthGuide AI',
    description: 'AI-powered healthcare platform delivering personalized lifestyle recommendations using Retrieval-Augmented Generation (RAG).',
    technologies: [
      'React',
      'Django REST Framework',
      'PostgreSQL',
      'Google Gemini',
      'ChromaDB',
      'LlamaIndex',
      'HuggingFace Embeddings',
      'JWT Authentication'
    ],
    features: [
      'Personalized lifestyle recommendations',
      'AI-powered chat system',
      'RAG pipeline',
      'Health profile management',
      'Secure authentication'
    ],
    githubUrl: 'https://github.com/sadhana-0705/HealthGuide',
    liveUrl: null,
    isFeatured: true
  },
  {
    title: 'PrintEase',
    description: 'Full-stack document printing and delivery platform with authentication, order management, and delivery tracking.',
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Authentication',
      'REST APIs'
    ],
    features: [
      'Document upload',
      'Role-based access',
      'Order management',
      'Print center discovery',
      'Delivery workflow'
    ],
    githubUrl: 'https://github.com/sadhana-0705/printease',
    liveUrl: 'https://printease-2.onrender.com/',
    isFeatured: false
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building real-world applications that combine modern web technologies with AI capabilities
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-card border border-card-border rounded-3xl p-8 sm:p-10 hover:border-primary/50 transition-all duration-300">
                {/* Featured badge */}
                {project.isFeatured && (
                  <div className="absolute top-8 right-8 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-accent fill-accent" />
                    <span className="text-xs font-bold text-accent uppercase tracking-wide">Featured</span>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* Left: Info */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold uppercase tracking-wide text-foreground/60 mb-3">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className="glow-primary"
                        data-testid={`button-github-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source
                        </a>
                      </Button>
                      {project.liveUrl ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          data-testid={`button-demo-${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Coming Soon
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Right: Technologies */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-foreground/60 mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-muted border border-border rounded-lg text-sm font-medium text-foreground/80 hover:border-primary/30 transition-colors"
                          data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
