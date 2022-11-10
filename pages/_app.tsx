import "../styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

import { Inter } from "@next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-RERSJP4P37`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RERSJP4P37', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
