import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                        rel="stylesheet" />
                    <link 
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default AppDocument;