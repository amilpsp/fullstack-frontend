import { useState, FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div>
      <form className="flex" onSubmit={handleSubmit}>
        <div className="flex items-center justify-between">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-cancel:appearance-none search-cancel:w-4 search-cancel:h-4 text-sm w-80 relative m-0 block flex-auto rounded-full border border-solid border-bordercol bg-bordercol bg-clip-padding px-5 py-2 text-txtbright font-normal text-surface transition duration-300 ease-in-out focus:border-borderfocus focus:text-white focus:shadow-inset focus:outline-none motion-reduce:transition-none focus:drop-shadow-blue"
            placeholder="Search for a thread..."
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            type="submit"
            className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-txtbright hover:text-white [&>svg]:w-5 hover:drop-shadow-test"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
