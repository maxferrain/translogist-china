import {Html, Head, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@600&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800&family=Unbounded:wght@600&display=swap" rel="stylesheet"/>
            </Head>
            <body>
            <div id="root"></div>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
