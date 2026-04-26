interface NavLink {
  link: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { link: "Shop", to: "/shop" },
  { link: "Film", to: "/film" },
  { link: "Music", to: "/music" },
];

type latestType = {
  contentType: string;
  contentImg: string;
  contentUrl: string;
  contentCta: string;
};

export const latest: latestType = {
  contentType: "music",
  contentImg: "/images/Player.jpg",
  contentUrl:
    "https://open.spotify.com/album/6zG6uX8Q8l3poalflYR53L?si=NMNn-CMXQ1uSp27VExDwAQ",
  contentCta: "listen now",
};

export const spotifyTracks = [
  "https://open.spotify.com/embed/track/59xylvwdwRWVnzraQV7vKA?utm_source=generator&theme=0",
  // Add more Spotify track URLs here later
];
