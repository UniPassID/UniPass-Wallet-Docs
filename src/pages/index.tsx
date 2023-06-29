import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Redirect } from '@docusaurus/router';
import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/FaqSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';


// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/introduction/intro">
//             UniPass Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home(): JSX.Element {
//   const {siteConfig} = useDocusaurusContext();


export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <HeroSection />
      <SDKsSection />

      <div className="relative">
        <APIReferenceSection />
        <div className="absolute top-1/2 bottom-0 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute top-0 bottom-1/2 -z-10 w-full bg-secondary-1000"></div>
      </div>

      <div className="z-0 bg-secondary-800 dark:bg-secondary-900">
        {/* <ResourcesSection /> */}
        {/* <HelpSection className="-mb-48" /> */}
      </div>

      {/* <CommunitySection /> */}

      <HomeFooter className="" />
    </Layout>
  );
}

  // return (
  //   <Layout
  //     title={`Hello from ${siteConfig.title}`}
  //     description="Description will go into a meta tag in <head />">
  //     <HomepageHeader />
  //     <main>
  //       <HomepageFeatures />
  //     </main>
  //   </Layout>
  // );
