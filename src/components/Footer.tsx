export default function Footer() {
  return (
    <footer className="relative py-8 glass-effect-strong border-t border-blue-400/20">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm leading-relaxed text-center">
          © {new Date().getFullYear()}{' '}
          <span className="text-blue-300 font-semibold hover:text-purple-300 transition-colors duration-300 cursor-default">
            Priscilla Jospin
          </span>{' '}
          ❤️ All rights reserved.
        </p>
      </div>
    </footer>
  );
}
