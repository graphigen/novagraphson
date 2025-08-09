#!/usr/bin/env node
/*
 Generate sitemap.xml by scanning Next.js app/ routes.
 - Includes every directory in app/ that contains a page.tsx
 - Excludes special files (layout.tsx, template.tsx, not-found.tsx, etc.)
 - Writes to public/sitemap.xml
*/
const fs = require('fs')
const path = require('path')

const PROJECT_ROOT = path.resolve(__dirname, '..')
const APP_DIR = path.join(PROJECT_ROOT, 'app')
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public')
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml')
const BASE_URL = 'https://novagraph.com.tr'

/** Walk app/ and collect route paths that contain page.tsx */
function collectRoutes(dir) {
  const routes = []
  function walk(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true })
    // If this directory contains page.tsx, compute its route
    const hasPage = entries.some((e) => e.isFile() && e.name === 'page.tsx')
    if (hasPage) {
      const rel = path.relative(APP_DIR, currentDir)
      const routePath = rel === '' ? '/' : `/${rel.replace(/\\/g, '/')}`
      routes.push(routePath)
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        // Skip Next.js special folders that don't represent routes by themselves
        const skipDirs = ['node_modules', '.next']
        if (skipDirs.includes(entry.name)) continue
        walk(path.join(currentDir, entry.name))
      }
    }
  }
  walk(dir)
  return Array.from(new Set(routes))
}

function formatDateISO(date = new Date()) {
  return date.toISOString().slice(0, 10)
}

function buildSitemapXml(routes) {
  const lastmod = formatDateISO()
  const lines = []
  lines.push('<?xml version="1.0" encoding="UTF-8"?>')
  lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
  routes
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
    .forEach((route) => {
      const loc = `${BASE_URL}${route}`
      const priority = route === '/' ? '1.0' : '0.8'
      const changefreq = route === '/' ? 'weekly' : 'monthly'
      lines.push('  <url>')
      lines.push(`    <loc>${loc}</loc>`)
      lines.push(`    <lastmod>${lastmod}</lastmod>`)
      lines.push(`    <changefreq>${changefreq}</changefreq>`)
      lines.push(`    <priority>${priority}</priority>`)
      lines.push('  </url>')
    })
  lines.push('</urlset>')
  return lines.join('\n')
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('app/ directory not found')
    process.exit(1)
  }
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR)
  }
  const routes = collectRoutes(APP_DIR)
  const xml = buildSitemapXml(routes)
  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8')
  console.log(`Sitemap generated with ${routes.length} routes at ${OUTPUT_FILE}`)
}

main()


