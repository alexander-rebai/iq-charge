type StatsType = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

export default function Qualities({
  stats,
  title,
  description,
}: {
  stats: StatsType[];
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-medium tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              {description}
            </p>
          </div>
          <dl
            className={`mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-${stats.length}`}
          >
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-2 bg-primary-light p-8"
              >
                <dt className="text-sm font-medium leading-6 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first mx-auto text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.icon}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
