import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

export default function App({ Component, pageProps }: AppProps) {
  console.log("app running");
  return (
    <>
      <ProgressBar
        height="4px"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link href="/"> Home </Link>
            </li>
            <li>
              <Link href="/blog"> Blog </Link>
            </li>
            <li>
              <Link href="/static/1"> Static </Link>
            </li>
            <li>
              <Link href="/static-fallback/1"> Static Fallback </Link>
            </li>
            <li>
              <Link href="/isr/1"> ISR </Link>
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/"> Home but SSR </a>
            </li>
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}
