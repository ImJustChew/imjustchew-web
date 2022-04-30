import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return <div className="grid grid-rows-[48px_auto] w-screen min-h-screen">
        <Head>
            <title>{title} - Chew Tzi Hwee</title>
        </Head>
        <div className="flex flex-row items-center px-4">
            <h1 className="text-xl font-medium text-gray-600 backdrop-blur">Chew Tzi Hwee</h1>
        </div>
        <div className="flex flex-col">
            {children}
        </div>
    </div>
}

export default Layout;