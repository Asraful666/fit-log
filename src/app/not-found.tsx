import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-black px-6 text-white">
      <div className="text-center">

        <p className="text-sm font-bold tracking-[0.3em] text-lime-400">
          FITLOG
        </p>

        <h1 className="mt-5 text-8xl font-black tracking-tight md:text-9xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-black uppercase">
          WORKOUT NOT FOUND
        </h2>

        <p className="mx-auto mt-4 max-w-md text-gray-500">
          The page or workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex bg-lime-400 px-7 py-4 text-sm font-black uppercase text-black transition hover:bg-lime-300"
        >
          BACK TO WORKOUTS →
        </Link>

      </div>
    </main>
  );
}