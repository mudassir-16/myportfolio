export function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="py-6 text-center text-xs text-[var(--color-headings)]/70">
            © {year} Mohammed Mudassir. All rights reserved.
        </footer>
    );
}
