import {
  PencilIcon,
  SparklesIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Finest Material",
    description:
      "Premium furniture crafted from high-quality materials, ensuring both durability and a sophisticated aesthetic.",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Premium Quality",
    description:
      "Top-notch furniture combining style and functionality, delivering exceptional comfort and durability.",
    icon: SparklesIcon,
  },
  {
    name: "Simplistic Design",
    description:
      "A perfect balance of form and function, enhancing our space with understated sophistication.",
    icon: PencilIcon,
  },
];

function BannerTop() {
  return (
    <div className="py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-300 to-indigo-300 opacity-70" />
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            What Are You Waiting For? Start Browsing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Upgrade Your Space, Upgrade Your Life
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Transform your space now! Order our stylish, high-quality furniture
            for swift delivery today. Elevate your surroundings instantly.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default BannerTop;
