import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black px-6 py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-6 text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-3 bg-lime-400 px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-lime-300"
          >
            BROWSE WORKOUTS
            <span className="text-lg">→</span>
          </a>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src="/banner.png"
            alt="FitLog workout banner"
            width={800}
            height={600}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}