export function Footer() {
  return (
    <footer className="px-6 py-8 bg-[var(--color-bg)] border-t border-white/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-tertiary)]">
          &copy; {new Date().getFullYear()} Adhyan Ahuja
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/adhyanahuja10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-tertiary)] hover:text-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Adhyanahuja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-tertiary)] hover:text-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
