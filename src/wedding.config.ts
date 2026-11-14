/**
 * ============================================================
 *  YOUR WEDDING DETAILS
 * ============================================================
 *  This is the ONLY file you need to change to make the website yours.
 *
 *  Rules for editing by hand:
 *   - Only change the text inside the quotes "like this".
 *   - Keep every quote mark, comma and bracket where it is.
 *   - Photos, video and music go in the "public" folder. Then write
 *     their path here starting with a slash, for example "/images/couple.jpg".
 *   - To hide something optional, set it to "" (empty quotes).
 *
 *  Easier option: ask Claude to do it for you. See GUIDE.md.
 * ============================================================
 */

export const wedding = {
  // ---------- The couple ----------
  couple: {
    partner1: "Suraj",
    partner2: "Kanchan",
  },

  // ---------- Date ----------
  // Short date shown on the big welcome screen and in the footer.
  date: "January 1, 2027",
  // Full date shown above the timeline.
  dateWithDay: "Friday, January 1, 2027",

  // ---------- Welcome screen (top of the page) ----------
  hero: {
    // A small blessing or greeting shown above your names. Use "" to hide it.
    blessing: "Ganapati Bappa Morya",
    // A short quote shown below the date. Use "" to hide it.
    quote: "",
    // Background video (MP4, under 5 MB is best). Use "" to show the image below instead.
    video: "",
    // Background image, used when there is no video.
    image: "/images/public/images/First.JPG",
  },

  // ---------- Logo (top left corner) ----------
  // Use "" to show the couple's initials automatically.
  logo: "",

  // ---------- Events timeline ----------
  // Add or remove events by copying or deleting a whole { ... } block.
  events: [
    {
      name: "Haldi",
      time: "31 December 2026",
      description: "A joyful ceremony of turmeric, music and blessings",
      image: "/images/Haldi.jpeg.HEIC",
    },
    {
      name: "Wedding",
      time: "1 January 2027",
      description: "The sacred ceremony of joining hands",
      image: "/images/wedding.jpg",
    },
  ],

  // ---------- Families ----------
  families: {
    sectionIntro: "With blessings from",
    // Add or remove family cards the same way as events.
    groups: [
      {
        title: "Groom's Parents",
        names: "Mrs. Mangala & Mr. Jagdish Potdar",
        message: "request the pleasure of your company",
        // Optional extra line inside the card, such as siblings. Use "" for both to hide it.
        extraTitle: "",
        extraNames: "",
      },
      {
        title: "Bride's Parents",
        names: "Mrs. Sangeeta & Mr. Mahavir Khangare",
        message: "bless this sacred union",
        extraTitle: "",
        extraNames: "",
      },
    ],
    // Optional tribute to elders, with a photo. Set "names" to [] to hide this box.
    elders: {
      heading: "With eternal blessings from",
      names: [],
      photo: "",
    },
  },

  // ---------- Venue ----------
  venue: {
    name: "Gangotri Resort",
    addressLine1: "Gangotri Resort",
    addressLine2: "Nagpur",
    // What to search on Google Maps to find the venue.
    // Tip: copy the exact venue name and city from Google Maps.
    mapSearch: "Gangotri Resort, Nagpur",
  },

  // ---------- Footer (bottom of the page) ----------
  footer: {
    // Short line under the address. Use "" to hide it.
    blessingLine: "Ganapati Bappa Morya",
  },

  // ---------- Background music ----------
  music: {
    // MP3 file in public/audio. Use "" to turn music off completely.
    file: "/audio/wedding.mp3",
    // Volume from 0 (silent) to 1 (full).
    volume: 0.3,
    // Android phones block music until the guest taps. This welcome box asks them to tap.
    welcomeTitle: "Welcome to Suraj & Kanchan's Wedding",
    welcomeMessage: "Step into our world of love, laughter, and forever.",
    welcomeButton: "Enter the Celebration",
  },

  // ---------- Link preview (WhatsApp, iMessage, social media) ----------
  share: {
    title: "Suraj & Kanchan | Wedding Celebration",
    description:
      "Join us in celebrating the wedding of Suraj & Kanchan on January 1, 2027 in Nagpur.",
    // Image shown in the link preview. A 1200 x 630 JPG works best.
    image: "/images/share-preview.jpg",
  },
};
