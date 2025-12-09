import { motion } from 'framer-motion';

export default function Verse() {
  return (
    <section className="relative bg-black py-4 px-2 border-b border-slate-800 pt-24 z-40">
      <div className="w-full overflow-x-auto flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="px-3 py-2 border border-blue-500/50 rounded-full glass-effect-strong">
            <p className="text-xs font-semibold text-blue-300 whitespace-nowrap">
              Blessed be the name of God forever and ever, for wisdom and power
              belong to Him - Daniel 2:20
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
