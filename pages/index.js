import { Inter } from "next/font/google";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://i.pinimg.com/736x/0d/cf/b5/0dcfb548989afdf22afff75e2a46a508.jpg"
          sizes="any"
        />
        <title>Home Page</title>
      </Head>

      {/* ----Body---- */}
      <h1 className="flex justify-center">Home Page</h1>
    </div>
  );
}
