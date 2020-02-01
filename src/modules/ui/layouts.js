import React from "react";
import Header from "./Header";
import Footer from "./Footer";

//Default Layout
export const Layout = ({children, seo, hideHeader, hideFooter}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </> 
    );
}

//Space for any kind of Layout can go here based on your needs. 
