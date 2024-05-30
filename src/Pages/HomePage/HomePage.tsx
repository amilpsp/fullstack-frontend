const HomePage = () => {
  return (
    <div className="flex flex-col items-center font-poppins cursor-default">
      <div className="flex absolute">
        {/* LEFT */}
        <div className="flex w-[25vw] justify-end mr-20">
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
        <div className="border-4 border-txtbright w-[18vw] h-[100%] text-3xl p-5  mb-10">
          <h1>Welcome.</h1>
          <h2>
            Time to <span className="font-bold text-sec">talk it out</span>.
          </h2>
        </div>
        {/* RIGHT */}
        <div className="flex w-[25vw] justify-start ml-20">
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
      </div>
      <img
        src="hero.png"
        alt="cityscape"
        className="w-[100%] max-w-[50vw] mt-[20vh]"
      />
    </div>
  );
};

export default HomePage;
