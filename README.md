# TFGrid App Registry Website

**Beautiful web interface for browsing TFGrid apps**

🌐 **Live**: [registry.tfgrid.studio](https://registry.tfgrid.studio)  
📦 **Data Source**: [tfgrid-studio/app-registry](https://github.com/tfgrid-studio/app-registry)

---

## Features

- 🎨 **Beautiful UI** - Modern, responsive design
- 🔍 **Search & Filter** - Find apps by name, tags, pattern, or status
- 📊 **Live Stats** - Total apps, official, and verified counts
- 📋 **App Cards** - Detailed information for each app
- 📱 **Mobile-Friendly** - Works on all devices
- 🚀 **Fast** - Static site generated with Astro
- 🔗 **API Endpoint** - JSON API at `/api/apps.json`

---

## Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[TailwindCSS](https://tailwindcss.com)** - Styling
- **GitHub Pages** - Hosting
- **GitHub Actions** - Auto-deployment

---

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## How It Works

1. **Fetches registry** from `app-registry/registry/apps.yaml` via GitHub raw URL
2. **Parses YAML** on the client side
3. **Renders app cards** with search and filtering
4. **Updates automatically** when app-registry is updated (cached for 1 hour)

---

## API Endpoint

**JSON API**: `https://registry.tfgrid.studio/api/apps.json`

Returns all apps in JSON format. Can be used by:
- `tfgrid-compose` CLI
- Third-party tools
- Custom integrations

Example response:
```json
[
  {
    "name": "tfgrid-ai-agent",
    "repo": "github.com/tfgrid-studio/tfgrid-ai-agent",
    "description": "AI coding agent with Qwen integration",
    "pattern": "single-vm",
    "status": "production",
    "version": "v0.9.0",
    "tags": ["ai", "coding", "development"],
    "type": "official"
  }
]
```

---

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch.

**Manual deployment:**
```bash
npm run build
# Upload dist/ to GitHub Pages
```

---

## DNS Configuration

Point `registry.tfgrid.studio` to GitHub Pages:

```
# CNAME record
registry.tfgrid.studio  →  tfgrid-studio.github.io
```

Or A records:
```
registry.tfgrid.studio  →  185.199.108.153
registry.tfgrid.studio  →  185.199.109.153
registry.tfgrid.studio  →  185.199.110.153
registry.tfgrid.studio  →  185.199.111.153
```

---

## Related Repositories

- **[app-registry](https://github.com/tfgrid-studio/app-registry)** - App registry data
- **[tfgrid-compose](https://github.com/tfgrid-studio/tfgrid-compose)** - CLI tool
- **[tfgrid-docs](https://github.com/tfgrid-studio/tfgrid-docs)** - Documentation
- **[tfgrid-www](https://github.com/tfgrid-studio/tfgrid-www)** - Marketing site

---

## License

Apache 2.0 License  
**Copyright 2025 ThreeFold**

