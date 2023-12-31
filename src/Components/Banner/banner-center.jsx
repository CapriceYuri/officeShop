function BannerCenter() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-10 lg:px-8 mb-1">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-300 to-indigo-300" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl border-4 rounded-3xl p-4">
        <img
          className="mx-auto h-40 rounded-3xl"
          src="./banner-logo1.png"
          alt=""
        />
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              " Desks, chairs, and lighting that redefine executive
              comfort—where ergonomic design meets luxurious functionality,
              creating a workspace of unparalleled sophistication. A five-star
              investment that elevates our office environment. "
            </p>
          </blockquote>
          <figcaption className="mt-5">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="./banner-pfp.png"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Julia Graham</div>
              <div className="text-gray-600">CEO of TECH SPACE</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default BannerCenter;
