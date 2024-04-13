import companylog from "./assets/companylog.png"
import profilepic from "./assets/profilepic.jpg"

function Section1() {

    return (
        <>
            <div className="gradient-radial from-[#eab676c1] to-white">
                <div className="max-w-screen-x1 mx-auto overflow-x-hidden">
                    <div className=" m-5 p-5 place-content-center">
                        <h1 className="font-bold text-center text-5xl pt-8 md:text-7xl md:items-start">The Shortcut to
                        </h1>
                        <h1 className=" font-bold text-center text-5xl pb-6 md:text-7xl md:items-start"><span className="text-[#f20c6c]"> Effective </span> Storyboards</h1>
                        <p className="font-bold text-center">Boords is the modern storyboarding tool that helps</p>
                        <p className="font-bold text-center">video professionals create client-ready storyboards</p>
                        <p className="font-bold text-center">10x faster.</p>

                    </div>
                    <div className="m-5 p-5 flex justify-center flex-col items-center">
                        <button className=" text-white border-solid border-2 border-black-100  text-center bg-gradient-to-r from-[#f20c6c] to-[#f6b244] font-bold pl-6 pr-6 pt-3 pb-3 max-w-60 hover:text-black ">Get Started for Free</button>

                        <p className="p-4"><span className="text-[#f20c6c] text-xl font-semibold">4,961</span> <b>Video professionals</b></p>
                        <p className="text-xs">joined Boards in the last 7 days</p>
                        <br />
                        <br />
                        <br />
                        <p className=" font-sans">BOORDS IS TRUSTED BY THE WORLD'S LEADING VIDEO AGENCIES.</p>
                    </div>
                    <div className=" md:flex  justify-around  flex flex-wrap">
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />
                        <img src={companylog} alt="pic" className=" w-1/4 md:w-24" />

                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className=" flex flex-col justify-center text-center">
                        <p>"Without Boords storyboarding was the most painful part of the</p>
                        <p>production process, with Boords it's the most painless. Super easy to use,</p>
                        <p>brilliantly collaborative with both our teams and our clients, and speeds up</p>
                        <p>the pre-production process immesurably.</p>
                    </div>
                    <br />
                    <br />
                    <div className="flex justify-center space-x-8 text-center">
                        <img src={profilepic} alt="pic here" className=" w-14 h-14 rounded-full " />
                        <p className="pt-3"><b>Lewis Darby </b><span className="text-[#4f4f4f94]">Founder, Yard B</span></p>

                    </div>
                </div>
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

export default Section1