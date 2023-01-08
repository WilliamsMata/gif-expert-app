export const getGifs = async (category) => {
  const apiKey = "cAJ07Vrt2DDzC0clGGKOG32cCThK60BL",
    limit = 5;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.original.webp,
  }));

  return gifs;
};
