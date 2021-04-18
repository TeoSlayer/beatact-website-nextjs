import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charset="utf-8"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                    <meta name="description" content="Beatact is the first centralized platform for techno/edm/electro parties and events."/>
                    <meta name="author" content="Beatact"/>
                    <link rel="icon" href="../static/assets/template/assets/img/brand/favicon.png" type="image/png"></link>
                    <link rel="stylesheet" href="../static/assets/template/assets/libs/@fortawesome/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Shadows+Into+Light"/>
                    <link rel="stylesheet" href="..static/assets/template/assets/libs/swiper/dist/css/swiper.min.css"/>
                    <link rel="stylesheet" href="../static/assets/template/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css"/>
                    <link rel="stylesheet" href="../static/assets/template/assets/css/purpose.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                    <script src="../static/assets/template/assets/libs/jquery/dist/jquery.min.js"></script>
                    <script src="../static/assets/template/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="../static/assets/template/assets/libs/in-view/dist/in-view.min.js"></script>
                    <script src="../static/assets/template/assets/libs/sticky-kit/dist/sticky-kit.min.js"></script>
                    <script src="../static/assets/template/assets/libs/svg-injector/dist/svg-injector.min.js"></script>
                    <script src="../static/assets/template/assets/libs/jquery.scrollbar/jquery.scrollbar.min.js"></script>
                    <script src="../static/assets/template/assets/libs/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
                    <script src="../static/assets/template/assets/libs/imagesloaded/imagesloaded.pkgd.min.js"></script>
                    <script src="../static/assets/template/assets/libs/swiper/dist/js/swiper.min.js"></script>
                    <script src="../static/assets/template/assets/libs/typed.js/lib/typed.min.js"></script>
                    <script src="../static/assets/template/assets/js/purpose.js"></script>
                    <script src="../static/assets/template/assets/js/demo.js"></script>
                    <script src="../static/assets/template/assets/libs/isotope-layout/dist/isotope.pkgd.min.js"></script>
                    <script src="../static/assets/template/assets/libs/@fancyapps/fancybox/dist/jquery.fancybox.min.js"></script>
                </body>
            </html>
        );
    }
}

