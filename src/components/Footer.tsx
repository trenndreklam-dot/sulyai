import { useLanguage } from "../context/LanguageContext";
import { GraduationCap, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footerAbout, href: "#" },
    { label: t.footerPrivacy, href: "#" },
    { label: t.footerContact, href: "#" },
  ];

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              SULY<span className="text-cyan-400">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-6">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} SULY AI. {t.footerRights}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
}
