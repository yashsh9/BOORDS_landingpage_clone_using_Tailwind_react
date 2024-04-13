import screen1 from "./assets/screen1.png"


function Section3() {

    return (
        <>
            <div >
                <div>
                    <div>
                        <h1 className="text-5xl font-bold text-center">10X Your Pre-Production Pipeline</h1>
                        <br />

                        <p className=" font-semibold text-center">Boords helps you achieve a fast, hassle-free pre-production process so you can</p>
                        <p className=" font-semibold text-center">spend more time being creative.You'll wonder how you lived without it...</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className=" flex justify-around space-x-5 ">
                    <div className="  mt-60">
                        <h1 className="text-5xl font-bold md:text-6xl">Easy-to-Use,</h1>
                        <h1 className="text-5xl font-bold md:text-6xl">Professional</h1>
                        <h1 className="text-5xl font-bold md:text-6xl">Power....</h1>
                        <br />
                        <p className="font-bold">Boords makes it easy for anyone in your </p>
                        <p className="font-bold"> organization to create client-ready storyboards</p>
                        <p className="font-bold">with a single drag and drop interface, image &</p>
                        <p className="font-bold">script generation, and a vast stock illustration and</p>
                        <p className="font-bold">photo library.</p>
                        <br />
                        <a href="#" className="font-bold text-xl underline">Learn More</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" inline-block w-6 h-6 pl-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    <div className="hidden sm:block" >
                        <img src={screen1} alt="" />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className="flex justify-around space-x-5">
                    <div className="hidden sm:block">
                        <img src={screen1} alt="" />
                    </div>

                    <div className="  mt-60">
                        <h1 className="text-5xl font-bold md:text-6xl ">Centralized Team</h1>
                        <h1 className="text-5xl font-bold md:text-6xl">Communication...</h1>

                        <br />
                        <p className="font-bold">Boords makes it easy for anyone in your </p>
                        <p className="font-bold"> organization to create client-ready storyboards</p>
                        <p className="font-bold">with a single drag and drop interface, image &</p>
                        <p className="font-bold">script generation, and a vast stock illustration and</p>
                        <p className="font-bold">photo library.</p>
                        <br />

                        <a href="#" className="font-bold text-xl underline">Learn More</a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" inline-block w-6 h-6 pl-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </div>


                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>
        </>
    );
}

export default Section3