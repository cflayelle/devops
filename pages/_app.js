import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import Script from "next/script";
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutComponent from '../components/LayoutComponent';

function MyApp({Component, pageProps}) {
    return (
        <div>
            <Head>
                // Responsive meta tag
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                // bootstrap CDN
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossOrigin="anonymous"
                />
                <Script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                    crossorigin="anonymous"/>
            </Head>

            <LayoutComponent>
                <Component {...pageProps} />
            </LayoutComponent>
        </div>
    );
}

export default MyApp;