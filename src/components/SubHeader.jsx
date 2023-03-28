export default function SubHeader() {
  return (
    <section className="bg-white dark:bg-gray-900 -z-1">
      <div className="max-w-screen-xl px-4 pb-6 mx-auto lg:pb-14">
        <div className="w-full text-center">
          <h1 className="lg:text-2xl md:text-xl text-lg text-gray-500 dark:text-gray-400 font-bold">
            <span className="dark:text-emerald-400 text-emerald-500">
              IoT Components
            </span>{" "}
            Rentals for Students of{" "}
            <span className="dark:text-orange-300 text-orange-400">
              PES University
            </span>{" "}
            |{" "}
            <span className="dark:text-purple-300 text-purple-500">
              100% Working
            </span>{" "}
            and Trusted Components
          </h1>
        </div>
        <hr className="my-2" />
        <div className="max-w-screen-xl px-4 flex justify-center flex-wrap text-center">
          <span className="text-lg my-2 uppercase dark:text-red-600 text-red-500 dark:bg-gray-100 bg-gray-700 px-4 rounded-full font-semibold">
            Flash Updates
          </span>
          <marquee className="text-xl uppercase text-gray-700 dark:text-gray-100 my-2 font-semibold">
            <span className="mx-12">
              <strong>Arduino Uno R3 Boards</strong> In Stock - Confirm Delivery
              on <strong>Thursday (30th March 2023)</strong> | Order Now
            </span>
            <span className="mx-12">
              <strong>IoT Component Vendors & Providers </strong>| Partner with
              us |{" "}
              <a
                href="https://forms.gle/zfUiGYtkaerT1ntz7"
                className="text-lg text-blue-700 dark:text-blue-500 font-semibold"
              >
                Click Here
              </a>
            </span>
          </marquee>
        </div>
      </div>
    </section>
  );
}
