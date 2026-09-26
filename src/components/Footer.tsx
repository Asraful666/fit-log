import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          FIT<span className="text-lime-400">LOG</span>
        </Link>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}