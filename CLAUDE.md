# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

**Development:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## Architecture Overview

This is a Nuxt 3 application for a custom lapel pins and coins business website. Despite the repo name "nuxt-wp", this is not actually connected to WordPress - it's a standalone Nuxt application with content management via Nuxt Content.

**Key Technologies:**
- Nuxt 3 with Vue 3 composition API
- Tailwind CSS v3 (@nuxtjs/tailwindcss ^6.8.0) for styling
- Nuxt Content for markdown-based content management
- Vuex for state management (legacy store pattern)
- Google Analytics integration via nuxt-gtag

**Content Structure:**
- `/content/pins/` - Markdown files for different pin types and categories
- `/content/coins/` - Markdown files for coin categories
- Content is rendered using Nuxt Content's document-driven approach

**Component Architecture:**
- Modular Vue components in `/components/`
- Page-level components use composition of smaller feature components
- Block-based content rendering via `BlockRenderer.vue` and `Block.vue`
- Quote system components for custom product pricing

**Store Pattern:**
- Uses Vuex 4 with classic module pattern in `/store/`
- Separate modules for different quote types (pin quotes, coin quotes, chain quotes)
- User preferences and cache versioning management

**Routing:**
- File-based routing with Nuxt 3
- Dynamic routes for pins and coins categories: `/pins/[...slug].vue` and `/coins/[...slug].vue`
- SEO redirects configured in `nuxt.config.ts` for legacy URLs

**Styling:**
- Custom Tailwind configuration with extended color palette
- Custom animations for marquee effects
- Typography and forms plugins enabled
- Inter font family via Google Fonts integration