import * as React from 'react';

const getBalanceNode = () => {
  // eslint-disable-next-line no-useless-escape, prettier/prettier
  return document?.querySelector('#balance-text')?.parentElement?.parentElement?.childNodes[1]
};

const getBalance = (): Promise<any> => {
  return new Promise((resolve) => {
    const id = setInterval(() => {
      const balanceNode = getBalanceNode();

      if (balanceNode) {
        const balance = balanceNode.textContent.replace(' ≈ $', '');

        if (!Number.isNaN(Number(balance))) {
          clearInterval(id);
          resolve(balance);
        }
      }
    }, 350);
  });
};

const InfoPage: React.FC = () => {
  const [balance, setBalance] = React.useState<null | string>(null);
  const buttonClickById = (id: string) => (): void => {
    const el = document.getElementById(id);

    console.log('id', id, el);

    if (el) {
      // setExtensionOpen(false);
      el.click();
    }
  };

  const fetchBalance = async () => {
    const fetchedBalance = (await getBalance()) || 0;

    setBalance(fetchedBalance);
  };

  React.useEffect(() => {
    fetchBalance();
  }, []);

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
        <div className="w-[244px] flex flex-col gap-10 text-white">
          <div>
            {typeof balance === 'string' ? `$${balance}` : 'Loading...'}
          </div>
          <div className="flex gap-[35px]">
            <div onClick={buttonClickById('dashboard_top_deposit')}>Send</div>
            <div onClick={buttonClickById('dashboard_top_withdrawal')}>
              Recieve
            </div>
            <div onClick={buttonClickById('dashboard_top_buy-crypto')}>
              Buy crypto
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full flex justify-end">
        <div>Github</div>
      </footer>
    </section>
  );
};

export {InfoPage};
