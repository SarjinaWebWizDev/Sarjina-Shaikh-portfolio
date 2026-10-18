# Sarjina Shaikh – Portfolio

Plain HTML, CSS and JavaScript. No build step.

## 1. Open in VS Code
1. Unzip, then in VS Code choose File > Open Folder and pick this folder.
2. Accept the prompt to install **Live Server** (or install it from the Extensions panel).
3. Click **Go Live** in the bottom-right corner, or right-click `index.html` > Open with Live Server.

## 2. Push to GitHub
Create an empty repository on github.com (no README), then in the VS Code terminal:

    git init
    git add .
    git commit -m "Initial portfolio"
    git branch -M main
    git remote add origin https://github.com/SarjinaWebWizDev/sarjina-portfolio.git
    git push -u origin main

## 3. Deploy on Vercel
1. Go to vercel.com and sign in with GitHub.
2. Add New > Project, then import the `sarjina-portfolio` repository.
3. Framework Preset: **Other**. Leave Build Command and Output Directory empty.
4. Click **Deploy**. Every `git push` redeploys automatically.

## Files
- `index.html` – content
- `css/style.css` – styles and colours (variables at the bottom of the file)
- `js/main.js` – interactions and animation
- `assets/` – photo, certificates and `Sarjina_Resume.pdf` (replace it to update your resume)
