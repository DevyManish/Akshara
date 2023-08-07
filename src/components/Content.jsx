import React from "react";

const Content = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Find Your Favourite Tutor
              <br className="hidden lg:inline-block" />
              At Akshara
            </h1>
            <p className="mb-8 leading-relaxed">
              Join us on this enriching journey of discovery, growth, and
              transformation. Together, let's create a brighter future, one
              empowered mind at a time. Welcome to Akshara Educational
              Institute, where knowledge meets purpose.
            </p>
            <div className="flex justify-center">
            <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Explore Courses</button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="https://i.ibb.co/G3xYn6v/image.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
