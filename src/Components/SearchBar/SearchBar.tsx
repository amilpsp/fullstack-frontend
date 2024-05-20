const SearchBar = () => {
    return (
        <div>
            <form className="flex">
                <div className="flex items-center justify-between ">
                    {/* Search input */}
                    <input
                        type="search"
                        className="search-cancel:appearance-none search-cancel:w-4 search-cancel:h-4 w-80 relative m-0 block flex-auto rounded-full border border-solid border-transparent bg-txtbright bg-clip-padding px-5 py-1.5 text-txtdark font-normal text-surface transition duration-300 ease-in-out focus:border-black focus:text-black focus:shadow-inset focus:outline-none motion-reduce:transition-none"
                        /* search-cancel:bg-[url(https://picsum.photos/16/16)] */
                        placeholder="Search for a thread..."
                        aria-label="Search"
                        aria-describedby="button-addon2"
                    />
                    {/* Search icon */}
                    <span
                        className="flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-white [&>svg]:w-5"
                        id="basic-addon2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
