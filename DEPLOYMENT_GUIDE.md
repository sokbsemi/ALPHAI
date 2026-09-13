# SOKB SEMICONDUCTOR — GitHub Pages Deployment Guide
**Target Custom Domain:** `sokbsemi.in`  
**Repository Branch:** `main`

---

## 1. Pre-Configured Deployment Assets in This Codebase

Your project already contains all files required by GitHub Pages:
- **`CNAME`**: Pre-configured with `sokbsemi.in`.
- **`.nojekyll`**: Disables Jekyll processing so all assets and hidden directories (`.well-known/security.txt`) are published directly.
- **`404.html`**: Custom branded error page preventing default GitHub 404 errors.
- **`sitemap.xml` & `robots.txt`**: Production search engine registers with canonical domain links.
- **`.github/workflows/deploy.yml`**: Optional automated GitHub Actions workflow for zero-configuration CI/CD.

---

## 2. Push Code to Your GitHub Repository

If you have not yet pushed the repository to GitHub, run the following commands in your terminal:

```bash
cd "d:\Project SOKBSEMI"

# 1. Initialize git repository
git init -b main

# 2. Add all project files
git add .

# 3. Commit the codebase
git commit -m "feat: initial release of SOKB Semiconductor website with ATLAS-I launch"

# 4. Link your remote GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git

# 5. Push to GitHub
git push -u origin main
```

---

## 3. GitHub Pages Activation (Repository Settings)

1. Open your repository on GitHub: `https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>`
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Option A (Recommended - GitHub Actions)**: Under **Source**, select **GitHub Actions**. It will automatically trigger the included `.github/workflows/deploy.yml` workflow.
   - **Option B (Classic Branch)**: Under **Source**, select **Deploy from a branch**, set Branch to `main` and folder to `/(root)`, then click **Save**.
4. Under **Custom domain**:
   - Ensure `sokbsemi.in` is listed. GitHub will read the `CNAME` file automatically.
5. Check **Enforce HTTPS** (may take 10-30 minutes for Let's Encrypt SSL certificate issuance after DNS resolves).

---

## 4. DNS Configuration for `sokbsemi.in` (Registrar Settings)

Log in to your DNS provider (e.g. GoDaddy, Namecheap, Cloudflare, BigRock, etc.) and configure the following DNS records:

### A. Apex Domain Records (`sokbsemi.in`)
Add 4 `A` records pointing to GitHub's global Anycast IP addresses:

| Type | Name / Host | Value / Target | TTL |
|------|-------------|----------------|-----|
| `A`  | `@` (or blank) | `185.199.108.153` | 3600 (or Auto) |
| `A`  | `@` (or blank) | `185.199.109.153` | 3600 (or Auto) |
| `A`  | `@` (or blank) | `185.199.110.153` | 3600 (or Auto) |
| `A`  | `@` (or blank) | `185.199.111.153` | 3600 (or Auto) |

### B. Subdomain Record (`www.sokbsemi.in`)
Add a `CNAME` record to forward `www` traffic to your GitHub Pages address:

| Type    | Name / Host | Value / Target | TTL |
|---------|-------------|----------------|-----|
| `CNAME` | `www`       | `<YOUR-GITHUB-USERNAME>.github.io` | 3600 (or Auto) |

---

## 5. Post-Deployment Verification Checklist

- [ ] **HTTPS Enforcement**: Open `https://sokbsemi.in` and confirm the padlock icon appears with a valid TLS certificate.
- [ ] **Apex & Subdomain**: Verify both `https://sokbsemi.in` and `https://www.sokbsemi.in` resolve cleanly.
- [ ] **Flagship Launch**: Confirm `https://sokbsemi.in/product.html` displays the ATLAS-I launch dossier.
- [ ] **Security Disclosure**: Test that `https://sokbsemi.in/.well-known/security.txt` loads with the RFC 9116 security policy.
- [ ] **Custom 404**: Test `https://sokbsemi.in/invalid-path` and confirm the custom SOKB 404 page renders.
- [ ] **GIGW Controls**: Test IST clock, font size toggles (A- / A / A+), high contrast mode, and dark/light mode toggle.

---

## 6. 📌 Campaign Bookmark: SPARK™ Product Launch Timer

> [!IMPORTANT]
> **SPARK™ Launch Timer Script Details (`assets/js/spark-splash-timer.js`):**
> - **Event Target:** SEMICON India 2026 (14 September 2026, 00:00:00 IST — 20 September 2026, 23:59:59 IST)
> - **File Location:** [`assets/js/spark-splash-timer.js`](assets/js/spark-splash-timer.js)
> - **Activation Method:** Insert the following script tag directly before `</body>` in `index.html`:
>   ```html
>   <script src="assets/js/spark-splash-timer.js"></script>
>   ```
> - **Preview Bypass:** Append `?preview=spark` to test the overlay at any time prior to September 14.
> - **Auto-Expiry:** After 20 September 23:59:59 IST, the overlay is automatically suppressed without code redeployment.

