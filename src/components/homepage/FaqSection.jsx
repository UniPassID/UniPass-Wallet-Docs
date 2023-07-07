import React from "react";
import Link from "@docusaurus/Link";
import { ArrowUpRight } from "react-feather";
import Head from "@docusaurus/Head";
import Translate from "@docusaurus/Translate";

export default function APIReferenceSection() {
  return (
    <section className="relative mb-20 px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/faq/faq"
          aria-label="FAQ"
          target="_blank"
          className="absolute right-8 top-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">
            <Translate id="faqSection.faq">FAQ</Translate>
          </h2>
          <p className="text-zinc-400">
            <Translate id="faqSection.faqIntro">
              We have gathered some frequently asked questions about UniPass
              SDK.
            </Translate>
          </p>
          <Link
            href="/faq/faq"
            className="font-medium text-primary-100 dark:text-primary"
          >
            <Translate id="faqSection.faqLink">
              Got questions? Start here for answers
            </Translate>{" "}
            &rarr;
          </Link>
          {/* <ul className="mt-10 flex list-none flex-col gap-4 text-left lg:pl-0">
            <li className="flex flex-col gap-1">
              <Link
                href="/faq/faq"
                className="group font-jakarta font-semibold text-current"
              >
                Create a meeting
                <span className="ml-2 opacity-0 transition group-hover:translate-x-2 group-hover:opacity-100">
                  &rarr;
                </span>
              </Link>
              <div className="text-zinc-400">
                Create a meeting for your organization
              </div>
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
}
