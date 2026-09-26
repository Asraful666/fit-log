"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import { Workout } from "../types";

type SortType = "duration" | "calories" | "rating";

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortType>("duration");

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }

        return res.json();
      })
      .then((data) => {
        const result = Array.isArray(data)
          ? data
          : data.data || [];

        setWorkouts(result);
      })
      .catch((error) => {
        console.error("API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredWorkouts = workouts
    .filter((workout) => {
      const searchText = search.toLowerCase();

      const nameMatch = workout.name
        .toLowerCase()
        .includes(searchText);

      const muscleMatch = workout.muscleGroups?.some(
        (muscle) =>
          muscle.toLowerCase().includes(searchText)
      );

      return nameMatch || muscleMatch;
    })
    .sort((a, b) => {
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
    <section
      id="library"
      className="bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
          WORKOUT LIBRARY
        </p>

        <h2 className="mt-3 text-4xl font-black md:text-5xl">
          THE LIBRARY
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        {/* Search + Sort */}
        <div className="mt-8 flex flex-col gap-4 md:flex-row">

          <input
            type="text"
            placeholder="Search workout or muscle..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-white/20 bg-zinc-950 px-5 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-lime-400 md:flex-1"
          />

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortType)
            }
            className="border border-white/20 bg-zinc-950 px-5 py-3 text-sm font-bold text-white outline-none focus:border-lime-400"
          >
            <option value="duration">
              Sort by Duration
            </option>

            <option value="calories">
              Sort by Calories
            </option>

            <option value="rating">
              Sort by Rating
            </option>
          </select>

        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-lime-400" />
          </div>
        ) : filteredWorkouts.length === 0 ? (

          <div className="py-20 text-center">
            <p className="text-xl font-bold text-gray-400">
              No workouts found.
            </p>
          </div>

        ) : (

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">

            {filteredWorkouts
              .slice(0, 12)
              .map((workout) => (
                <WorkoutCard
                  key={workout.id}
                  workout={workout}
                />
              ))}

          </div>

        )}

      </div>
    </section>
  );
}