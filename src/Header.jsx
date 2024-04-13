import nobgloogo from "./assets/nobgloogo.png"

function Header() {

    return (
        <header>
            <nav className="text-sm max-w-screen-x1 mx-auto overflow-x-hidden  md:flex justify-start space-x-11 m-5">
                <img src={nobgloogo} alt="your pic here" className="h-12 w-12" />
                <a href="#" className="font-bold m-2 hover:text-red-500"><span>Solutions</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </a>
                <a href="#" className="font-bold m-2 hover:text-red-500"><span>Features</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></a>
                <a href="#" className="font-bold m-2 hover:text-red-500"><span>Resources</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></a>
                <a href="#" className="font-bold m-2 hover:text-red-500"><span>Pricing</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg></a>
            </nav>
        </header >

    );


}

export default Header