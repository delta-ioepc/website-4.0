import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta
          name="ahrefs-site-verification"
          content="e7e2771409e8c11efa54c3c48f8e624f5cf57829c4ea7d3ba2e8942b42a9582a"
        />
      </Head>
      <div className="w-full">
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className="flex w-[100%] mr-0 bg-[#1f1b4e] xl:px-[250px] px-10 pt-3">
        <Footer />
      </div>
    </div>
  );
}
