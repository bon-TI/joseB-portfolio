import { Html, Head, Main, NextScript } from 'next/document'
import {currentTheme} from "../components/Navbar";

function Document() {
    return (
        <Html lang="en" className={
            currentTheme === "dark" ? "dark" : "light"
        }>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document;