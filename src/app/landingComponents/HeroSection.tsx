import Image from "next/image";
import HeroImage from "../../../public/landingPage/svg/MobileImageOne.svg";
import TextTransition from "../../components/TextTransition";

const HeroSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row">
            <div className=" flex w-full flex-wrap content-center p-4 md:w-2/3">
                <div className="mb-6">
                    <div className="flex gap-2">
                        <h1 className="text-left text-3xl font-bold text-black md:text-6xl">
                            Find
                        </h1>
                        <div className="text-3xl font-bold text-blue-800 md:text-6xl">
                            <TextTransition duration={1000} interval={1000}>
                                <span>Customers</span>
                                <span>Pros</span>
                            </TextTransition>
                        </div>
                    </div>
                    <h1 className="text-left text-3xl font-bold text-black md:text-6xl">
                        Easily!!
                    </h1>
                </div>
                <p className="pb-8 text-left text-black opacity-80">
                    Chat with Local Pros –{" "}
                    <span className="font-bold">
                        Plumbers, Electricians, Landscapers, Handymen,
                    </span>{" "}
                    Free on Provisorr! Say Hello to Hassle-Free Home Fixes!
                </p>
                <div className="flex justify-evenly gap-2">
                    <button className=" mt-2 items-center rounded-lg bg-blue-500 p-2 text-sm font-semibold text-white transition-all duration-300 hover:text-lg hover:font-bold sm:text-base">
                        Get the App
                    </button>
                    <button className=" mt-2 items-center rounded-lg border-2 border-blue-500 bg-white p-2 font-semibold text-blue-500 transition-all duration-300 hover:text-lg hover:font-bold">
                        Contact Us
                    </button>
                </div>
            </div>
            <div className="m-auto flex w-full justify-end">
                <div className="">
                    <Image
                        className="h-auto w-full object-fill"
                        src={HeroImage}
                        alt=""
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
