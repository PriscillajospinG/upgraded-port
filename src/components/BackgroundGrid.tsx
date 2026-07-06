import { motion } from 'framer-motion';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-[#09090B]">
      {/* Light animated grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle radial gradient to create depth without huge glowing blobs */}
      <motion.div
        className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] rounded-full bg-gradient-to-b from-sky-500/10 via-indigo-500/5 to-transparent blur-[120px]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 0.9, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
