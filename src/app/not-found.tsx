import Image from "next/image";
import notFoundSVG from "../../public/svg/page_not_found.svg";

const NotFound = () => {
    return (
        <div className="flex size-full flex-col items-center justify-center px-5 text-gray-700 md:flex-row">
            <div>
                <p className="text-2xl font-light leading-normal md:text-3xl">
                    Sorry we couldn&apos;t find this page.{" "}
                </p>
                <p className="mb-8">
                    But don&apos;t worry, you can find plenty of other things on
                    our homepage.
                </p>

                <button className="inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none active:bg-blue-600">
                    back to homepage
                </button>
            </div>
            <div>
                <Image src={notFoundSVG} alt="404" />
            </div>
        </div>
    );
};

export default NotFound;
