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

export const tracks = [
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1734412743%3Fsecret_token%3Ds-bxt7FPCc5Bn&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1750807224%3Fsecret_token%3Ds-8MBku8AcpsO&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A837288274&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1662616578%3Fsecret_token%3Ds-YGV77ydarVE&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1138027102%3Fsecret_token%3Ds-GZHPv2lMfpY&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A1255188757%3Fsecret_token%3Ds-YUvRrte1cl1&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A570516849&color=%23fe6847&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
];
