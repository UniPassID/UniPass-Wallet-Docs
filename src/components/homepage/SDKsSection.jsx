import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import ThemedImage from "@theme/ThemedImage";
import Translate from "@docusaurus/Translate";
import {
  AndroidIcon,
  iOSIcon,
  WebIcon,
  FlutterIcon,
  UnityIcon,
  UnrealIcon,
  RNIcon,
} from "../../icons";
import Head from "@docusaurus/Head";
import { useState } from "react";

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        "flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white",
        disabled && "cursor-default"
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState("Web");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute("data-section");

          if (entry.isIntersecting) {
            entry.target.classList.add("intersected");
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: "-50% 0% -50% 0%" }
    );

    const elements = document.querySelectorAll(".sdk-section");
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
          "flex-1 cursor-pointer rounded-md px-6 py-2 text-center font-jakarta text-sm font-semibold",
          visibleSection === section
            ? "bg-primary text-white"
            : "text-black dark:text-white"
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 px-4 py-20" id="start-building">
      <Head>
        <link rel="prefetch" href="/static/landing-page/-light.png" />
        <link rel="prefetch" href="/static/landing-page/-dark.png" />
      </Head>
      <div className="mx-auto max-w-7xl">
        <div className="unipass-badge">SDKs</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          {/* <h2 className="my-0 text-center font-jakarta lg:text-3xl">
          <Translate id="sdksSection.support">We support your tech stack!</Translate>
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="Custom Auth" />
              <Pill section="Plug & Play" />
              <Pill section="plugin" />
            </div>
          </div> */}
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Custom Auth"
          id="Custom Auth"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Custom Auth SDK</h3>
            <p className="text-md leading-relaxed text-text-400 lg:max-w-md leading-7 pt-2">
              A non-UI SDK which allows complete customization of login and
              signature.
              <ul>
                <li>White-label & customizable UI</li>
                <li>Customizable login methods</li>
                <li>Silent signing</li>
                <li>Gasless service</li>
              </ul>
            </p>
            <Link className="text-sm" href="custom-auth/introduction">
              Know More &rarr;
            </Link>
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>SDKs</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate with Custom Auth SDKs
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="custom-auth/web-sdk/quick-start"
                    Icon={WebIcon}
                    label="Web"
                  />
                </li>
              </ul>
            </div>
            <div className="mt-6 flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                  <li>
                    <SDKLink Icon={AndroidIcon} label="Android" />
                  </li>
                  <li>
                    <SDKLink Icon={iOSIcon} label="iOS" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Wallet Connectors</h4>
            <p className="text-sm leading-relaxed text-text-400">Coming soon</p>
            {/* <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="develop/wallet-connector/rainbowkit"
                  Icon={AndroidIcon}
                  label="Rainbow Kit"
                />
              </li>
            </ul> */}
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="Plug & Play"
          id="Plug & Play"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Plug & Play SDK</h3>
            <p className="text-md leading-relaxed text-text-400 lg:max-w-md leading-7 pt-2">
              A decentralized SDK which provides Wallet UI and unified
              non-custodial account management.
              <ul>
                <li>User-friendly & non-custodial accounts</li>
                <li>Wallet UI included</li>
                <li>Secure signing interface</li>
                <li>Gasless service</li>
              </ul>
            </p>

            <Link className="text-sm" href="develop/introduction">
              Know More &rarr;
            </Link>
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>SDKs</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate with Plug & Play SDKs
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="develop/popup-sdk/quick-start"
                  Icon={WebIcon}
                  label="Web - Popup"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/android-sdk/quick-start"
                  Icon={AndroidIcon}
                  label="Android"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/ios-sdk/quick-start"
                  Icon={iOSIcon}
                  label="iOS"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/flutter-sdk/quick-start"
                  Icon={FlutterIcon}
                  label="Flutter"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/rn-sdk/quick-start"
                  Icon={RNIcon}
                  label="React Native"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/unity-sdk/quick-start"
                  Icon={UnityIcon}
                  label="Unity"
                />
              </li>
              <li>
                <SDKLink
                  href="develop/unreal-sdk/quick-start"
                  Icon={UnrealIcon}
                  label="Unreal"
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 rounded-b-3xl bg-secondary-800 p-6 px-8 lg:rounded-r-3xl lg:rounded-bl-none">
            <h4>Wallet Connectors</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build with wallet connectors
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="develop/wallet-connector/rainbowkit"
                  Icon={AndroidIcon}
                  label="Rainbow Kit"
                />
              </li>
            </ul>
          </div>
        </div>

        {/* <div
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
        </div> */}
      </div>
      {/* <div className="text-center text-text-400">
        <p>
          Don&apos;t see your tech stack here?{" "}
          <Link href="https://unipass.id">Contact Us</Link>
        </p>
      </div> */}
    </section>
  );
}
