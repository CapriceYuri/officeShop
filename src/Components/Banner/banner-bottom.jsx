import {
  RocketLaunchIcon,
  HandThumbUpIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";

const footerItem = [
  {
    name: "Your Peace of Mind",
    description: "Reliable warranty.",
    icon: HandThumbUpIcon,
  },
  {
    name: "Quick and simple",
    description: "Hassle-free returns.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Expedited Service",
    description: "Swift shipping.",
    icon: GiftIcon,
  },
];

function BannerBottom() {
  return (
    <div className="p-20 bg-gradient-to-r from-orange-300 to-indigo-300">
      <div className="mx-auto max-w-5xl divide-y divide-gray-500 lg:flex lg:justify-center lg:divide-x lg:divide-y-0">
        {footerItem.map((item, index) => (
          <div key={index} className="py-6 lg:w-1/3 lg:flex-none lg:py-0">
            <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
              <item.icon
                className="h-8 w-8 flex-shrink-0 text-indigo-600"
                aria-hidden="true"
              />

              <div className="ml-4 flex flex-auto flex-col">
                <p className="text-sm text-gray-500">{item.description}</p>
                <h3 className="font-medium text-gray-900">{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerBottom;
