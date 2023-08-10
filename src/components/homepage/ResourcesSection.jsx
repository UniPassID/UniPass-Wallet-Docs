import Link from '@docusaurus/Link';
import React from 'react';
import RESOURCES from '../../resources';

export default function ResourcesSection() {
  return (
    <section className="my-20 px-6">
      <div className="mx-auto max-w-5xl">
        <span className="unipass-badge">RESOURCES</span>
        <h2 className="lg:text-3xl">Want to know more?</h2>
        <p className="text-text-400">
          Explore a curated set of resources to help you get started with UniPass
          quickly. <br />
        </p>

        <div className="no-underline-links mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((resource) => (
            <Link
              className="group flex flex-col justify-between"
              key={resource.title}
              href={resource.url}
            >
              <div>
                <div className="mb-3 overflow-hidden rounded-lg">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    loading="lazy"
                    className="aspect-video h-full w-full object-cover transition-transform group-hover:scale-110 lg:aspect-square"
                  />
                </div>
                <h3 className="font-semibold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary-100 lg:text-xl">
                  {resource.title}
                </h3>
                <p className="leading-snug text-text-400">
                  {resource.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="rounded-sm bg-primary-100/10 px-3 py-1 text-sm text-primary-100">
                  {resource.type}
                </div>
                <div className="text-sm text-text-400">
                  {`${resource.duration} ${
                    resource.type === 'Video' ? 'watch' : 'read'
                  }`}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="my-20 flex flex-wrap items-center justify-center gap-3 text-center">
          <span>View all</span>
          <div className="flex gap-2">
            <Link
              className="underline underline-offset-8"
              href="/guides/quickstart"
            >
              Guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
