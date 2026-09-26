"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";

type Workout = {
  id: string | number;
  name: string;
  muscle?: string;
  equipment?: string;
  difficulty?: string;
  image?: string;
};

export default function WorkoutLibrary() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.abcz.workers.dev/api/fitlog")
      .then((res) => res.json())
      .then((data) => {
        setWorkouts(Array.isArray(data) ? data : data.data || []);
      })
      .catch((error) => {
        console.error("API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="library"
      className="bg-black px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-bold tracking-[0.25em] text-lime-400">
          WORKOUT LIBRARY
        </p>

        <h2 className="mt-3 text-4xl font-black md:text-5xl">
          THE LIBRARY
        </h2>

        <p className="mt-3 text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>

        {loading ? (
          <p className="mt-10 text-gray-400">
            Loading workouts...
          </p>
        ) : workouts.length === 0 ? (
          <p className="mt-10 text-gray-400">
            No workouts found.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {workouts.slice(0, 12).map((workout) => (
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