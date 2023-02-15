import * as React from 'react';
import {getImage} from '../../helpers';

const github = getImage('assets/img/github.svg');
const binance = getImage('assets/img/binance.svg');
const leto = getImage('assets/img/leto.svg');
const letoLogo = getImage('assets/img/letoLogo.svg');
const arrowTop = getImage('assets/img/arrow-top.svg');
const arrowBottom = getImage('assets/img/arrow-bottom.svg');
const plus = getImage('assets/img/plus.svg');

const getBalanceNode = () => {
  // eslint-disable-next-line no-useless-escape, prettier/prettier
  return document?.querySelector('#balance-text')?.parentElement?.parentElement?.childNodes[1]
};

const getBalance = (): Promise<any> => {
  return new Promise((resolve) => {
    const id = setInterval(() => {
      const balanceNode = getBalanceNode();

      if (balanceNode) {
        const balance = balanceNode.textContent?.replace(' ≈ $', '');

        if (!Number.isNaN(Number(balance))) {
          clearInterval(id);
          resolve(balance);
        }
      }
    }, 350);
  });
};

const InfoPage: React.FC = () => {
  const [isVisible, setVisible] = React.useState(true);
  const [balance, setBalance] = React.useState<null | string>(null);
  const buttonClickById = (id: string) => (): void => {
    const el = document.getElementById(id);

    if (el) {
      el.click();
      window.history.go(0);
    }
  };

  const backToBinance = () => {
    setVisible(false);
  };

  const fetchBalance = async () => {
    const fetchedBalance = (await getBalance()) || 0;

    setBalance(fetchedBalance);
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section className="bg-[#000] w-full h-full text-white flex flex-col">
      <header className="w-full h-[64px] relative flex items-center justify-center">
        <div className="text-center pt-[6px]">
          <div>simplified by</div>
          <img className="m-auto mt-[5px]" src={leto} alt="Leto" />
        </div>
        <nav className="absolute right-0 top-[calc(50%-30px)] flex gap-2 items-center justify-center p-[15px]">
          <button
            onClick={backToBinance}
            type="button"
            className="bg-white/[0.08] p-[10px] rounded-lg"
          >
            Back to Binance.com
          </button>
          <a
            href="http://leto.xyz"
            target="_blank"
            className="bg-white/[0.08] text-[#EEFF01] p-[10px] flex gap-[6px] rounded-lg"
            rel="noreferrer"
          >
            <div>
              <img src={letoLogo} alt="leto" />
            </div>
            <div>Use Leto app</div>
          </a>
        </nav>
      </header>
      <main className="h-full flex items-center justify-center text-center">
        <div className="flex flex-col gap-10 text-white text-center items-center">
          <img src={binance} alt="binance" width={99} height={19} />
          <div className="text-[64px] font-medium text-center">
            {typeof balance === 'string' ? `$${balance}` : 'Loading...'}
          </div>
          <div className="flex gap-[35px] items-center justify-center">
            <div
              onClick={buttonClickById('dashboard_top_deposit')}
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={arrowTop} alt="arrow" />
              </button>
              <div>Send</div>
            </div>
            <div
              onClick={buttonClickById('dashboard_top_withdrawal')}
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={arrowBottom} alt="arrow" />
              </button>
              Recieve
            </div>
            <div
              onClick={buttonClickById('dashboard_top_buy-crypto')}
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={plus} alt="arrow" />
              </button>
              Buy crypto
            </div>
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

export {InfoPage};
