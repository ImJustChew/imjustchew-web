import Head from "next/head";
import { FC, PropsWithChildren } from "react";

const Layout: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
    return <div className="flex flex-col w-screen min-h-screen">
        <Head>
            <title>{title} - Chew Tzi Hwee</title>
        </Head>
        {children}
    </div>
}

export default Layout;