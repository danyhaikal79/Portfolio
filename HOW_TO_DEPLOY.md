# How to Publish Your Portfolio on GitHub Pages

Hi Dany! Your portfolio is built. Follow these steps to put it on the internet for **FREE** using GitHub Pages. Your final URL will look like:

> `https://YOUR_USERNAME.github.io/portfolio/`

---

## STEP 1 — Create a GitHub account

1. Go to https://github.com/signup
2. Sign up with your email (use `danyhaikal79@gmail.com`)
3. Pick a **username** — keep it simple and professional. Suggestions:
   - `danyhaikal`
   - `danyhaikal-yahya`
   - `dhaikal`
4. Verify your email.

---

## STEP 2 — Install Git on your Windows PC

1. Download Git for Windows: https://git-scm.com/download/win
2. Install it with default options (just keep clicking "Next").
3. After installing, open **PowerShell** and check it works:
   ```powershell
   git --version
   ```
   You should see something like `git version 2.xx.x.windows.x`.

---

## STEP 3 — Tell Git who you are

Open PowerShell and run these (replace with your info):
```powershell
git config --global user.name "Dany Haikal"
git config --global user.email "danyhaikal79@gmail.com"
```

---

## STEP 4 — Create a new repository on GitHub

1. Log in to GitHub.com.
2. Click the **+** button (top-right corner) → **New repository**.
3. Fill in:
   - **Repository name:** `portfolio`
   - **Description:** "My personal engineering portfolio"
   - Set it to **Public**
   - ⚠️ **DO NOT** tick "Add a README file" — leave everything unchecked.
4. Click **Create repository**.

You'll see a page with commands. Keep that tab open — you'll need the URL.

---

## STEP 5 — Upload your portfolio

Open **PowerShell**, then run these commands one by one (copy-paste each line):

```powershell
cd "C:\Users\danyh\Documents\DANY PERSONAL\portfolio"
git init
git add .
git commit -m "First portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

🔁 **Replace `YOUR_USERNAME`** with the GitHub username you chose in Step 1.

The first time you push, GitHub will pop up a login window. Sign in with your GitHub account.

---

## STEP 6 — Turn ON GitHub Pages

1. Go to your repo on GitHub: `https://github.com/YOUR_USERNAME/portfolio`
2. Click **Settings** (top tab).
3. On the left sidebar, click **Pages**.
4. Under **Source**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **Save**.
6. Wait about 1–2 minutes. Refresh the page. You'll see:
   > "Your site is live at https://YOUR_USERNAME.github.io/portfolio/"

🎉 **Done!** Your portfolio is now LIVE on the internet.

---

## STEP 7 — Update your portfolio later

Anytime you want to change anything (add a new project, fix typo, etc.):

1. Edit the files in this folder (`C:\Users\danyh\Documents\DANY PERSONAL\portfolio`).
2. Open PowerShell and run:
   ```powershell
   cd "C:\Users\danyh\Documents\DANY PERSONAL\portfolio"
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Wait 30–60 seconds → your live site updates automatically.

---

## OPTIONAL — Custom polish later

- Add real **screenshots** of your projects (poultry farm, RFID system, dashboards) → place them in a folder called `images/` and reference them in `index.html`.
- Add a **photo of yourself** in the hero section.
- Buy a custom domain like `danyhaikal.com` and point it to GitHub Pages.
- Add a **GitHub link** in the contact section once you've uploaded your project code.

---

## What's inside the portfolio folder

| File | What it does |
|---|---|
| `index.html` | The page itself (text, structure) |
| `style.css` | Colors, fonts, layout |
| `script.js` | Small animations & menu toggle |
| `resume_DanyHaikal.pdf` | Your downloadable resume |
| `HOW_TO_DEPLOY.md` | This guide |

If you ever feel stuck — just ask me and I'll guide you through.

Good luck, Dany 🚀
