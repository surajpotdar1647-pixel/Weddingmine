# Make Your Own Wedding Website (No Coding Needed)

This guide takes you from nothing to a live wedding website that you can share on WhatsApp. You do not need to know how to code. You will click buttons on three websites and type plain English instructions to Claude.

**Time needed:** about 1 hour the first time.
**Cost:** the website hosting is free. Claude needs a paid plan (Pro or higher) for the part where it edits your website. If you do not have one, use [Plan B](#plan-b-edit-the-details-yourself-without-claude), which is free.

## What you will end up with

- Your own website address, like `aarav-diya-wedding.vercel.app`
- Your names, date, events, families, venue, and map
- Your photos and (optionally) your music and a video
- A site that updates by itself every time you make a change

## Words you will see (quick dictionary)

| Word | What it means |
|---|---|
| **GitHub** | A website that stores your website's files. Think of it as Google Drive for websites. |
| **Repository** (or **repo**) | One project folder on GitHub. Your wedding website will be one repository. |
| **Template** | The starting design you copy. This project is the template. |
| **Vercel** | A free service that takes the files from GitHub and puts them on the internet. |
| **Deploy** | Put the website online. Vercel does this for you. |
| **Pull request** (or **PR**) | A set of changes waiting for your approval. You click "Merge" to accept them. |
| **Merge** | Accept the changes. After you merge, your live site updates. |

## Before you start: gather your details

Have these ready in a notes app. You will paste them to Claude later.

1. Both of your names
2. Wedding date and the day of the week
3. A blessing or greeting line for the top of the page (optional, for example "Shree Ganeshaya Namah")
4. A short quote (optional)
5. Each event: name, time, and one short line about it (for example "Haldi, 10:00 AM, A morning of color and laughter")
6. Family names for each side, plus any siblings you want to mention
7. Elders you want to honor (optional), with a photo of them
8. Venue name, hall or floor, area and city
9. Photos: one per event, and one of your elders if you want that section
10. Music (optional): an MP3 song you have the right to use

**Photo tips**

- Landscape (wide) photos look best for events.
- Keep each photo under 1 MB. To make a photo smaller for free, go to [squoosh.app](https://squoosh.app), drop the photo in, and click the download button.
- Give photos simple names with no spaces, like `haldi.jpg`, `wedding.jpg`, `lunch.jpg`, `grandparents.jpg`.

## Step 1: Create your free accounts

You need three accounts. Use the same email for all of them to keep things easy.

### 1a. GitHub (free)

1. Go to [github.com/signup](https://github.com/signup).
2. Enter your email, create a password, and choose a username.
3. Check your email for a code from GitHub and type it in.
4. If GitHub asks you a few questions about how you will use it, you can click **Skip personalization**.

### 1b. Vercel (free)

1. Go to [vercel.com/signup](https://vercel.com/signup).
2. When asked about your plan type, choose **Hobby** (this is the free plan for personal projects).
3. Type your name, then click **Continue with GitHub**.
4. A GitHub page opens asking for permission. Click **Authorize Vercel**.

### 1c. Claude (paid plan needed for Step 5)

1. Go to [claude.ai](https://claude.ai) and sign up or log in.
2. To let Claude edit your website, you need a **Pro** plan or higher. You can upgrade from your account settings. If you would rather not pay, skip Step 5 and use [Plan B](#plan-b-edit-the-details-yourself-without-claude) instead.

## Step 2: Make your own copy of the website

1. Make sure you are logged in to GitHub.
2. Open the template page: **[github.com/neelkanani/wedding-melody-template](https://github.com/neelkanani/wedding-melody-template)**
3. Near the top right, click the green button **Use this template**, then click **Create a new repository**.
4. Fill in the form:
   - **Repository name:** something like `our-wedding`
   - **Visibility:** choose **Private** if you do not want strangers to see your files. Your website will still be visible to anyone you share the link with.
5. Click **Create repository**.

You now have your own copy. Everything from here happens in your copy, not the template.

## Step 3: Put the website online with Vercel

Do this now, even before adding your details. That way you can watch your site update as you make changes.

1. Go to [vercel.com/new](https://vercel.com/new).
2. Under **Import Git Repository**, find `our-wedding` (or whatever you named it) and click **Import**.
   - **Don't see your repository?** Click **Adjust GitHub App Permissions** (or **Configure GitHub App**). On the GitHub page that opens, choose **Only select repositories**, pick your wedding repository, and click **Save**. Then go back to Vercel and refresh.
3. On the next screen, leave everything as it is. Vercel recognizes the project on its own (it will show **Vite**).
4. Click **Deploy**.
5. Wait about one minute. When you see the celebration screen, click the picture of your site, or click **Continue to Dashboard** and then **Visit**.

Your site is now live, showing sample names (Aarav and Diya). Next, you will make it yours.

### Give your site a nicer address (optional)

1. In your Vercel project, click **Settings** at the top, then **Domains** on the left.
2. Next to the address ending in `.vercel.app`, click **Edit**.
3. Type a new name, like `aarav-diya-wedding`, and click **Save**. If it is taken, try adding the year.

## Step 4: Upload your photos (and music)

You upload photos through the GitHub website. Claude will then put them in the right places.

1. Open your repository on GitHub (go to [github.com](https://github.com) and click it in the list on the left).
2. Click the **public** folder, then the **images** folder.
3. Near the top right, click **Add file**, then **Upload files**.
4. Drag your photos into the box (or click **choose your files**).
5. Scroll down and click the green **Commit changes** button.

**To add your own music:** do the same, but open **public**, then **audio**. Upload your MP3. If you name it `wedding.mp3`, it will replace the sample music and you don't need to change anything else.

**To add a background video for the welcome screen (optional):** upload your MP4 into the same **public/images** folder, then tell Claude the file name in Step 5 (for example "use welcome.mp4 as the background video"). Keep videos under 5 MB so the site loads fast on phones.

## Step 5: Ask Claude to fill in your details

1. Go to [claude.ai/code](https://claude.ai/code) and log in.
2. The first time, Claude asks you to **connect GitHub**. Follow the prompt and click **Authorize** on the GitHub page that opens.
3. Because your repository is private, Claude also needs permission to see it. Open [github.com/apps/claude/installations/new](https://github.com/apps/claude/installations/new), choose your account, select **Only select repositories**, pick your wedding repository, and click **Install**.
4. Back on claude.ai/code, find the repository selector below the message box and choose your wedding repository.
5. Copy the message below, replace the example details with yours, paste it into the message box, and press Enter.

```text
Please personalize this wedding website with our details.

Couple: Aarav and Diya
Date: Saturday, December 12, 2026
Blessing line at the top: Shree Ganeshaya Namah
Quote: "Two souls, one heart"

Events:
1. Haldi, 10:00 AM, A morning of color and laughter. Photo: haldi.jpg
2. Wedding Ceremony, 12:30 PM, The sacred vows. Photo: wedding.jpg
3. Lunch, 1:30 PM Onwards, A feast for all our guests. Photo: lunch.jpg

Families:
- Groom's parents: Mrs. Kavita and Mr. Suresh Sharma. Message: request the pleasure of your company. Brother: Kabir Sharma
- Bride's parents: Mrs. Anjali and Mr. Rakesh Mehta. Message: bless this sacred union

Elders to honor: Late Shri Mohan Sharma and Late Smt. Leela Sharma. Photo: grandparents.jpg

Venue: The Grand Celebration Hall, Hall No. 2, Ground Floor, Connaught Place, New Delhi
Google Maps search: The Grand Celebration Hall New Delhi

Music: keep the current music
Footer line: With love from both families

I uploaded my photos to public/images. Please check that the website still builds, then tell me what you changed.
```

6. Claude reads the project, makes the changes, and checks that everything works. This takes a few minutes. If Claude asks you a question, just answer in plain English.
7. When Claude is done, you will see a summary of the changes. Click **Create PR**.

**Tip:** you don't have to fill in everything perfectly. Leave a part out and Claude will ask you, or keep the sample text for now and change it later.

## Step 6: Approve the changes and see them live

1. Go to your repository on GitHub and click the **Pull requests** tab at the top.
2. Click the pull request Claude just made.
3. **Preview before you approve:** after a minute, Vercel adds a comment with a **Visit Preview** link. Click it to see your updated site. Only this preview changes, not your live site.
4. Happy with it? Scroll down and click the green **Merge pull request** button, then **Confirm merge**.
5. Wait about one minute. Open your live site. Your details are now there.

Not happy? Go back to Claude in the same chat and say what to change, for example "make the Haldi time 11:00 AM". Claude updates the same pull request, and Vercel makes a fresh preview.

## Step 7: Share it

1. Open your live site on your phone and scroll through everything once.
2. Tap the sound button at the bottom right to check the music.
3. Copy the address and send it on WhatsApp. WhatsApp shows a preview card with your names.

Note: WhatsApp remembers previews. If you shared the link before adding your details, it may show the old preview for a while. Adding `?v=2` to the end of the link makes WhatsApp fetch a fresh one.

## Making more changes later

You can repeat Step 5 and Step 6 as many times as you like. Some things you can ask Claude:

- "Add a Sangeet event on December 11 at 7:00 PM, with the photo sangeet.jpg"
- "Change the colors to deep green and gold"
- "Use the video welcome.mp4 as the background of the welcome screen"
- "Turn off the background music"
- "Hide the elders section"
- "Add an RSVP button that opens WhatsApp with my number +91 98765 43210"
- "Use the photo couple.jpg for the WhatsApp preview image"

## Plan B: edit the details yourself (without Claude)

All the text on the site lives in one file. You can edit it on the GitHub website.

1. Open your repository on GitHub.
2. Click the **src** folder, then **wedding.config.ts**.
3. Click the pencil icon near the top right (**Edit this file**).
4. Change only the text inside the quote marks. For example, change `partner1: "Aarav",` to `partner1: "Rohan",`. Keep every quote mark, comma, and bracket in place.
5. To use your uploaded photos, change paths like `"/images/event-1.svg"` to `"/images/haldi.jpg"`. For a background video, put its path in the `video:` line, for example `video: "/images/welcome.mp4",`.
6. Click the green **Commit changes** button, then **Commit changes** again.
7. Wait one minute and refresh your live site.

If the site stops updating after an edit, a quote mark or comma is probably missing. See the next section.

## Something went wrong?

**My site did not change after I merged.**
Wait two minutes and refresh. On a phone, close the tab and open the link again. Still old? Go to your Vercel project and click **Deployments**. If the top one has a red **Error** label, see the next item.

**Vercel shows "Error" or "Build Failed".**
Something in the files has a mistake. Open claude.ai/code with your repository and say: "The Vercel build is failing. Please find and fix the problem." If you used Plan B, open `wedding.config.ts` again and check that every line still has its quote marks and comma at the end.

**A photo is not showing.**
The file name in the config must match the uploaded file exactly, including capital letters and the ending (`.jpg` is different from `.JPG` and `.jpeg`). Ask Claude: "The photo for Lunch is not showing, please fix it."

**The music does not play.**
Phones never play sound until the guest taps the screen. This is normal. On Android, guests see a welcome box and the music starts when they tap the button. On iPhone, music starts after the first tap or scroll. Guests can always use the sound button at the bottom right.

**The map shows the wrong place.**
Change the Google Maps search text to the exact name shown on Google Maps, plus the city. Ask Claude: "Set the map search to: Royal Orchid Banquets Jaipur" (using your venue and city).

**I can't find my repository in Vercel or Claude.**
Both need permission to see private repositories. For Vercel, use **Adjust GitHub App Permissions** on the import page. For Claude, use [github.com/apps/claude/installations/new](https://github.com/apps/claude/installations/new). Add your wedding repository in both.

## Frequently asked questions

**Is it really free?**
Yes. GitHub and Vercel's Hobby plan are free for personal websites like this. Only the Claude Pro plan costs money, and Plan B lets you skip it.

**Can I use my own domain, like aaravweddsdiya.com?**
Yes. Buy the domain from any domain seller, then in your Vercel project go to **Settings**, then **Domains**, click **Add**, and follow the instructions Vercel shows.

**How long will my site stay online?**
As long as your GitHub and Vercel accounts exist. You can take it down any time from your Vercel project under **Settings**, **Advanced**, **Delete Project**.

**Can I use any song?**
Only use music you have the right to use. Free options include the [YouTube Audio Library](https://studio.youtube.com) (under **Audio library**) and [Pixabay Music](https://pixabay.com/music/). Download an MP3 and upload it as described in Step 4.

**Who can see my site?**
Anyone with the link. It is not listed anywhere, but people can share it onward, so avoid putting private phone numbers or home addresses on it unless you are comfortable with that.
