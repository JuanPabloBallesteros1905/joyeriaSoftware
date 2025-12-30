


import { CustomSideBars } from "@/components/SideBar";



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <CustomSideBars />
            {children}
        </>



    );
}