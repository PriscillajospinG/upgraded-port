export default function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-r from-black via-slate-900 to-black text-center text-slate-400 border-t border-slate-700/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm leading-relaxed">
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
