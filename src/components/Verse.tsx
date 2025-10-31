import { motion } from 'framer-motion';

export default function Verse() {
  return (
    <section className="relative bg-black py-6 px-6 border-b border-slate-800 mt-20 z-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-2 border border-blue-500/50 rounded-full bg-blue-500/10 backdrop-blur-sm text-center">
            <p className="text-sm font-semibold text-blue-300">
              Blessed be the name of God forever and ever, for wisdom and power
              belong to Him - Daniel 2:20
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
