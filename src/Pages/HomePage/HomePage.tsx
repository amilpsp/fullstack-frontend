const HomePage = () => {
  return (
    <div className="flex flex-col items-center font-poppins cursor-default">
      <div className="lg:flex absolute text-center">
        {/* LEFT (1080p+) */}
        <div className="lg:flex w-[25vw] justify-end mr-20 hidden">
          <img
            src="arrowleft.png"
            alt="cityscape"
            className="mt-5 relative top-20 right-6 object-contain h-16"
          />
          <div className="text-2xl font-semibold italic relative top-36">
            <h3>Browse topics</h3>
          </div>
        </div>
        {/* MIDDLE */}
        <div className="border-4 border-txtbright w-80 h-[100%] text-3xl p-5 mt-8 mb-10 text-left">
          <h1>Welcome.</h1>
          <h2>
            Time to <span className="font-bold text-sec">talk it out</span>.
          </h2>
        </div>
        {/* RIGHT (1080p+) */}
        <div className="lg:flex w-[25vw] justify-start ml-20 hidden">
          <div className="text-2xl font-semibold italic relative top-36">
            <h3>Create a thread</h3>
            <h4 className="text-txtdark text-lg text-right">Login required</h4>
          </div>
          <img
            src="arrowright.png"
            alt="cityscape"
            className="mt-5 relative left-6 object-contain h-32"
          />
        </div>
        {/* BELOW (MOBILE-1080p) */}
        <p className="lg:hidden">
          <span className="flex justify-center">
            Start by tapping{' '}
            <svg
              width="28"
              height="18"
              viewBox="0 0 28 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-4"
            >
              <path
                d="M0 18H28V15H0V18ZM0 10.5H28V7.5H0V10.5ZM0 0V3H28V0H0Z"
                fill="#CFCFCF"
              />
            </svg>
            to browse threads
          </span>
        </p>
      </div>
      <img
        src="hero.png"
        alt="cityscape"
        className="w-[100%] mt-[40vh] lg:max-w-[50vw] lg:mt-[20vh]"
      />
    </div>
  );
};

export default HomePage;
