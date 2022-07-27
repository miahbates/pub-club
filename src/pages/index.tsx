import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <h1>helloooo</h1>
      <Link href="/login">login</Link>
    </div>
  );
};

export default Home;
