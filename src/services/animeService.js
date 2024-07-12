export const getAnimes = async () => {
  const data = [
    {id: 1, title: "Naruto", episodes: 220, rating: 4.5, image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"},
    {id: 2, title: "Bleach", episodes: 366, rating: 4.5, image_url: "https://cdn.myanimelist.net/images/anime/3/40451.jpg", synopsis: "This is a complete list of episodes for the Bleach anime series. The list is broken into several story arcs and includes a summary of each story arc and the original broadcast date for each episode. With the exception of the five arcs focusing on the Bount, New Captain Shūsuke Amagai, Zanpakutō Unknown Tales, Beast Swords and Gotei 13 Invading Army, each arc is an adaptation of the original Bleach manga by Tite Kubo, with some filler (non-canonical) episodes airing during these arcs for different reasons. These arcs were produced to allow time for Tite Kubo to advance the storyline in the manga. Most of the later English titles are translations from the Japanese titles. Those episodes with official English titles have the title shown above the translation of its Japanese equivalent."},
    {id: 3, title: "One Piece", episodes: 900, rating: 4.5, image_url: "https://cdn.myanimelist.net/images/anime/6/73245.jpg"},
    {id: 4, title: "Dragon Ball Z", episodes: 291, rating: 4.5, image_url: "https://cdn.myanimelist.net/images/anime/6/50135.jpg"},
    {id: 5, title: "Attack on Titan", episodes: 59, rating: 4.5, image_url: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"},
  ]
  //const response = await axios.get(`https://api.jikan.moe/v3/top/anime/1/bypopularity`);
  //const data = await response.json();
  return data;
};
  