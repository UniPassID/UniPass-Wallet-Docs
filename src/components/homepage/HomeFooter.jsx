import React from 'react';
import clsx from 'clsx';


export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; 2023 UniPass SDK Document, Built with ❤️
        </div>
      </div>
    </footer>
  );
}
