# Wedding Melody Page: instructions for Claude

This is a single-page wedding invitation website (Vite + React + TypeScript + Tailwind + shadcn/ui).
The person you are helping is most likely NOT technical. They want their wedding details on the site
and the site live on Vercel. Speak plainly, avoid jargon, and never ask them to run commands
unless they are clearly comfortable doing so.

## Where everything lives

- `src/wedding.config.ts` holds ALL personal content: names, date, blessing, quote, events, families,
  elders, venue, footer line, music, and link preview text. Make content changes here first.
- `public/images/` holds photos. `public/audio/` holds music. `public/videos/` can hold a hero video.
  Files in `public/` are referenced in the config with a leading slash, for example `/images/couple.jpg`.
- `index.html` gets its title and link preview tags from the config at build time (see `vite.config.ts`).
  Do not hardcode names in `index.html`.
- Colors live in `src/index.css` (the `--wedding-*` and `--primary` variables) and `tailwind.config.ts`.
- Sections: `src/components/HeroSection.tsx`, `EventTimeline.tsx`, `FamilySection.tsx`, `VenueSection.tsx`,
  `Navigation.tsx`, `MusicPlayer.tsx`. Footer is in `src/pages/Index.tsx`.

## How to handle a customization request

1. Collect the details. If the user has not given them, ask for the details in ONE friendly message:
   - Both names, wedding date (and day of the week)
   - A blessing line or greeting (optional) and a short quote (optional)
   - Each event: name, time, one-line description
   - Family names for each side, any siblings, and elders to honor (optional)
   - Venue name, address, and the exact name to search on Google Maps
   - Whether they want background music (they must own the song or use a royalty-free one)
2. Update `src/wedding.config.ts`. Keep the same structure and keys. Events and family groups are arrays,
   so add or remove whole entries as needed.
3. Photos: if the user uploaded photos to `public/images/`, list that folder, then point the config at the
   right files. Large photos slow the site down. If any image is over about 1 MB, tell the user and
   suggest compressing it (for example with squoosh.app) before uploading.
4. Keep `music.welcomeTitle` and `share.title` / `share.description` in sync with the new names and date.
5. Run `npm install` (if needed) and `npm run build` to confirm the site still builds. Fix any errors
   before finishing. A broken build means Vercel will not update the live site.
6. Summarize what changed in plain language and remind them what to do next (merge the change on GitHub
   if you opened a pull request, then Vercel updates the site automatically in about a minute).

## Rules

- Never commit secrets, phone numbers, or private addresses the user did not ask to publish.
- Do not add new npm packages unless the user asks for a feature that truly needs one.
- Keep the site working on phones. Most guests open it from WhatsApp on a phone.
- Do not remove the Android welcome popup in `MusicPlayer.tsx`. Android blocks sound until the guest taps.
- Copyrighted songs, photos, or videos should only be used if the user has the rights to them.
  Mention this once if they add a well-known commercial song.
