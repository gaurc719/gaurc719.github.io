const songs = [
  {
    title: "Weightless",
    artist: "Marconi Union",
url: "https://www.youtube.com/playlist?list=PLo3knbrPSrsDyO7Z3Q1tNXdktHbw33pEc&utm_source=chatgpt.com",
thumbnail: "weightless.jpg",


  },
  {
    title: "Electra",
    artist: "Airstream",
    url: "https://www.youtube.com/playlist?list=PLUaehC_Q7R0XykL4ORx_uwc6-4EBsW5D-&utm_source=chatgpt.com",
    thumbnail: "electra.jpg"
  },
  {
    title: "Mellomaniac (Chill Out Mix)",
    artist: "DJ Shah",
    url: "https://www.youtube.com/playlist?list=PLUaehC_Q7R0XykL4ORx_uwc6-4EBsW5D-&utm_source=chatgpt.com",
    thumbnail: "mellomaniac.jpg"
  },
  {
    title: "Watermark",
    artist: "Enya",
    url: "https://www.youtube.com/playlist?list=PLUaehC_Q7R0XykL4ORx_uwc6-4EBsW5D-&utm_source=chatgpt.com",
    thumbnail: "watermark.jpg"
  },
  {
    title: "Strawberry Swing",
    artist: "Coldplay",
    url: "https://www.youtube.com/playlist?list=PLHwvDXmNUa93SLj9ynZqIOmNAb7122AZl&utm_source=chatgpt.com",
    thumbnail: "strawberry_swing.jpg"
  },
  {
    title: "Please Don't Go",
    artist: "Barcelona",
    url: "https://www.youtube.com/watch?v=-kizV91zQ_0&list=RD-kizV91zQ_0&start_radio=1",
    thumbnail: "please_dont_go.jpg"
  },
  {
    title: "Pure Shores",
    artist: "All Saints",
    url: "https://www.youtube.com/watch?v=dVNdTXEJv1A&list=RDdVNdTXEJv1A&start_radio=1",
    thumbnail: "pure_shores.jpg"
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    url: "https://www.youtube.com/watch?v=hLQl3WQQoQ0&list=RDhLQl3WQQoQ0&start_radio=1",
    thumbnail: "someone_like_you.jpg"
  },
  {
    title: "Canzonetta Sull'aria",
    artist: "Mozart",
    url: "https://www.youtube.com/watch?v=Iec7ZulOgEE&list=RDIec7ZulOgEE&start_radio=1",
    thumbnail: "canzonetta.jpg"
  },
  {
    title: "We Can Fly",
    artist: "Café Del Mar",
    url: "https://www.youtube.com/watch?v=LJ1XssuhK8E&list=RDLJ1XssuhK8E&start_radio=1",
    thumbnail: "we_can_fly.jpg"
  }
];

document.getElementById("song-btn").addEventListener("click", () => {
  const random = songs[Math.floor(Math.random() * songs.length)];

  document.getElementById("thumb").src = random.thumbnail;
  document.getElementById("title").textContent = random.title;
  document.getElementById("artist").textContent = random.artist;

  document.getElementById("result").classList.remove("hidden");

  window.open(random.url, "_blank");
});
