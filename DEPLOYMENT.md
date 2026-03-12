# 🚀 Deployment Guide - QA AI Indonesia

## GitHub Push Instructions

Karena authentication HTTPS tidak bisa digunakan, ikuti salah satu cara berikut:

### Option 1: Menggunakan SSH (Recommended)

1. **Generate SSH Key** (jika belum punya):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

2. **Add SSH Key ke GitHub**:
   - Buka https://github.com/settings/keys
   - Click "New SSH key"
   - Paste public key dari `~/.ssh/id_ed25519.pub`

3. **Update remote URL**:
```bash
git remote set-url origin git@github.com:jualianz229/qa-website-ai.git
```

4. **Push ke GitHub**:
```bash
git push -u origin main
```

### Option 2: Menggunakan Personal Access Token

1. **Generate Token**:
   - Buka https://github.com/settings/tokens
   - Click "Generate new token"
   - Select scopes: `repo`, `workflow`
   - Copy token

2. **Push dengan token**:
```bash
git push -u origin main
```
Saat diminta password, paste token Anda.

---

## Deploy ke Vercel

### Step 1: Connect GitHub Repository

1. Buka https://vercel.com
2. Click "New Project"
3. Click "Import Git Repository"
4. Paste: `https://github.com/jualianz229/qa-website-ai`
5. Click "Continue"

### Step 2: Configure Project

- **Project Name**: `qa-ai-indonesia` (atau nama lain)
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (default)
- **Output Directory**: `.next` (default)

### Step 3: Environment Variables (Optional)

Jika ada `.env` variables, tambahkan di sini. Untuk sekarang, skip.

### Step 4: Deploy

Click "Deploy" dan tunggu proses selesai (~2-3 menit).

---

## Hasil Deployment

Setelah deploy berhasil, Anda akan mendapat:
- **Production URL**: `https://qa-ai-indonesia.vercel.app` (atau custom domain)
- **Preview URLs**: Untuk setiap pull request

---

## Custom Domain (Optional)

1. Buka project di Vercel
2. Go to "Settings" → "Domains"
3. Add custom domain
4. Update DNS records sesuai instruksi Vercel

---

## Continuous Deployment

Setiap kali Anda push ke `main` branch:
- Vercel otomatis build dan deploy
- Preview URL untuk branches lain
- Production update untuk `main`

---

## Troubleshooting

### Build Error?
- Check `npm run build` locally
- Verify all imports are correct
- Check Node.js version compatibility

### Deployment Stuck?
- Check Vercel logs
- Verify GitHub connection
- Try redeploying from Vercel dashboard

---

## Next Steps

1. ✅ Push ke GitHub
2. ✅ Deploy ke Vercel
3. Setup backend API
4. Integrate AI services
5. Add authentication
6. Setup database

---

**Happy Deploying! 🎉**
