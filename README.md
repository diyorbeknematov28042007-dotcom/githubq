# Yuristim landing page

Videodagi Yuristim konseptiga asoslangan responsive landing page. HTML/CSS/JS statik sayt; build va environment variable kerak emas.

## Lokal ko‘rish

```bash
python3 -m http.server 3000
```

`http://localhost:3000` ni oching. `file://` rejimi o‘rniga lokal serverdan foydalaning.

## Vercel manual deploy

GitHub reposini Vercel’ga import qiling. Framework Preset: **Other**, Root Directory: **/**, Build Command: bo‘sh, Output Directory: bo‘sh. Deploy qiling. Ulanmalar `https://yuristim.pp.ua`, `https://xizmatlar.yuristim.pp.ua` va `https://t.me/Yuristim_bot` ga yo‘naltirilgan.

`assets/hero.webp` foydalanuvchi yuborgan videodagi sahnadan kelib chiqib, matn va UI olib tashlangan rasm. `assets/reference.mp4` “Videoni tomosha” modalida ochiladigan asl referens video.
