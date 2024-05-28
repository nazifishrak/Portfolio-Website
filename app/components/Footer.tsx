import React from 'react';
import SvgIcon from "@/app/components/TimeLine/SVGIcon";

const Footer = () => {
    return (
        <div>


            <footer className="k">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="https://nazif.website" className="flex items-center">

                                <span
                                    className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"> 💻 Previous Website</span>
                            </a>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                    <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              href="" className="hover:underline">Nazif Ishrak™</a>. All Rights Reserved.
          </span>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://github.com/nazifishrak" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
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