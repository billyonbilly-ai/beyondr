interface NavLink {
  link: string;
  to: string;
}

export const navLinks: NavLink[] = [
  { link: "Shop", to: "/shop" },
  { link: "Film", to: "/film" },
  { link: "Music", to: "/music" },
];

export const spotifyTracks = [
  "https://open.spotify.com/embed/track/59xylvwdwRWVnzraQV7vKA?utm_source=generator&theme=0",
  // Add more Spotify track embed URLs here later
];
