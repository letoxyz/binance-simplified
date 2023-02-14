import * as React from 'react';

// @ts-ignore
const binanceLogo = chrome.runtime.getURL('assets/img/binance.svg');
const wave = chrome.runtime.getURL('assets/img/wave.svg');
const leto = chrome.runtime.getURL('assets/img/leto.svg');
const github = chrome.runtime.getURL('assets/img/github.svg');

const IndexPage: React.FC = () => {
  const [isVisible, setVisible] = React.useState(true);

  const onDefault = () => {
    setVisible(false);
  };

  const onClick = () => {
    window.history.pushState(
      null,
      'Leto | Simplified Binance',
      '/en/my/dashboard'
    );
    window.history.go(0);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-[#000] w-full h-full text-white flex flex-col">
      <main className="h-full flex items-center justify-center text-center">
        <div className="flex flex-col gap-[100px]">
          <div>
            {/* Binance */}
            <img className="m-auto" src={binanceLogo} alt="binance" />
          </div>

          <div className="text-center gap-[37px] flex">
            <button type="button" onClick={onDefault}>
              <div className="cursor-pointer p-[38px] flex flex-col gap-2 text-center border-t-white/10 border-t from-white/[0.08] to-white/[0.06] bg-gradient-to-b rounded-2xl hover:from-white/[0.12] hover:to-white/[0.08] transition-all">
                <div className="text-[32px]">Basic</div>
                <div className="text-white/50">
                  Suitable for investments <br />
                  and trading
                </div>
              </div>
            </button>

            <img src={wave} alt="" />

            <button type="button" onClick={onClick}>
              <div className="cursor-pointer p-[38px] flex flex-col gap-2 text-center border-t-white/10 border-t from-white/[0.08] to-white/[0.06] bg-gradient-to-b rounded-2xl hover:from-white/[0.12] hover:to-white/[0.08] transition-all">
                <div className="text-[32px]">Simplified</div>
                <div className="text-white/50">
                  More suitable
                  <br />
                  for money transfers
                </div>
              </div>
            </button>
          </div>

          <div>
            {/* Leto */}
            <img className="m-auto" src={leto} alt="leto" />
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-end p-[22px] text-white/[0.48]">
        <a
          href="https://github.com/letoxyz"
          target="_blank"
          className="flex gap-2"
          rel="noreferrer"
        >
          <img src={github} alt="github" />
          <div>
            check code on <span className="underline">Github</span>
          </div>
        </a>
      </footer>
    </section>
  );
};

export {IndexPage};
