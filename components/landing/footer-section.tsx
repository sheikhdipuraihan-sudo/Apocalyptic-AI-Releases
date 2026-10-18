const footerLinks = [
  { name: "Features", href: "#features" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Download APK", href: "https://github.com/sheikhdipuraihan-sudo/Apocalyptic-AI-Releases/releases/latest/download/app-release.apk" },
  { name: "Privacy Policy", href: "https://github.com/sheikhdipuraihan-sudo/Apocalyptic-AI-Releases/blob/main/PRIVACY_POLICY.md" },
];

export function FooterSection() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <a href="#" className="text-lg font-display">Apocalyptic AI</a>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
