import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import Head from "next/head";



export const metadata = {
    title: "Nazif Ishrak 🚀",
    description: "I built this website for fun. Still thinking what I want to put in here",
    icons: {
        icon: '/favicon.ico',
    },
}
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>

        <body>
        <ThemeProvider enableSystem={true} attribute="class">

            {/* Background container */}
            <div className="relative min-h-screen">
                {/* Background pattern and effect */}
                <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-black">
                    <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
                </div>
                {/* Main content */}
                <div className="relative z-10">
                    <Navbar/>

                    {children}
                    <Analytics/>

                    <Footer/>

                </div>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}
