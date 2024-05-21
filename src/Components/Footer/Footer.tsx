import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full text-center bg-bgcol border-t-[1px] border-bordercol">
      <p className="mt-12 text-txtbright">Follow our journey!</p>
      <ul className="flex flex-row justify-center mt-8 mb-14 text-lg">
        <li className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10mm"
            height="10mm"
            viewBox="0 0 397.35 397.35"
            /* IG-icon styling */
            className="h-10 rounded-full cursor-pointer  hover:scale-110 fill-txtbright hover:fill-white duration-300 bg-bgcol hover:bg-gradient-to-tl from-ig1 via-ig2 to-ig3 ..."
          >
            <path
              d="M252.58,94.46H144.77a50.32,50.32,0,0,0-50.31,50.31V252.58a50.32,50.32,0,0,0,50.31,50.31H252.58a50.32,50.32,0,0,0,50.31-50.31V144.77A50.32,50.32,0,0,0,252.58,94.46ZM284.92,249A36,36,0,0,1,249,284.92H148.37A36,36,0,0,1,112.43,249V148.37a36,36,0,0,1,35.94-35.94H249a36,36,0,0,1,35.93,35.94Z"
              transform="translate(0)"
              fill="current"
            />
            <path
              d="M198.78,144.77a53.91,53.91,0,1,0,53.9,53.91A53.92,53.92,0,0,0,198.78,144.77Zm0,89.84a35.94,35.94,0,1,1,35.93-35.93A36,36,0,0,1,198.78,234.61Z"
              transform="translate(0)"
              fill="current"
            />
            <circle cx="256.28" cy="141.18" r="10.78" fill="current" />
          </svg>
        </li>
        <li className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10mm"
            height="10mm"
            viewBox="0 0 397.35 397.35"
            /* YT-icon styling */
            className="h-10 rounded-full cursor-pointer  hover:scale-110 fill-txtbright hover:fill-white duration-300 bg-bgcol hover:bg-gradient-to-tl from-yt1 to-yt2 ..."
          >
            <path
              d="M284.3,114.49H113.06a30.64,30.64,0,0,0-30.64,30.63V252.23a30.63,30.63,0,0,0,30.64,30.63H284.3a30.63,30.63,0,0,0,30.63-30.63V145.12A30.64,30.64,0,0,0,284.3,114.49Zm-58.12,91.58-47.61,23.79a8.26,8.26,0,0,1-12-7.38v-47.6a8.27,8.27,0,0,1,12-7.39l47.61,23.81A8.25,8.25,0,0,1,226.18,206.07Z"
              transform="translate(0)"
              fill="current"
            />
          </svg>
        </li>
        <li className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10mm"
            height="10mm"
            viewBox="0 0 397.35 397.35"
            /* X-icon styling */
            className="h-10 rounded-full cursor-pointer  hover:scale-110 fill-txtbright hover:fill-white duration-300 bg-bgcol hover:bg-gradient-to-tl from-slate-500 to-slate-600 ..."
          >
            <path
              d="M227.35,180.43l80.37-86H277.2l-63.09,67.48-48.3-67.48H82.33l84.51,118L82.33,302.89h30.52L180.07,231l51.48,71.9H315Zm-102-63.86h29.11L272,280.78h-29.1Z"
              transform="translate(0)"
              fill="current"
            />
          </svg>
        </li>
        <li className="px-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10mm"
            height="10mm"
            viewBox="0 0 397.35 397.35"
            /* FB-icon styling */
            className="h-10 rounded-full cursor-pointer  hover:scale-110 fill-txtbright hover:fill-white duration-300 bg-bgcol hover:bg-gradient-to-tl from-fb2 to-fb1 ..."
          >
            <path
              d="M257.54,183.26l-3.31,26.58a8.86,8.86,0,0,1-8.78,7.78h-43V328.75q-6.82.62-13.8.62a153.39,153.39,0,0,1-30.36-3V217.62H125.14a5.54,5.54,0,0,1-5.52-5.54V178.83a5.54,5.54,0,0,1,5.52-5.54h33.11V123.41A55.31,55.31,0,0,1,213.44,68h38.64a5.55,5.55,0,0,1,5.51,5.54v33.26a5.54,5.54,0,0,1-5.51,5.54h-27.6a22.12,22.12,0,0,0-22.07,22.17v38.8h46.35A8.86,8.86,0,0,1,257.54,183.26Z"
              fill="current"
            />
          </svg>
        </li>
      </ul>
      <p className="text-txtdark text-sm mb-14">
        The content of this site is copyright-protected and is the property of
        Fully Stacked Team, ITHS.
      </p>
    </footer>
  );
};

export default Footer;
