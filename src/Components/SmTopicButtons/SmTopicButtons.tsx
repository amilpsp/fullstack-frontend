const SmTopicButtons = () => {
  return (
    <div className="flex justify-center text-txtbright">
      <button className="flex items-center justify-center w-28 h-10 rounded-lg border-solid border-[1px] border-bordercol mx-2">
        <img src="icon-games.png" alt="" className="h-[1rem] mr-2" /> games
      </button>
      <button className="flex items-center justify-center w-28 h-10 rounded-lg border-solid border-[1px] border-bordercol mx-2">
        <img src="icon-movies.png" alt="" className="h-[1rem] mr-2" /> movies
      </button>
      <button className="flex items-center justify-center w-28 h-10 rounded-lg border-solid border-[1px] border-bordercol mx-2">
        <img src="icon-animals.png" alt="" className="h-[1rem] mr-2" /> animals
      </button>
    </div>
  );
};

export default SmTopicButtons;
