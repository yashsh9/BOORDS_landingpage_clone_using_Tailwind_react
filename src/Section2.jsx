import sec2i1 from "./assets/sec2i1.jpg"


function Section2() {

    return (
        <>
            <div >
                <div>
                    <h1 className="font-bold text-center text-5xl">Creativity-Enabling AI Tools</h1>
                    <br />

                    <p className="text-center font-semibold">Use AI to enhance-not-replace-your creative process. Dramatically increase your</p>
                    <p className="text-center font-semibold">storyboarding capacity so you can handle more projects and create your best work.</p>
                    <br />
                    <br />

                </div>
                <br />
                <br />
                <br />
                <div className="hidden sm:block">
                    <div className="flex justify-around">
                        <img src={sec2i1} alt="this img" className=" h-72 w-72 p-2  bg-gradient-to-r from-[#fff1db] to-[#f0aa3a] rounded-lg" />
                        <img src={sec2i1} alt="this img" className=" h-72 w-72 p-2 bg-gradient-to-r from-[#fff1db] to-[#f0aa3a] rounded-lg" />
                        <img src={sec2i1} alt="this img" className=" h-72 w-72 p-5 bg-gradient-to-r from-[#fff1db] to-[#f0aa3a] rounded-lg" />

                    </div>
                </div>
                <br />
                <br />
                <div className="flex justify-around ">
                    <div>
                        <p className="text-2xl font-bold">Build Characters</p>
                        <p className="font-semibold">Create custom AI-generated characters</p>
                        <p className="font-semibold">to use across multiple storyboard frames.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Plan your Video</p>
                        <p className="font-semibold">Create subtle variations of existing</p>
                        <p className="font-semibold">images to build out storyboard</p>
                        <p className="font-semibold">sequences fast.</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">Create Variations</p>
                        <p className="font-semibold">Create custom AI-generated characters</p>
                        <p className="font-semibold">to use across multiple storyboard frames.</p>
                    </div>
                </div>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

        </>
    );
}

export default Section2