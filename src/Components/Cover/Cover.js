import React from "react";
import { Link } from "react-router-dom";

const Cover = () => {
  return (
    <section>
      <div className="bg-blue-200">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-blue-600">
            Bring It On!!
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
      Be ready. Be smart. Be noticed!Where a smart answer won't get you fired!
          </p>
          <div className="flex flex-wrap justify-center">
            <Link to="/blogs">
              <button
                type="button"
                className="px-8 py-3 m-2 text-lg font-semibold rounded-full  text-white hover:bg-blue-600 bg-blue-400"
              >
                Learn More
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Cover;
