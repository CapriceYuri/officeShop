import products from "../data-products";

function Cards() {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-indigo-300 p-10">
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8 border-4 p-10 rounded-3xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-4 p-4 rounded-3xl">
          Trending Products
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 border-4 p-4 rounded-3xl">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover lg:h-full lg:w-full"
                />
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 font-medium hover:text-purple-700 hover:font-bold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
