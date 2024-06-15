import React from 'react';
import SvgIcon from "@/app/components/TimeLine/SVGIcon";

const Footer = () => {
    return (
        <div>


            <footer className="k">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            {/*<a href="https://nazif.website" className="flex items-center">*/}

                            {/*    <span*/}
                            {/*        className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 💻 Previous Website</span>*/}
                            {/*</a>*/}
                            <div className="rounded-xl flex justify-center items-center">

                                <div className="rounded-xl relative inline-flex group">
                                    <div
                                        className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                    </div>
                                    <a href="https://nazif.website" title="Previous Website"
                                       className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                       role="button">Previous Website
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              href="" className="hover:underline">Nazif Ishrak™</a>. All Rights Reserved.
          </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://github.com/nazifishrak"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <SvgIcon icon={"git"}/>
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a href="https://www.linkedin.com/in/nazif-ishrak/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                                <SvgIcon icon={"linkedin"}/>
                                <span className="sr-only">LinkedIn</span>
                            </a>

                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;