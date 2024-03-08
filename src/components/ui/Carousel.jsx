import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import gambar1 from "../../assets/AuthPage/1.png"
import gambar2 from "../../assets/AuthPage/2.jpg"
import gambar3 from "../../assets/AuthPage/3.jpg"
import gambar4 from "../../assets/AuthPage/4.jpg"
import gambar5 from "../../assets/AuthPage/5.jpg"


const Carousel = () => {
    useEffect(() => {
        const slider = new Glide(".glide-05", {
            type: "carousel",
            focusAt: "center",
            perView: 1,
            autoplay: 5000,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount()

        return () => {
            slider.destroy()
        }
    }, [])
    return (
        <div className="overflow-x-hidden flex">
            <>

                <div className="glide-05 relative w-[36rem] h-[43rem]">
                    {/* text desc */}
                    <div className="absolute z-30 top-0 left-0 w-full h-[24rem] flex flex-col justify-between items-center mt-28">
                        <div className="text-white font-thin text-center">
                            <h3 className="text-4xl">Welcome to <span className="font-bold">heal.</span> in</h3>
                            <p className="text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="text-white text-center">
                            <h3 className="text-2xl">Lorem ipsum dolor, sit amet</h3>
                            <p className="font-thin text-base w-[18rem]">Lorem, ipsum dolor sit amet conse ctetur adipisicing elit.</p>
                        </div>
                    </div>
                    {/*    <!-- Slides --> */}
                    <div className="w-[34rem] h-[38rem] absolute top-0 left-0 bg-[#96BFFF] opacity-50 z-20 rounded-xl "></div>
                    <div className="overflow-hidden w-[34rem] h-[38rem] z-10 rounded-xl" data-glide-el="track">
                        <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                            <li>
                                <img
                                    src={gambar1}
                                    className="m-auto max-h-full w-full max-w-full"
                                />
                            </li>
                            <li>
                                <img
                                    src={gambar2}
                                    className="m-auto max-h-full w-full max-w-full"
                                />
                            </li>
                            <li>
                                <img
                                    src={gambar3}
                                    className="m-auto max-h-full w-full max-w-full"
                                />
                            </li>
                            <li>
                                <img
                                    src={gambar4}
                                    className="m-auto max-h-full w-full max-w-full"
                                />
                            </li>
                            <li>
                                <img
                                    src={gambar5}
                                    className="m-auto max-h-full w-full max-w-full"
                                />
                            </li>
                        </ul>
                    </div>

                    {/*    <!-- Indicators --> */}
                    <div
                        className="flex w-full items-center justify-center z-50  absolute -mt-28"
                        data-glide-el="controls[nav]"
                    >
                        <button
                            className="group p-1"
                            data-glide-dir="=0"
                            aria-label="goto slide 1"
                        >
                            <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-white transition-colors duration-300 focus:outline-none"></span>
                        </button>
                        <button
                            className="group p-1"
                            data-glide-dir="=1"
                            aria-label="goto slide 2"
                        >
                            <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-white transition-colors duration-300 focus:outline-none"></span>
                        </button>
                        <button
                            className="group p-1"
                            data-glide-dir="=2"
                            aria-label="goto slide 3"
                        >
                            <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-white transition-colors duration-300 focus:outline-none"></span>
                        </button>
                        <button
                            className="group p-1"
                            data-glide-dir="=3"
                            aria-label="goto slide 4"
                        >
                            <span className="block h-2 w-2 rounded-full bg-white ring-1 ring-white transition-colors duration-300 focus:outline-none"></span>
                        </button>
                    </div>
                </div>

            </>
        </div>
    )
}

export default Carousel
