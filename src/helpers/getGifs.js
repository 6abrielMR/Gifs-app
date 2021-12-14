export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=5&api_key=Feo5m0b5Ijto5XIZEvz2Om8Fmz8FrrgY`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(
    ({
      id,
      title,
      images: {
        downsized_medium: { url },
      },
    }) => {
      return {
        id: id,
        title: title,
        url: url,
      };
    }
  );
  return gifs;
};
