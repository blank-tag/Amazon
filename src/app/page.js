import Image from "next/image";
import Head from "next/head";
import Header from "./components/Header";
import { Banner } from "./components/Banner";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Payments</title>
      </Head>
      <h1> </h1>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
      </main>
    </div>
  );
}
