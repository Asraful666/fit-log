"use client";

import Link from "next/link";
import { useState } from "react";
import { usePlan } from "../../context/PlanContext";

type Tab = "plan" | "saved";
type SortType = "duration" | "calories" | "rating";

export default function MyPlan() {
  const {
    plan,
    saved,
    metrics,
    markAsDone,
    removeFromPlan,
    removeFromSaved,
  } = usePlan();

  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [sortBy, setSortBy] = useState<SortType>("duration");

  const currentList = activeTab === "plan" ? plan : saved;

  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return b.caloriesBurned - a.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
            FITLOG
          </p>

          <h1 className="mt-3 text-5xl font-black uppercase">
            MY PLAN
          </h1>

          <p className="mt-4 max-w-xl text-gray-400">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

          <div className="border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Exercises
            </p>

            <p className="mt-3 text-4xl font-black text-lime-400">
              {metrics.exercises}
            </p>
          </div>

          <div className="border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Minutes
            </p>

            <p className="mt-3 text-4xl font-black text-lime-400">
              {metrics.minutes}
            </p>
          </div>

          <div className="border border-white/10 bg-zinc-950 p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500">
              Calories
            </p>

            <p className="mt-3 text-4xl font-black text-lime-400">
              {metrics.calories}
            </p>
          </div>

        </div>

        {/* Tabs + Sort */}
        <div className="mt-12 flex flex-col gap-5 border-b border-white/10 pb-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex gap-6">

            <button
              onClick={() => setActiveTab("plan")}
              className={
                activeTab === "plan"
                  ? "border-b-2 border-lime-400 pb-3 text-sm font-bold uppercase text-lime-400"
                  : "pb-3 text-sm font-bold uppercase text-gray-500 hover:text-white"
              }
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={
                activeTab === "saved"
                  ? "border-b-2 border-lime-400 pb-3 text-sm font-bold uppercase text-lime-400"
                  : "pb-3 text-sm font-bold uppercase text-gray-500 hover:text-white"
              }
            >
              Saved
            </button>

          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="border border-white/20 bg-zinc-950 px-4 py-3 text-sm font-bold text-white outline-none focus:border-lime-400"
          >
            <option value="duration">Sort by Duration</option>
            <option value="calories">Sort by Calories</option>
            <option value="rating">Sort by Rating</option>
          </select>

        </div>

        {/* Loading / Cards / Empty */}
        <div className="mt-10">

          {sortedList.length === 0 ? (

            <div className="border border-white/10 bg-zinc-950 px-6 py-20 text-center">

              <h2 className="text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-3 max-w-md text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="mt-7 inline-flex bg-lime-400 px-6 py-3 text-sm font-black uppercase text-black transition hover:bg-lime-300"
              >
                GO TO WORKOUTS
              </Link>

            </div>

          ) : (

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

              {sortedList.map((workout) => (

                <article
                  key={workout.id}
                  className="overflow-hidden border border-white/10 bg-zinc-950"
                >

                  {/* Image */}
                  <div className="h-56 overflow-hidden bg-zinc-900">

                    {workout.image ? (
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-gray-600">
                        WORKOUT
                      </div>
                    )}

                  </div>

                  {/* Content */}
                  <div className="p-5">

                    <div className="flex flex-wrap gap-2">
                      {workout.muscleGroups?.map((muscle) => (
                        <span
                          key={muscle}
                          className="border border-lime-400/30 px-2 py-1 text-[10px] font-bold uppercase text-lime-400"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-3 text-xl font-black uppercase">
                      {workout.name}
                    </h3>

                    <p className="mt-2 text-sm text-gray-500">
                      {workout.equipment}
                    </p>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-4">

                      <div>
                        <p className="text-[10px] uppercase text-gray-500">
                          Duration
                        </p>
                        <p className="mt-1 text-sm font-bold">
                          {workout.duration} min
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase text-gray-500">
                          Calories
                        </p>
                        <p className="mt-1 text-sm font-bold">
                          {workout.caloriesBurned}
                        </p>
                      </div>

                      <div>
                        <p className="text-[10px] uppercase text-gray-500">
                          Rating
                        </p>
                        <p className="mt-1 text-sm font-bold">
                          {workout.rating}
                        </p>
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-5 grid grid-cols-2 gap-2">

                      <Link
                        href={`/workout/${workout.id}`}
                        className="border border-white/20 px-3 py-3 text-center text-xs font-bold uppercase transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                      >
                        VIEW DETAILS
                      </Link>

                      {activeTab === "plan" ? (
                        <button
                          onClick={() => markAsDone(workout.id)}
                          disabled={workout.isDone}
                          className={
                            workout.isDone
                              ? "border border-lime-400/30 px-3 py-3 text-xs font-bold uppercase text-lime-400"
                              : "border border-white/20 px-3 py-3 text-xs font-bold uppercase transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                          }
                        >
                          {workout.isDone ? "✓ DONE" : "MARK AS DONE"}
                        </button>
                      ) : (
                        <button
                          onClick={() => removeFromSaved(workout.id)}
                          className="border border-white/20 px-3 py-3 text-xs font-bold uppercase transition hover:border-red-400 hover:bg-red-400 hover:text-black"
                        >
                          REMOVE
                        </button>
                      )}

                    </div>

                    {/* Remove from Plan */}
                    {activeTab === "plan" && (
                      <button
                        onClick={() => removeFromPlan(workout.id)}
                        className="mt-2 w-full px-3 py-2 text-xs font-bold uppercase text-gray-500 transition hover:text-red-400"
                      >
                        ✕ Remove from plan
                      </button>
                    )}

                  </div>
                </article>

              ))}

            </div>

          )}

        </div>

      </div>
    </main>
  );
}