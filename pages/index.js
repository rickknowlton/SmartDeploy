import Head from "next/head";
import Layout from "../components/layouts/Layout";
import Hero from "../components/banners/Hero";
import Branding from "../components/brand/Branding";
import Divider from "../components/Divider";
import Features from "../components/features/Features";
import CTA from "../components/cta/CTA";
import About from "../components/about/About";
import FAQ from "../components/faq/FAQ";

export default function SmartDeploy() {
  return (
    <Layout>
      <Head>
        <link rel="favicon" href="/favicon.ico" />
        <title>SmartDeploy || Ready. Set. SmartDeploy!</title>
      </Head>
      <Hero />
      <Branding />
      <Divider />
      <About />
      <Divider />
      <Features />
      <Divider />
      <FAQ />
      <Divider />
      <CTA />
      <Divider />
    </Layout>
  );
}
