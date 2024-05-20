import './Footer.css'

const Footer = () => {
    return (
        <footer className=" flex-grow-1 w-full text-center items-center bg-bgcol border-t-[1px] border-bordercol">
            <p className="mt-12 text-txtbright">Follow our journey!</p>
            <ul className="flex flex-row justify-center mt-8 mb-14 text-lg">
                <li className="px-2">IG</li>
                <li className="px-2">TT</li>
                <li className="px-2">YT</li>
                <li className="px-2">FB</li>
            </ul>
            <p className="text-txtdark text-sm mb-14">
                The content of this site is copyright-protected and is the
                property of Fully Stacked Team, ITHS.
            </p>
        </footer>
    )
}

export default Footer
