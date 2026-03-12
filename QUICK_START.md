# ⚡ Quick Start - Push & Deploy

## 1️⃣ Push ke GitHub

### Pilih salah satu cara:

#### **Cara A: SSH (Recommended)**

```bash
# 1. Setup SSH key (jika belum punya)
ssh-keygen -t ed25519 -C "your_email@example.com"

# 2. Add ke GitHub: https://github.com/settings/keys
# Copy isi dari ~/.ssh/id_ed25519.pub

# 3. Update remote
git remote set-url origin git@github.com:jualianz229/qa-website-ai.git

# 4. Push
git push -u origin main
```

#### **Cara B: Personal Access Token**

```bash
# 1. Generate token: https://github.com/settings/tokens
# Pilih: repo, workflow scopes

# 2. Push
git push -u origin main
# Saat diminta password, paste token Anda
```

---

## 2️⃣ Deploy ke Vercel

### Automatic (Recommended)

1. Buka https://vercel.com
2. Click **"New Project"**
3. Click **"Import Git Repository"**
4. Paste: `https://github.com/jualianz229/qa-website-ai`
5. Click **"Continue"**
6. Vercel auto-detect Next.js
7. Click **"Deploy"**

**Done!** Website Anda live dalam 2-3 menit ✨

### Manual (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

---

## 3️⃣ Verify Deployment

Setelah deploy selesai:

✅ Check production URL di Vercel dashboard
✅ Test homepage: `/`
✅ Test dashboard: `/dashboard`
✅ Test responsive di mobile

---

## 📊 Status Check

```bash
# Check git status
git status

# Check remote
git remote -v

# View commits
git log --oneline
```

---

## 🔄 Future Updates

Setiap kali Anda push ke main:

```bash
git add .
git commit -m "Your message"
git push origin main
```

Vercel otomatis build & deploy! 🚀

---

## 🆘 Troubleshooting

**Error: Authentication failed?**
- Gunakan SSH atau Personal Access Token
- Jangan gunakan password GitHub

**Build failed di Vercel?**
- Check logs di Vercel dashboard
- Run `npm run build` locally untuk debug

**Website tidak muncul?**
- Wait 2-3 minutes untuk build complete
- Refresh browser (Ctrl+Shift+R)
- Check Vercel deployment status

---

**Questions?** Check DEPLOYMENT.md untuk detail lebih lengkap.
