import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
});

export const metadata: Metadata = {
    title: "Provisor",
    description:
        "Discover Provisor – Your go-to platform for connecting customers with skilled service providers for any task. Post tasks or offer your services today. Join Provisor and unlock endless opportunities to get things done or earn as a service provider!"
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <title>Provisor</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </head>

            <body className={`${poppins.className} size-full`}>
                <div className="flex w-full flex-col justify-center bg-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
