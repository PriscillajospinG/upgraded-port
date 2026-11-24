export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center text-[13px] leading-relaxed text-ink-faint">
          © {new Date().getFullYear()}{' '}
          <span className="font-medium text-ink-soft transition-colors duration-300 hover:text-ink">
            Priscilla Jospin
          </span>{' '}
          ❤️ All rights reserved.
        </p>
      </div>
    </footer>
  );
}
