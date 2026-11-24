import { motion } from 'framer-motion';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaFlask,
  FaRobot,
} from 'react-icons/fa';
import {
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
} from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { MdHealthAndSafety } from 'react-icons/md';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

// ─── Types ──────────────────────────────────────────────────────────────────

interface Badge {
  label: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  type: string;
  icon: React.ReactNode;
  description: string;
  responsibilities: string[];
  badges: Badge[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

const experiences: ExperienceItem[] = [
  {
    company: '4i Apps',
    role: 'Data Science Intern',
    duration: 'May 2025 – June 2025',
    type: 'Internship',
    icon: <FaFlask />,
    description:
      'Worked as a Data Science Intern where I gained practical experience in data preprocessing, exploratory data analysis, machine learning, and predictive modeling. I collaborated with mentors, worked with real-world datasets, and implemented ML algorithms using Python, Pandas and Scikit-Learn — strengthening my understanding of the full machine learning workflow from data collection to model evaluation.',
    responsibilities: [
      'Data preprocessing & cleaning',
      'Exploratory data analysis',
      'Feature engineering',
      'Implementing ML algorithms',
      'Model training & evaluation',
      'Working with real-world datasets',
    ],
    badges: [
      { label: 'Python' },
      { label: 'Pandas' },
      { label: 'NumPy' },
      { label: 'Scikit-Learn' },
      { label: 'Machine Learning' },
      { label: 'Data Analysis' },
      { label: 'Jupyter Notebook' },
    ],
  },
  {
    company: 'Rapha MedTech',
    role: 'AI Engineer Intern',
    duration: 'May 2026 – July 2026',
    type: 'Internship',
    icon: <FaRobot />,
    description:
      'Worked as an AI Engineer Intern building computer vision and machine learning pipelines for physiotherapy assessment. My work involved human pose estimation, dataset preparation, model training, and evaluation. This internship gave me practical experience applying AI to real healthcare problems and deepened my understanding of deep learning and computer vision.',
    responsibilities: [
      'Human pose estimation',
      'Computer vision pipelines',
      'Dataset preparation & labelling',
      'Model training & evaluation',
      'MediaPipe & CTR-GCN integration',
      'Contributing to AI research',
    ],
    badges: [
      { label: 'Python' },
      { label: 'TensorFlow' },
      { label: 'PyTorch' },
      { label: 'MediaPipe' },
      { label: 'Computer Vision' },
      { label: 'Deep Learning' },
      { label: 'Pose Estimation' },
      { label: 'CTR-GCN' },
      { label: 'Git' },
    ],
  },
  {
    company: 'NCS Partners',
    role: 'Trainee – MAWM (WMS Training)',
    duration: 'Sep 2026 – Present',
    type: 'Training · Active',
    icon: <FaFlask />,
    description:
      'Currently undergoing intensive Warehouse Management System (WMS) training as a Trainee at NCS Partners, Coimbatore. The program focuses on MAWM (Manhattan Active Warehouse Management), providing hands-on exposure to enterprise-level WMS operations, configuration, and workflows used in modern supply chain and logistics environments.',
    responsibilities: [
      'MAWM WMS configuration & setup',
      'Warehouse operations & workflows',
      'Inventory & order management',
      'Supply chain process understanding',
      'System testing & validation',
      'Logistics domain training',
    ],
    badges: [
      { label: 'MAWM' },
      { label: 'WMS' },
      { label: 'Supply Chain' },
      { label: 'Warehouse Management' },
      { label: 'Logistics' },
      { label: 'Manhattan Associates' },
    ],
  },
];

// ─── Skill Icon Map ──────────────────────────────────────────────────────────

const skillIcons: Record<string, React.ReactNode> = {
  Python: <SiPython />,
  Pandas: <SiPandas />,
  'Scikit-Learn': <SiScikitlearn />,
  TensorFlow: <SiTensorflow />,
  PyTorch: <SiPytorch />,
  'Computer Vision': <SiOpencv />,
  'AI Healthcare': <MdHealthAndSafety />,
  'Deep Learning': <GiArtificialIntelligence />,
};

// ─── Experience Row ──────────────────────────────────────────────────────────

function ExperienceCard({
  exp,
  index,
}: {
  exp: ExperienceItem;
  index: number;
}) {
  const isActive = exp.duration.includes('Present');

  return (
    <motion.article
      className="relative pl-10 sm:pl-14"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: index * 0.06, ease: EASE_OUT }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* Timeline node */}
      <span
        className="absolute left-0 top-8 flex h-[15px] w-[15px] -translate-x-[7px] items-center justify-center rounded-full border border-white/40 bg-black sm:left-0"
        aria-hidden="true"
      >
        <span
          className={`h-[5px] w-[5px] rounded-full ${isActive ? 'bg-accent' : 'bg-white/70'}`}
        />
        {isActive && (
          <span className="absolute inset-0 rounded-full border border-accent/60 motion-safe:animate-ping" />
        )}
      </span>

      <div className="card group relative mb-6 overflow-hidden p-6 sm:p-9">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(255,255,255,0.04),transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative">
          {/* Header */}
          <div className="mb-6 flex flex-wrap items-start gap-4 sm:gap-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-line bg-white/[0.03] text-lg text-ink-soft transition-colors duration-300 group-hover:border-line-strong group-hover:text-ink">
              {exp.icon}
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-2.5">
                <h3 className="text-xl font-medium leading-tight tracking-[-0.03em] text-ink sm:text-2xl">
                  {exp.role}
                </h3>
                {isActive && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent motion-safe:animate-pulse" />
                    Live
                  </span>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-ink-muted">
                <span className="flex items-center gap-1.5">
                  <FaBuilding
                    className="text-[11px] opacity-60"
                    aria-hidden="true"
                  />
                  <span className="font-medium text-ink-soft">
                    {exp.company}
                  </span>
                </span>
                <span
                  className="hidden h-3 w-px bg-white/15 sm:block"
                  aria-hidden="true"
                />
                <span className="flex items-center gap-1.5">
                  <FaBriefcase
                    className="text-[11px] opacity-60"
                    aria-hidden="true"
                  />
                  {exp.type}
                </span>
                <span
                  className="hidden h-3 w-px bg-white/15 sm:block"
                  aria-hidden="true"
                />
                <span className="flex items-center gap-1.5 tabular-nums">
                  <FaCalendarAlt
                    className="text-[11px] opacity-60"
                    aria-hidden="true"
                  />
                  {exp.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-ink-muted sm:text-base">
            {exp.description}
          </p>

          <div className="grid gap-8 border-t border-line pt-7 lg:grid-cols-2 lg:gap-10">
            {/* Responsibilities */}
            <div>
              <h4 className="label mb-4">Key Responsibilities</h4>
              <ul className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
                {exp.responsibilities.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm leading-snug text-ink-soft"
                  >
                    <span
                      className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-white/50"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div>
              <h4 className="label mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {exp.badges.map(badge => (
                  <span key={badge.label} className="chip">
                    {skillIcons[badge.label] && (
                      <span
                        className="text-[11px] opacity-70"
                        aria-hidden="true"
                      >
                        {skillIcons[badge.label]}
                      </span>
                    )}
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── Main Section ────────────────────────────────────────────────────────────

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-line bg-surface py-28 text-ink sm:py-36"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="badge-metal mb-7">
            <FaBriefcase className="text-[11px]" aria-hidden="true" />
            <span className="uppercase tracking-[0.18em] text-[11px]">
              Career Journey
            </span>
          </div>

          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.04] tracking-[-0.045em]">
            <span className="block text-ink">Professional</span>
            <span className="serif-accent block text-[1.08em]">Experience</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Building real-world impact through AI, data science, and healthcare
            technology.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          <motion.div
            className="absolute left-0 top-2 bottom-10 w-px origin-top bg-gradient-to-b from-white/40 via-white/15 to-transparent"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.4, ease: EASE_OUT }}
            viewport={{ once: true }}
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.company} exp={exp} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-10 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE_OUT }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-ink-muted sm:text-base">
            Open to new opportunities in AI, ML &amp; Full-Stack development
          </p>
          <a href="#contact" className="btn btn-solid">
            Let&apos;s Work Together →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
