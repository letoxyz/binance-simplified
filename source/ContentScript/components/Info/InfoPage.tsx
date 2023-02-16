import * as React from 'react';
import {getImage} from '../../helpers';
import {useAppStore} from '../../store';
import {getBalance} from './helpers';

const github = getImage('assets/img/github.svg');
const binance = getImage('assets/img/binance.svg');
const leto = getImage('assets/img/leto.svg');
const letoLogo = getImage('assets/img/letoLogo.svg');
const arrowTop = getImage('assets/img/arrow-top.svg');
const arrowBottom = getImage('assets/img/arrow-bottom.svg');
const plus = getImage('assets/img/plus.svg');

const InfoPage: React.FC = () => {
  const {setAppVisible} = useAppStore((store) => store.actions);
  const [balance, setBalance] = React.useState<null | string>(null);

  const backToBinance = (): void => {
    setAppVisible(false);
  };

  const fetchBalance = async (): Promise<void> => {
    const fetchedBalance = (await getBalance()) || 0;

    setBalance(fetchedBalance);
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

  return (
    <section className="bg-[#000] w-full h-full text-white flex flex-col">
      <header className="w-full h-[64px] relative flex items-center justify-center">
        <a href="http://leto.xyz" target="_blank" rel="noreferrer">
          <div className="text-center pt-[6px]">
            <div>simplified by</div>
            <img className="m-auto mt-[5px]" src={leto} alt="Leto" />
          </div>
        </a>
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
            <a
              href="/en/my/wallet/account/main/withdrawal/crypto/USDT"
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={arrowTop} alt="arrow" />
              </button>
              <div>Send</div>
            </a>
            <a
              href="/en/my/wallet/account/main/deposit/crypto/USDT"
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={arrowBottom} alt="arrow" />
              </button>
              Recieve
            </a>
            <a
              href="/en/buy-sell-crypto"
              className="flex gap-[7px] flex-col cursor-pointer items-center"
            >
              <button
                type="button"
                className="w-[64px] h-[64px] flex justify-center items-center bg-gradient-to-b from-white/[0.12] to-white/[0.08] active:from-white/[0.06] active:to-white/[0.08] rounded-full"
              >
                <img src={plus} alt="arrow" />
              </button>
              Buy crypto
            </a>
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-end p-[22px] text-white/[0.48]">
        <a
          href="https://github.com/letoxyz/binance-simplified"
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
