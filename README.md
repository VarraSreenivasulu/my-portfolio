# Varra Sreenivasulu - Portfolio Website

A premium, single-page personal portfolio website built with HTML, CSS, and vanilla JavaScript. Designed with a modern, "creative-developer" aesthetic, featuring a bold monochrome red hero section and seamless scroll animations.

## Local Development
1. Clone this repository or open the folder in your code editor.
2. Open `index.html` in any web browser, or use an extension like **Live Server** in VS Code for a better development experience.

## How to Replace the Hero Video
1. The hero video is currently expected at `assets/hero.mp4` and its fallback poster image at `assets/hero.png`.
2. To use your own video, generate it using the prompt provided in `assets/hero-video-prompt.txt`.
3. Save the new video file as `hero.mp4` and place it inside the `assets/` folder, replacing the existing placeholder (if any).
4. If you have a corresponding poster image, save it as `hero.png` and place it in the same `assets/` folder. This image will act as a fallback if the video fails to load or before it starts playing.

## How to Deploy for Free

You can deploy this static website for free using **GitHub Pages** or **Vercel**.

### Option 1: GitHub Pages (Recommended)
1. Create a new public repository on GitHub (e.g., `varrasreenivasulu.github.io` or `portfolio`).
2. Upload all the files (including `index.html`, `css/`, `js/`, and `assets/`) to the repository.
3. Go to the repository **Settings** > **Pages**.
4. Under the "Build and deployment" section, select `Deploy from a branch` and choose the `main` or `master` branch.
5. Save, and within a few minutes, your site will be live at `https://[yourusername].github.io/` or `https://[yourusername].github.io/[repository-name]/`.

### Option 2: Vercel
1. Create a free account on [Vercel](https://vercel.com).
2. You can either link your GitHub repository (if you pushed the code there) or use the Vercel CLI to deploy directly from your local machine.
3. If using the Vercel Dashboard, click **Add New** > **Project** and import your GitHub repository.
4. Leave the default settings (Framework Preset: Other) and click **Deploy**.
5. Your site will be live on a Vercel subdomain instantly.

## Contact Form
The contact form is currently linked to a placeholder Formspree endpoint. To make it functional:
1. Sign up for a free account at [Formspree](https://formspree.io/).
2. Create a new form and copy the endpoint URL (e.g., `https://formspree.io/f/your_id`).
3. Open `index.html` and replace `action="https://formspree.io/f/xbjvroqv"` with your new Formspree URL.
