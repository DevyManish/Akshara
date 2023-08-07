import React from "react";

const Cards = () => {
  return (
    <div>
      <div class="text-center mb-2 mx-auto md:justify-center ">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 ">
          Subscriptions
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s text-gray-900">
          Our subscription plans are designed to cater to diverse learning needs
          and ambitions. Whether you're a beginner looking to get started or a
          seasoned learner aiming to excel, we have the perfect plan for you.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-24 h-1 rounded-full bg-gray-900 inline-flex"></div>
        </div>
      </div>
      <section className="text-gray-100 body-font overflow-hidden justify-center lg:ml-80">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="bg-gradient-to-t from-gray-900 to-gray-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out py-12">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  LITE
                </h2>
                <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹399</span>
                  <span className="text-lg ml-1 font-normal text-gray-100">
                    /month
                  </span>
                </h1>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Live Classes
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Project Building
                </p>
                <p className="flex items-center text-gray-100 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Certificates
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Get Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto mt-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-100 mt-5">
                  Best offer subscription available with EMI .
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="bg-gradient-to-b from-orange-500 to-yellow-500 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-full md:w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-ou">
                <span className="bg-[#808080] text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PRO
                </h2>
                <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹599</span>
                  <span className="text-lg ml-1 font-normal text-gray-100">
                    /month
                  </span>
                </h1>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Live Classes
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Project Building
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Certificates
                </p>
                <p className="flex items-center text-gray-100 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Doubt Sessions
                </p>
                <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm py-2 px-4 w-full flex items-center mt-auto">
                  Get Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-200 mt-3">
                  This membership has been designed to help you become a
                  complete and professional developer professional.
                </p>
              </div>
            </div>
            <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
              <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-full md:w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                  PREMIUM
                </h2>
                <h1 className="text-5xl text-gray-100 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹899</span>
                  <span className="text-lg ml-1 font-normal text-gray-100">
                    /month
                  </span>
                </h1>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Live Classes
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  1:1 Mentorship
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Doubt Sessions
                </p>
                <p className="flex items-center text-gray-100 mb-2">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Project Building
                </p>
                <p className="flex items-center text-gray-100 mb-6">
                  <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      className="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  Certificates
                </p>
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                  Get Now
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-auto"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-xs text-gray-200 mt-3">
                  Guranteed Placements and interships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cards;
