export default function Footer() {
  return (
    <footer className="relative py-8 glass-effect-strong border-t border-cyan-400/20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm leading-relaxed text-center">
          © {new Date().getFullYear()}{' '}
          <span className="text-cyan-400 font-semibold hover:text-sky-400 transition-colors duration-300 cursor-default">
            Priscilla Jospin
          </span>{' '}
          ❤️ All rights reserved.
        </p>
      </div>
    </footer>
  );
}
