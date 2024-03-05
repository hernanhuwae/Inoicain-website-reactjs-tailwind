import gambar from "../foto/martin.png"
import git from "../foto/git.svg"
import insta from "../foto/insta.svg"
import discord from "../foto/discord.svg"
import htmlku from "../foto/html.png"
import cssku from "../foto/css.png"
import js from "../foto/java.png"
import rect from "../foto/react.png"
import node from "../foto/nodejs.png"
import { TypeAnimation } from 'react-type-animation';

export const Homepageku=()=>{
    return(
        <>
        <div className="bg-gray-900 flex item-center p-4 gap-8 justify-between fixed w-full " >
            <h2 className="text-white p-4 font-extrabold text-[2rem]">INOICAIN</h2>
            <div className="text-[#070F2B] font-bold text-[20px]"></div>
            <div className="flex gap-12 ">
                <div className="py-8 ">
                    <a className="text-[14px] text-white font-bold" href="">About</a>
                </div>
                <div className="py-8 ">
                    <a className="text-[14px] text-white font-bold" href="">My Works</a>
                </div>
                <div className="py-8 ">
                    <a className="text-[14px] text-white font-bold" href="">Contact</a>
                </div>
            </div>

        </div>
        <div className="bg-gradient-to-r from-slate-800 to-green-900 flex justify-between pr-[13rem] pt-[7rem]">
            <div className="m-8">
                <h1 className="text-[#118f33] text-[4rem] font-extrabold pt-16">
                <TypeAnimation sequence={["Hi, I`m Hernan Huwae",1000]} speed={50} repeat={Infinity}></TypeAnimation>

                </h1>
                <h2 className="text-white text-[2rem] font-bold pb-8"> I am a Software Engineering for building Website and Mobile</h2>
                <p className="text-white text-[18px] font-seXmibold py-2" >I always enjoy knowledge about Development Technolgy. <br /> Interesting for progamming Website Development and Mobile Development </p>
                <div className="flex gap-4 flex-start my-8">
                    <button className="bg-[#3b3dc9] p-[2rem] rounded-xl text-white font-semibold flex gap-2">
                        <img className="w-5 h-5 leading-2" src={git} alt="" /> 
                        <p className="">Github</p>
                    </button>
                    <button className="bg-[#47c93b] p-8 rounded-xl text-white font-semibold flex gap-2">
                        <img className="w-6 h-6 leading-6" src={discord} alt="" /> 
                        <p className="">Discord</p>
                    </button>
                    <button className="bg-[#c93b55] p-[2rem] rounded-xl text-white font-semibold flex gap-2">
                        <img className="w-6 h-6 leading-6" src={insta} alt="" /> 
                        <p className="">Instagram</p>
                    </button>
                </div>
            </div>
            <img className=" w-[20rem] h-auto border-auto rounded-lg mb-[2rem] mr-[8-rem] p-[4rem]" src= {gambar} />

        </div>
        <div className="bg-gradient-to-r from-slate-500 to-slate-800 w-full flex flex-col">
            <div className="flex justify-center">
                <h2 className="text-white font-bold text-[2rem]">Tools And Skills</h2>
            </div>
            <div className="flex flex-row mx-4 justify-center gap-4 flex-wrap">
                <div className="bg-white">
                    <div className="border-2 border-solid border-gray-500 w-[15rem] pb-4">
                        <img className="" src={htmlku} alt="" />
                        <p className="text-lg text-black font-bold text-center mb-4 pt-4">JAVASCRIPT</p>
                        <p className="text-sm text-gray-700 font-normal text-center">Understanding about Javascript</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="border-2 border-solid border-gray-500 w-[15rem] pb-4">
                        <img className="" src={cssku} alt="" />
                        <p className="text-lg text-black font-bold text-center mb-4 pt-4">JAVASCRIPT</p>
                        <p className="text-sm text-gray-700 font-normal text-center">Understanding about Javascript</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="border-2 border-solid border-gray-500 w-[15rem] pb-4">
                        <img className="" src={js} alt="" />
                        <p className="text-lg text-black font-bold text-center mb-4 pt-4">JAVASCRIPT</p>
                        <p className="text-sm text-gray-700 font-normal text-center">Understanding about Javascript</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="border-2 border-solid border-gray-500 w-[15rem] pb-4">
                        <img className="" src={rect} alt="" />
                        <p className="text-lg text-black font-bold text-center mb-4 pt-4">JAVASCRIPT</p>
                        <p className="text-sm text-gray-700 font-normal text-center">Understanding about Javascript</p>
                    </div>
                </div>

                <div className="bg-white">
                    <div className="border-2 border-solid border-gray-500 w-[15rem] pb-4">
                        <img className="" src={node} alt="" />
                        <p className="text-lg text-black font-bold text-center mb-4 pt-4">JAVASCRIPT</p>
                        <p className="text-sm text-gray-700 font-normal text-center">Understanding about Javascript</p>
                    </div>
                </div>
            </div>
        </div>
        </>    
    )
}