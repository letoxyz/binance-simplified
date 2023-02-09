import * as React from 'react';

const App: React.FC = () => {
  return (
    <section className="bg-[#000] w-full h-full text-white flex flex-col">
      <header className="w-full h-[64px] relative flex items-center justify-center">
        <div className="text-center">
          <div>Simplified by</div>
          <img alt="Leto" />
        </div>
        <nav className="absolute right-0 top-[calc(50%-30px)] flex gap-2 items-center justify-center">
          <button type="button">Back to Binance.com</button>
          <a>
            <div>
              <img />
            </div>
            <div>Use Leto app</div>
          </a>
        </nav>
      </header>
      <main className="h-full flex items-center justify-center text-center">
        <div className="w-[244px]">
          <div>$548.04</div>
        </div>
      </main>
      <footer className="w-full flex justify-end">
        <div>Github</div>
      </footer>
    </section>
  );
};

export {App};
