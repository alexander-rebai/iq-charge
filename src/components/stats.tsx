import StatsComponent from "./stats-component";

export default function Stats() {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">
              Een slimme laadpaal - het laatste puzzelstuk van jouw{"   "}
              <span className="bg-primary-light/60 font-semibold">
                duurzame transitie
              </span>
            </h2>
          </div>
          <StatsComponent variant={"landing"} />
        </div>
      </div>
    </div>
  );
}
