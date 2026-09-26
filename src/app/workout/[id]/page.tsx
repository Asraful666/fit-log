"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { usePlan } from "../../../context/PlanContext";

type Workout = {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
};

export default function WorkoutDetails() {
  const params = useParams();
  const { addToPlan, addToSaved } = usePlan();

  const [workout, setWorkout] = useState<Workout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!params.id) return;

    fetch(
      `https://api.abcz.workers.dev/api/fitlog/${params.id}`
    )
      .then((res) => res.json())
      .then((data) => {
        const result = Array.isArray(data)
          ? data[0]
          : data.data || data;

        setWorkout(result || null);
      })
      .catch((error) => {
        console.error("API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params.id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-gray-400">
            Loading workout...
          </p>
        </div>
      </main>
    );
  }

  if (!workout) {
    return (
      <main className="min-h-screen bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold">
            Workout not found
          </h1>

          <Link
            href="/"
            className="mt-6 inline-block text-lime-400"
          >
            ← Back to workouts
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="text-sm font-bold text-lime-400"
        >
          ← BACK TO LIBRARY
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">

          <div className="overflow-hidden rounded-2xl">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>

          <div>

            <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
              WORKOUT
            </p>

            <h1 className="mt-3 text-4xl font-black uppercase md:text-6xl">
              {workout.name}
            </h1>

            <p className="mt-6 leading-7 text-gray-400">
              {workout.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-px border border-white/10 bg-white/10">
              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">EQUIPMENT</p>
                <p className="mt-2 font-bold">
                  {workout.equipment}
                </p>
              </div>

              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">DIFFICULTY</p>
                <p className="mt-2 font-bold">
                  {workout.difficulty}
                </p>
              </div>

              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">SETS</p>
                <p className="mt-2 font-bold">
                  {workout.sets}
                </p>
              </div>

              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">REPS</p>
                <p className="mt-2 font-bold">
                  {workout.reps}
                </p>
              </div>

              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">DURATION</p>
                <p className="mt-2 font-bold">
                  {workout.duration} min
                </p>
              </div>

              <div className="bg-zinc-950 p-5">
                <p className="text-xs text-gray-500">CALORIES</p>
                <p className="mt-2 font-bold">
                  {workout.caloriesBurned}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => addToPlan(workout)}
                className="bg-lime-400 px-6 py-4 font-black text-black hover:bg-lime-300"
              >
                ADD TO TODAY&apos;S PLAN
              </button>

              <button
                onClick={() => addToSaved(workout)}
                className="border border-white/20 px-6 py-4 font-black hover:border-lime-400"
              >
                SAVE FOR LATER
              </button>
            </div>

          </div>
        </div>

        <section className="mt-20 max-w-3xl">
          <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
            HOW TO DO IT
          </p>

          <h2 className="mt-3 text-3xl font-black">
            INSTRUCTIONS
          </h2>

          <ol className="mt-8 space-y-5">
            {workout.instructions?.map(
              (instruction, index) => (
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
              )
            )}
          </ol>
        </section>

      </div>
    </main>
  );
}