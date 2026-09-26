import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black px-5 py-14 text-white sm:px-6 sm:py-20 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Text */}
        <div>
          <p className="text-xs font-bold tracking-[0.25em] text-lime-400 sm:text-sm">
            WORKOUT LIBRARY
          </p>

          <h1 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            LOG EVERY SET.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7 md:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s
            work add up.
          </p>

          <a
            href="#library"
            className="mt-7 inline-flex items-center gap-3 bg-lime-400 px-5 py-3 text-xs font-black uppercase text-black transition hover:bg-lime-300 sm:px-6 sm:py-4 sm:text-sm"
          >
            BROWSE WORKOUTS
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
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