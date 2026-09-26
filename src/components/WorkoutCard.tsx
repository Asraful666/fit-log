type Workout = {
  id: string | number;
  name: string;
  muscle?: string;
  equipment?: string;
  difficulty?: string;
  image?: string;
};

type Props = {
  workout: Workout;
};

export default function WorkoutCard({ workout }: Props) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-lime-400/40">

      <div className="relative h-64 overflow-hidden bg-zinc-900">
        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-sm tracking-widest text-gray-600">
              WORKOUT
            </span>
          </div>
        )}

        {workout.difficulty && (
          <span className="absolute left-4 top-4 bg-lime-400 px-3 py-1 text-xs font-black uppercase text-black">
            {workout.difficulty}
          </span>
        )}
      </div>

      <div className="p-6">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
          {workout.muscle || "FULL BODY"}
        </p>

        <h3 className="mt-2 text-2xl font-black uppercase text-white">
          {workout.name}
        </h3>

        {workout.equipment && (
          <p className="mt-3 text-sm text-gray-500">
            Equipment: {workout.equipment}
          </p>
        )}

        <button className="mt-6 w-full border border-white/20 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-lime-400 hover:bg-lime-400 hover:text-black">
          VIEW WORKOUT →
        </button>

      </div>
    </article>
  );
}