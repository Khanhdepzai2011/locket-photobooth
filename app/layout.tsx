import type { Metadata } from "next";
import "./style.css";
export const metadata:Metadata={title:"Photobooth Studio",description:"Independent mobile photobooth camera"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body>{children}</body></html>}
