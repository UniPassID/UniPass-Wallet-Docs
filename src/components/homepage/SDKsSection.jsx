import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import Translate from '@docusaurus/Translate'
import {
  AngularIcon,
  // ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
import { useState } from 'react';

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/-light.png" />
        <link rel="prefetch" href="/static/landing-page/-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="unipass-badge">SDKs</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
          <Translate id="sdksSection.support">We support your tech stack!</Translate>
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="web" />
              <Pill section="mobile" />
              <Pill section="plugin" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Custom Auth SDK</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Introduction of Custom Auth SDK
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>SDKs</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate with Custom Auth SDKs
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink href="develop/popup-sdk/quick-start" Icon={ReactIcon} label="Web" />
                </li>
                <li>
                  <SDKLink
                    href="develop/android-sdk/quick-start"
                    Icon={AngularIcon}
                    label="Android"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Wallet Connectors</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build with wallet connectors
            </p>
            <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
               <li>
                <SDKLink href="develop/wallet-connector/RainbowKit-Usage" Icon={JSIcon} label="Rainbow Kit" />
              </li>

            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Plug & Play SDK</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Introduction of Plug & Play SDK
            </p>
            {/* <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link> */}
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>SDKs</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate with Plug & Play SDKs
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="develop/popup-sdk/quick-start" Icon={KotlinIcon} label="Web - Popup" />
              </li>
              <li>
                <SDKLink href="develop/android-sdk/quick-start" Icon={SwiftIcon} label="Android" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Wallet Connectors</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build with wallet connectors
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink href="develop/wallet-connector/RainbowKit-Usage" Icon={SwiftIcon} label="Rainbow Kit" />
              </li>
            </ul>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="plugin"
          id="plugin"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Modules</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Add your modules to UniPass contract
            </p>
            <Link className="text-sm" href="/">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex flex-[3] items-center justify-center rounded-3xl p-6 px-8 lg:justify-end">
            <ThemedImage
              sources={{
                light: '/static/landing-page/-light.png',
                dark: '/static/landing-page/-dark.png',
              }}
              alt="Plugin SDK Usage Preview"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="text-center text-text-400">
        <p>
          Don&apos;t see your tech stack here?{' '}
          <Link href="https://unipass.id">Contact Us</Link>
        </p>
      </div>
    </section>
  );
}
