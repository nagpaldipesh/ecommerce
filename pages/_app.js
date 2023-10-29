import Script from "next/script";
import Layout from "./layout/Layout";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {
  useEffect(()=>{
    const WebFontConfig = {
      google: { families: ['Poppins:400,500,600,700'] }
    };
    (function (d) {
        var wf = d.createElement('script'), s = d.scripts[0];
        wf.src = 'assets/js/webfont.js';
        wf.async = true;
        s.parentNode.insertBefore(wf, s);
    })(document);
  },[])

  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>

    </>
  )
}
