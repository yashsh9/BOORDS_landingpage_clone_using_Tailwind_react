import nobgloogo from "./assets/nobgloogo.png"

function Footer() {

    return (
        <>

            <div className=" flex-shrink text-center md:flex justify-around bg-slate-800">
                <div>
                    <br />
                    <br />
                    <img src={nobgloogo} alt="####" className="h-12 w-12" />
                    <p className="text-sm font-semibold text-white">The Shortcut to effective</p>
                    <p className="text-sm font-semibold text-white">Storyboards</p>
                    <br />
                    <button className="border-2 pl-3 pr-3 pt-1 pb-1 bg-white font-bold rounded-md">Try For Free</button>
                </div>
                <div>
                    <br />
                    <br />
                    <p className="text-2xl font-bold text-white">Features</p>
                    <br />
                    <ul className="text-white">
                        <li><a href="#">Create</a></li>
                        <li><a href="#">Collaborate</a></li>
                        <li><a href="#">Iterate</a></li>
                        <li><a href="#">Export</a></li>
                    </ul >
                </div >
                <div>
                    <br />
                    <br />
                    <p className="text-2xl font-bold text-white">AI Tools</p>
                    <br />
                    <ul className="text-white">
                        <li><a href="#">AI Storyboard Generator</a></li>
                        <li><a href="#">AI Script Generator</a></li>
                        <li><a href="#">AI Character Creator</a></li>
                        <li><a href="#">AI Image Variations</a></li>
                    </ul>
                </div>
                <div>
                    <br />
                    <br />
                    <p className="text-2xl font-bold text-white">Templates</p>
                    <br />
                    <ul className="text-white">
                        <li><a href="#">Storyboards</a></li>
                        <li><a href="">Shot Lists</a></li>
                        <li><a href="">Call Sheets</a></li>
                        <li><a href="">Filmmaking</a></li>
                    </ul>
                </div>
                <div>
                    <br />
                    <br />
                    <p className="text-2xl font-bold text-white">Company&Legal</p>
                    <br />
                    <ul className="text-white">
                        <li><a href="#">Affiliates &nbsp;<span className="text-sm pl-1 pr-1 border-2 border-red-500 text-red-500  rounded-full">New</span></a></li>
                        <li><a href="#">Climate Contributions</a></li>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Termms of use</a></li>
                        <li><a href="#">Security</a></li>
                    </ul>
                    <br />
                    <br />
                    <br />
                </div>

            </div >



        </>
    );
}

export default Footer