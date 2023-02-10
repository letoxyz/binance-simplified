import * as React from 'react';

const IndexPage: React.FC = () => {
  const [isVisible, setVisible] = React.useState(true);

  const onDefault = () => {
    setVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-[#000] w-full h-full text-white flex flex-col">
      <main className="h-full flex items-center justify-center text-center">
        <div>
          <div>
            {/* Binance */}
            <img />
          </div>

          <div className="text-center gap-[37px] flex" onClick={onDefault}>
            <div className="cursor-pointer p-[38px] flex flex-col gap-2 text-center border-t-white/10 bg-white/[0.06] rounded-2xl">
              <div className="text-[32px]">Basic</div>
              <div className="text-white/50">
                Suitable for investments <br />
                and trading
              </div>
            </div>

            <div />

            <a href="/en/my/dashboard">
              <div className="cursor-pointer p-[38px] flex flex-col gap-2 text-center border-t-white/10 bg-white/[0.06] rounded-2xl">
                <div className="text-[32px]">Simplified</div>
                <div className="text-white/50">
                  More suitable
                  <br />
                  for money transfers
                </div>
              </div>
            </a>
          </div>

          <div>
            {/* Leto */}
            <img />
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-end">
        <div>Github</div>
      </footer>
    </section>
  );
};

export {IndexPage};
