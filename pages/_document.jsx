import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="../static/assets/template/assets/libs/@fortawesome/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"/>
                    <link rel="stylesheet" href="../static/assets/template/assets/libs/swiper/dist/css/swiper.min.css"/>
                    <link rel="stylesheet" href="../static/assets/template/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css"/>
                    <link rel="stylesheet" href="../static/assets/template/assets/css/purpose.css" id="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                    <script src="../static/assets/template/assets/js/purpose.core.js"></script>
                    <script src="../static/assets/template/assets/libs/swiper/dist/js/swiper.min.js"></script>
                    <script src="../static/assets/template/assets/libs/typed.js/lib/typed.min.js"></script>
                    <script src="../static/assets/template/assets/js/purpose.js"></script>
                    <script src="../static/assets/template/assets/js/demo.js"></script>
                </body>
            </html>
        );
    }
}

