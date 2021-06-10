import "@src/common/globalStyles/main.css";
import Head from "next/head";
import Link from "next/link";
import "../configureAmplify";
import { Devtools } from "@ui-devtools/tailwind";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Temple</title>
        <meta name="Description" content="Lakazen2 | Happy Kids" />
      </Head>

      {process.env.NEXT_PUBLIC_APP_STAGE === "dev" ? (
        <Devtools>
          <div>
            <nav className="p-6 border-b border-gray-300">
              <Link href="/">
                <span className="mr-6 cursor-pointer">Home</span>
              </Link>
              <Link href="/create-post">
                <span className="mr-6 cursor-pointer">Create Post</span>
              </Link>
              <Link href="/profile">
                <span className="mr-6 cursor-pointer">Profile</span>
              </Link>
            </nav>
            <div className="py-8 px-16">
              <Component {...pageProps} />
            </div>
          </div>
        </Devtools>
      ) : (
        <div>
          <nav className="p-6 border-b border-gray-300">
            <Link href="/">
              <span className="mr-6 cursor-pointer">Home</span>
            </Link>
            <Link href="/create-post">
              <span className="mr-6 cursor-pointer">Create Post</span>
            </Link>
            <Link href="/profile">
              <span className="mr-6 cursor-pointer">Profile</span>
            </Link>
          </nav>
          <div className="py-8 px-16">
            <Component {...pageProps} />
          </div>
        </div>
      )}
    </>
  );
}

export default MyApp;
