import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/assets/images/icons/favicon.png" />
        {/* WebFont.js */}
        <link rel="preload" href="/assets/vendor/fontawesome-free/webfonts/fa-regular-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/wolmart87d5.woff?png09e" as="font" type="font/woff" crossOrigin="anonymous" />
        {/* Vendor CSS */}
        <link rel="stylesheet" type="text/css" href="/assets/vendor/fontawesome-free/css/all.min.css" />
        {/* Plugins CSS */}

        <link rel="stylesheet" type="text/css" href="/assets/vendor/animate/animate.min.css" />
        <link rel="stylesheet" type="text/css" href="/assets/vendor/magnific-popup/magnific-popup.min.css" />
        <link rel="stylesheet" href="/assets/vendor/swiper/swiper-bundle.min.css" />
        {/* Default CSS */}
        <link rel="stylesheet" type="text/css" href="/assets/css/demo2.min.css" />

        
            <Script strategy='beforeInteractive' src="assets/vendor/jquery/jquery.min.js"></Script>
            <Script src="assets/vendor/jquery.plugin/jquery.plugin.min.js"></Script>
            <Script src="assets/js/email-decode.min.js"></Script>
            <Script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></Script>
            <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>
            <Script src="assets/vendor/jquery.countdown/jquery.countdown.min.js"></Script>
            <Script src="assets/vendor/magnific-popup/jquery.magnific-popup.min.js"></Script>
            <Script src="assets/vendor/floating-parallax/parallax.min.js"></Script>
            <Script src="assets/vendor/zoom/jquery.zoom.js"></Script>

            <Script src="assets/js/custom.js"></Script>
            <Script src="assets/js/main.min.js"></Script>
        
      </Head>
      <body className="home">
        <div class="page-wrapper">
          <Main />
          <NextScript />
            
        </div>
      </body>
    </Html>
  )
}
