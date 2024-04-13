import profilepic from "./assets/profilepic.jpg"


function Section4() {

    return (
        <>
            <div className=" bg-gradient-to-r from-[#eab676c1] to-[#d9f3ffa6]">
                <br />
                <div className="text-center font-semibold">
                    <p>"Our studio runs on Boords. We can quickly draw up ideas, add in a script,</p>
                    <p>receive real-time feedback and rapidly iterate changes. Everything is one</p>
                    <p>place so there's no need to email files back and forth. It's really a game</p>
                    <p>changer.</p>
                    <br />
                    <br />
                </div>
                <div className="flex justify-center space-x-8 text-center">
                    <img src={profilepic} alt="pic here" className=" w-10 h-10 rounded-full " />
                    <p className="pt-3"><b>Kelly Messori </b><span className="text-[#4f4f4f94]">Founder at CatCow</span></p>

                </div>
                <div className="m-5 p-5 flex justify-center flex-col items-center">
                    <button className=" text-black  border-black-100  text-center bg-gradient-to-r from-[#f20c6c] to-[#f6b244] font-bold pl-6 pr-6 pt-3 pb-3 max-w-60 hover:text-white ">Try Boords Free</button>

                    <p className="p-4"><span className="text-[#f20c6c] text-xl font-semibold">4,961</span> <b>Video professionals</b></p>
                    <p className="text-xs">joined Boards in the last 7 days</p>
                    <br />
                    <br />
                    <br />
                </div>
            </div>


        </>
    );
}

export default Section4