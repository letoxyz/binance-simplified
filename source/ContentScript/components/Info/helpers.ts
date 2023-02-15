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

export {getBalance, getBalanceNode};
