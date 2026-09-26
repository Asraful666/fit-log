"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { usePlan } from "../../../context/PlanContext";
import { Workout } from "../../../types";

export default function WorkoutDetails() {
  const params = useParams();
  const { addToPlan, addToSaved } = usePlan();

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkout = async () => {
      try {
        const res = await fetch(
          `https://api.abcz.workers.dev/api/fitlog/${params.id}`
        );

        if (!res.ok) {
          throw new Error("Workout not found");
        }

        const data = await res.json();

        setWorkout(data);
      } catch (error) {
        console.error(error);
        setWorkout(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkout();
  }, [params.id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-lime-400" />
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-black px-6 text-center text-white">
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
            FITLOG
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase">
            WORKOUT NOT FOUND
          </h1>

          <Link
            href="/"
            className="mt-8 inline-flex bg-lime-400 px-6 py-3 text-sm font-black uppercase text-black"
          >
            BACK TO LIBRARY
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/#library"
          className="text-sm font-bold uppercase text-gray-500 hover:text-lime-400"
        >
          ← Back to Library
        </Link>

        {/* Main */}
        <div className="mt-8 grid gap-10 lg:grid-cols-2">

          {/* Image */}
          <div className="relative min-h-[400px] overflow-hidden bg-zinc-900 lg:min-h-[600px]">
            <Image
              src={workout.image}
              alt={workout.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>

            <div className="flex flex-wrap gap-2">
              {workout.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="border border-lime-400/30 px-3 py-1 text-xs font-bold uppercase text-lime-400"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-black uppercase leading-tight md:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-6 leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 border border-white/10">

              <div className="border-b border-r border-white/10 p-5">
                <p className="text-xs text-gray-500">EQUIPMENT</p>
                <p className="mt-2 font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-b border-white/10 p-5">
                <p className="text-xs text-gray-500">DIFFICULTY</p>
                <p className="mt-2 font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="border-b border-r border-white/10 p-5">
                <p className="text-xs text-gray-500">SETS</p>
                <p className="mt-2 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="border-b border-white/10 p-5">
                <p className="text-xs text-gray-500">REPS</p>
                <p className="mt-2 font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="border-r border-white/10 p-5">
                <p className="text-xs text-gray-500">DURATION</p>
                <p className="mt-2 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="p-5">
                <p className="text-xs text-gray-500">CALORIES</p>
                <p className="mt-2 font-bold">
                  {workout.caloriesBurned}
                </p>
              </div>

            </div>

            <div className="mt-4 border border-white/10 p-5">
              <p className="text-xs text-gray-500">
                RATING
              </p>

              <p className="mt-2 text-xl font-black text-lime-400">
                ★ {workout.rating}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <button
                onClick={() => addToPlan(workout)}
                className="bg-lime-400 px-6 py-4 text-sm font-black uppercase text-black transition hover:bg-lime-300"
              >
                ADD TO TODAY&apos;S PLAN
              </button>

              <button
                onClick={() => addToSaved(workout)}
                className="border border-white/20 px-6 py-4 text-sm font-black uppercase transition hover:border-lime-400 hover:text-lime-400"
              >
                SAVE FOR LATER
              </button>

            </div>

          </div>
        </div>

        {/* Instructions */}
        <section className="mt-20 max-w-4xl">

          <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
            HOW TO TRAIN
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase">
            INSTRUCTIONS
          </h2>

          <ol className="mt-8 space-y-4">
            {workout.instructions.map((instruction, index) => (
              <li
                key={index}
                className="flex gap-5 border-b border-white/10 pb-5"
              >
                <span className="text-xl font-black text-lime-400">
                  0{index + 1}
                </span>

                <p className="leading-7 text-gray-400">
                  {instruction}
                </p>
              </li>
            ))}
          </ol>

        </section>

      </div>
    </main>
  );
}