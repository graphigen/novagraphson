#!/usr/bin/env node
const fs = require('fs')
const path = require('path')

const root = process.cwd()
const publicDir = path.join(root, 'public')
const cacheDir = path.join(root, '.next', 'public-cache')
const standalonePublic = path.join(root, '.next', 'standalone', 'public')

function dirHasFiles(dir) {
  try {
    const entries = fs.readdirSync(dir)
    return entries && entries.length > 0
  } catch {
    return false
  }
}

function copyRecursive(src, dest) {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry))
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

try {
  let source = null
  if (dirHasFiles(publicDir)) source = publicDir
  else if (dirHasFiles(cacheDir)) source = cacheDir

  if (!source) {
    console.warn('[ensure-public] No public source found (public/ or .next/public-cache)')
    process.exit(0)
  }

  try { fs.rmSync(standalonePublic, { recursive: true, force: true }) } catch {}
  copyRecursive(source, standalonePublic)
  console.log(`[ensure-public] Copied assets from ${path.relative(root, source)} to .next/standalone/public`)
} catch (e) {
  console.error('[ensure-public] Failed:', e.message)
  process.exit(0)
}


