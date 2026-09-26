"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "../context/PlanContext";

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  return (
    <nav className="border-b border-white/10 bg-black px-6 py-5 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        <Link
          href="/"
          className="text-2xl font-black tracking-tight"
        >
          FIT<span className="text-lime-400">LOG</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className={
              pathname === "/"
                ? "text-sm font-semibold text-lime-400"
                : "text-sm font-semibold text-gray-400 hover:text-white"
            }
          >
            WORKOUT
          </Link>

          <Link
            href="/my-plan"
            className={
              pathname === "/my-plan"
                ? "text-sm font-semibold text-lime-400"
                : "text-sm font-semibold text-gray-400 hover:text-white"
            }
          >
            MY PLAN
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/my-plan"
            className="rounded-full bg-lime-400 px-4 py-2 text-xs font-bold text-black"
          >
            PLAN {plan.length}
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold text-white"
          >
            SAVED {saved.length}
          </Link>
        </div>

      </div>
    </nav>
  );
}