import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built by{' '}
            <span className="font-semibold text-foreground">Laya Sadhana</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {currentYear} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
