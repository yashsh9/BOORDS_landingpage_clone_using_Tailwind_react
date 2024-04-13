import secnew from './assets/secnew.png'

function Section7() {

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                <h1 className="text-5xl font-bold text-center">Secure, Private, Professional</h1>
                <br />

                <p className=" font-semibold text-center">We know controlling who sees what- be it teammates or clients - is crucial.</p>
                <p className=" font-semibold text-center">Boords helps you keep storyboards private with password protection, project-</p>
                <p className=" font-semibold text-center">level access control, and custom workspace URLs.</p>
                <br />
                <br />
                <br />
                <br />


            </div>
            <div className='max-w-screen-xl mx-auto'>
                <div className="flex justify-between space-x-5 border-4 border-black rounded-md ">
                    <div className="  mt-48">
                        <div className='ml-12'>
                            <h1 className="text-6xl font-bold">Share with</h1>
                            <h1 className="text-6xl font-bold">Confidence...</h1>
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

                    <div className="hidden sm:block">
                        <img src={secnew} alt="" className=' object-contain  h-auto ' />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div className="flex justify-between space-x-5 border-4 border-black rounded-md ">
                    <div className="hidden sm:block">
                        <img src={secnew} alt="" className=' object-contain  h-auto ' />
                    </div>
                    <div className="   mt-48">
                        <div className='mr-12'>
                            <h1 className="text-6xl font-bold">Completely</h1>
                            <h1 className="text-6xl font-bold">Confidential</h1>
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

                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    );
}

export default Section7