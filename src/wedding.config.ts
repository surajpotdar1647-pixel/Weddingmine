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
    partner1: "Aarav",
    partner2: "Diya",
  },

  // ---------- Date ----------
  // Short date shown on the big welcome screen and in the footer.
  date: "December 12, 2026",
  // Full date shown above the timeline.
  dateWithDay: "Saturday, December 12, 2026",

  // ---------- Welcome screen (top of the page) ----------
  hero: {
    // A small blessing or greeting shown above your names. Use "" to hide it.
    blessing: "Shree Ganeshaya Namah",
    // A short quote shown below the date. Use "" to hide it.
    quote:
      "As our love has brought a new meaning to our life, so will our marriage bring a new meaning to love",
    // Background video (MP4, under 5 MB is best). Use "" to show the image below instead.
    video: "",
    // Background image, used when there is no video.
    image: "/images/hero.svg",
  },

  // ---------- Logo (top left corner) ----------
  // Use "" to show the couple's initials automatically.
  logo: "",

  // ---------- Events timeline ----------
  // Add or remove events by copying or deleting a whole { ... } block.
  events: [
    {
      name: "Baraat",
      time: "9:30 AM",
      description: "The groom arrives with family and friends",
      image: "/images/event-1.svg",
    },
    {
      name: "Wedding Ceremony",
      time: "12:30 PM",
      description: "The sacred ceremony of joining hands",
      image: "/images/event-2.svg",
    },
    {
      name: "Lunch",
      time: "1:00 PM Onwards",
      description: "A celebratory feast for all our guests",
      image: "/images/event-3.svg",
    },
  ],

  // ---------- Families ----------
  families: {
    sectionIntro: "With blessings from",
    // Add or remove family cards the same way as events.
    groups: [
      {
        title: "Groom's Parents",
        names: "Mrs. Kavita & Mr. Suresh Sharma",
        message: "request the pleasure of your company",
        // Optional extra line inside the card, such as siblings. Use "" for both to hide it.
        extraTitle: "Groom's Brother",
        extraNames: "Kabir Sharma",
      },
      {
        title: "Bride's Parents",
        names: "Mrs. Anjali & Mr. Rakesh Mehta",
        message: "bless this sacred union",
        extraTitle: "",
        extraNames: "",
      },
    ],
    // Optional tribute to elders, with a photo. Set "names" to [] to hide this box.
    elders: {
      heading: "With eternal blessings from",
      names: ["Late Shri Mohan Sharma", "Late Smt. Leela Sharma"],
      photo: "/images/elders.svg",
    },
  },

  // ---------- Venue ----------
  venue: {
    name: "The Grand Celebration Hall",
    addressLine1: "Hall No. 2, Ground Floor",
    addressLine2: "Connaught Place, New Delhi",
    // What to search on Google Maps to find the venue.
    // Tip: copy the exact venue name and city from Google Maps.
    mapSearch: "Connaught Place, New Delhi",
  },

  // ---------- Footer (bottom of the page) ----------
  footer: {
    // Short line under the address. Use "" to hide it.
    blessingLine: "Om Shree Ganeshaya Namah",
  },

  // ---------- Background music ----------
  music: {
    // MP3 file in public/audio. Use "" to turn music off completely.
    file: "/audio/wedding.mp3",
    // Volume from 0 (silent) to 1 (full).
    volume: 0.3,
    // Android phones block music until the guest taps. This welcome box asks them to tap.
    welcomeTitle: "Welcome to Aarav & Diya's Wedding",
    welcomeMessage: "Step into our world of love, laughter, and forever.",
    welcomeButton: "Enter the Celebration",
  },

  // ---------- Link preview (WhatsApp, iMessage, social media) ----------
  share: {
    title: "Aarav & Diya | Wedding Celebration",
    description:
      "Join us in celebrating the wedding of Aarav & Diya on December 12, 2026 in New Delhi.",
    // Image shown in the link preview. A 1200 x 630 JPG works best.
    image: "/images/share-preview.jpg",
  },
};

export type WeddingConfig = typeof wedding;
