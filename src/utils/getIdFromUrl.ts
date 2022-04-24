const getIdFromUrl = (url: string): string => {
  return url.split('/').filter(Boolean).pop() || '';
};

export default getIdFromUrl;
