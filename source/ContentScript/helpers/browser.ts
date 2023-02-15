const getImage = (url: string): string => {
  // @ts-ignore
  return chrome.runtime.getURL(url);
};

export {getImage};
