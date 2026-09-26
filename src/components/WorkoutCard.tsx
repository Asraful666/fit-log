import Link from "next/link";

type Workout = {
  id: string | number;
  name: string;
  muscle?: string;
  muscleGroups?: string[];
  equipment?: string;
  difficulty?: string;
  image?: string;
  duration?: number;
  caloriesBurned?: number;
  rating?: number;
};

type Props = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/50">

      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-zinc-900">

        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm font-bold tracking-widest text-gray-600">
              WORKOUT
            </span>
          </div>
        )}

        {/* Difficulty */}
        {workout.difficulty && (
          <span className="absolute left-4 top-4 bg-lime-400 px-3 py-1 text-xs font-black uppercase text-black">
            {workout.difficulty}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Muscle Group */}
        <div className="flex flex-wrap gap-2">
          {workout.muscleGroups?.length ? (
            workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="border border-lime-400/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400"
              >
                {muscle}
              </span>
            ))
          ) : (
            <span className="border border-lime-400/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-lime-400">
              {workout.muscle || "FULL BODY"}
            </span>
          )}
        </div>

        {/* Name */}
        <h3 className="mt-4 text-2xl font-black uppercase text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        {workout.equipment && (
          <p className="mt-2 text-sm text-gray-500">
            Equipment: {workout.equipment}
          </p>
        )}

        {/* Stats */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-y border-white/10 py-4">

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration ?? "--"} min
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned ?? "--"}
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Rating
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.rating ?? "--"}
            </p>
          </div>

        </div>

        {/* Details Button */}
        <Link
          href={`/workout/${workout.id}`}
          className="mt-6 flex w-full items-center justify-center gap-2 border border-white/20 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
        >
          VIEW WORKOUT
          <span>→</span>
        </Link>

      </div>
    </article>
  );
}