export default function Footer() {
  return (
    <footer className="py-6 bg-gradient-to-r from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] text-center text-gray-400 border-t border-cyan-900/30">
      <p className="text-sm">
        © {new Date().getFullYear()}{" "}
        <span className="text-cyan-300 font-semibold hover:text-purple-300 transition-colors">
          Priscilla Jospin ❤️
        </span>
        . All rights reserved.
      </p>
    </footer>
  );
}