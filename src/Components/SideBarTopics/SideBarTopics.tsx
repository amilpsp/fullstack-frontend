import { Link } from 'react-router-dom';

export default function SignupLogin() {
  return (
    <div className="absolute top-40 left-20 px-2 py-2 max-w-[18%] border-bordercol border-[1px] rounded-lg text-left">
      <div className="min-w-52">
        <Link to="">
          <button className="flex items-center justify-left px-4 w-full h-10 rounded-lg my-1 hover:bg-bordercol hover:shadow-test">
            <img src="icon-all.png" alt="" className="h-[1rem] mr-2 ml-2" /> all
            threads
          </button>
        </Link>
        <Link to="">
          <button className="flex items-center justify-left px-4 w-full h-10 rounded-lg my-1 hover:bg-bordercol hover:shadow-test">
            <img src="icon-games.png" alt="" className="h-[1rem] mr-2 ml-2" />{' '}
            games
          </button>
        </Link>
        <Link to="">
          <button className="flex items-center justify-left pl-4 w-full h-10 rounded-lg my-1 hover:bg-bordercol hover:shadow-test">
            <img src="icon-movies.png" alt="" className="h-[1rem] mr-2 ml-2" />{' '}
            movies
          </button>
        </Link>
        <Link to="">
          <button className="flex items-center justify-left pl-4 w-full h-10 rounded-lg my-1 hover:bg-bordercol hover:shadow-test">
            <img src="icon-animals.png" alt="" className="h-[1rem] mr-2 ml-2" />{' '}
            animals
          </button>
        </Link>
      </div>
    </div>
  );
}
