import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Layout } from "@/Layout";
import { SEO } from "@/components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SEO title="Home" />
      <Component {...pageProps} />
    </Layout>
  );
}
