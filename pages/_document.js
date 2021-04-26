import Document, { Head, Main, NextScript, Html } from 'next/document'

export default class MyDocument extends Document {

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="../img/brand/favicon.png" type="image/png"></link>
                    <link rel="stylesheet" href="../libs/@fortawesome/fontawesome-free/css/all.min.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Shadows+Into+Light&display=swap"/>
                    <link rel="stylesheet" href="../libs/@fancyapps/fancybox/dist/jquery.fancybox.min.css"/>
                    <link rel="stylesheet" href="../libs/swiper/dist/css/swiper.min.css"/>
                    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LJJXJ8BKWR"></script>
                    <script src="../js/gs.js"/>
                    <script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js" data-cfasync="false"></script>
                    <script src="../js/cookieconsent.js"/>
                </Head>
                <body>
                    <Main />
                    <NextScript/>
                    <script rel="preload" src="../libs/jquery/dist/jquery.min.js"></script>
                    <script rel="preload" src="../libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
                    <script rel="preload" src="../libs/in-view/dist/in-view.min.js"></script>
                    <script rel="preload" src="../libs/sticky-kit/dist/sticky-kit.min.js"></script>
                    <script rel="preload" src="../libs/svg-injector/dist/svg-injector.min.js"></script>
                    <script rel="preload" src="../libs/jquery.scrollbar/jquery.scrollbar.min.js"></script>
                    <script rel="preload" src="../libs/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
                    <script rel="preload" src="../libs/imagesloaded/imagesloaded.pkgd.min.js"></script>
                    <script rel="preload" src="../libs/swiper/dist/js/swiper.min.js"></script>
                    <script rel="preload" src="../libs/typed.js/lib/typed.min.js"></script>
                    <script rel="preload" src="../libs/jquery-countdown/dist/jquery.countdown.min.js"></script>
                    <script rel="preload" src="../libs/@fancyapps/fancybox/dist/jquery.fancybox.min.js"></script>
                    <script rel="preload" src="../libs/isotope-layout/dist/isotope.pkgd.min.js"></script>
                    <script rel="preload" src="../js/purpose.js"></script>
                    <script rel="preload" src="../js/demo.js"></script>
                    
                </body>
            </Html>
        );
    }
}

