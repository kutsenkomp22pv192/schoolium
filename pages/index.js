import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import {Teachers} from "../components/Teachers";
import {Form} from "../components/Form";
import React from "react";

export default function Home() {
  return (
    <>
      <SeoHead title='Schoolium' />
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
        <Teachers />
        <FAQ />
        <Form/>
      </Layout>
    </>
  );
}