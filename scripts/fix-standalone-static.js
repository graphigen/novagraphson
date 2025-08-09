#!/usr/bin/env node
// Ensure standalone server can serve static and public assets locally and in some hosts
const fs = require('fs')
const path = require('path')

const projectRoot = process.cwd()
const standaloneNextDir = path.join(projectRoot, '.next', 'standalone', '.next')
const targetStatic = path.join(standaloneNextDir, 'static')
const correctStaticTarget = path.join(projectRoot, '.next', 'static')
const altStaticTarget = path.join(projectRoot, '.next', 'standalone', 'static')
const rootNextDir = path.join(projectRoot, '.next')

function ensureSymlink(src, dest) {
  try {
    if (fs.existsSync(dest)) {
      const stat = fs.lstatSync(dest)
      if (stat.isSymbolicLink()) {
        const current = fs.readlinkSync(dest)
        if (current === src || path.resolve(path.dirname(dest), current) === src) {
          return
        }
        fs.unlinkSync(dest)
      } else {
        fs.rmSync(dest, { recursive: true, force: true })
      }
    }
    // Create relative symlink for portability
    const rel = path.relative(path.dirname(dest), src)
    fs.symlinkSync(rel, dest)
  } catch (e) {
    console.error(`[fix-standalone-static] Failed to link ${dest} -> ${src}:`, e.message)
    process.exitCode = 0 // don't block build
  }
}

// Ensure .next/standalone/.next exists with a production build
function copyRecursive(src, dest, excludeFn) {
  const stat = fs.statSync(src)
  if (excludeFn && excludeFn(src)) return
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const entry of fs.readdirSync(src)) {
      copyRecursive(path.join(src, entry), path.join(dest, entry), excludeFn)
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

try {
  const needCopy = !fs.existsSync(standaloneNextDir) || !fs.existsSync(path.join(standaloneNextDir, 'BUILD_ID'))
  if (needCopy && fs.existsSync(rootNextDir)) {
    // Clean and copy root .next (except the standalone subtree itself)
    try { fs.rmSync(standaloneNextDir, { recursive: true, force: true }) } catch {}
    copyRecursive(rootNextDir, standaloneNextDir, (p) => p.startsWith(path.join(rootNextDir, 'standalone')))
  }
} catch (e) {
  console.error('[fix-standalone-static] copying .next failed:', e.message)
}

// Link .next/standalone/.next/static -> .next/static (preferred) if missing
if (fs.existsSync(standaloneNextDir) && !fs.existsSync(targetStatic)) {
  if (fs.existsSync(correctStaticTarget)) {
    ensureSymlink(correctStaticTarget, targetStatic)
  } else if (fs.existsSync(altStaticTarget)) {
    ensureSymlink(altStaticTarget, targetStatic)
  }
}

// Optionally link public for some hosts expecting it under standalone root
const standalonePublic = path.join(projectRoot, '.next', 'standalone', 'public')
const projectPublic = path.join(projectRoot, 'public')
const publicCacheDir = path.join(projectRoot, '.next', 'public-cache')

// Refresh cache of public at build time
try {
  if (fs.existsSync(publicCacheDir)) {
    fs.rmSync(publicCacheDir, { recursive: true, force: true })
  }
  if (fs.existsSync(projectPublic)) {
    fs.mkdirSync(publicCacheDir, { recursive: true })
    // simple recursive copy
    const copyRecursive = (src, dest) => {
      const stat = fs.statSync(src)
      if (stat.isDirectory()) {
        fs.mkdirSync(dest, { recursive: true })
        for (const entry of fs.readdirSync(src)) {
          copyRecursive(path.join(src, entry), path.join(dest, entry))
        }
      } else {
        fs.copyFileSync(src, dest)
      }
    }
    copyRecursive(projectPublic, publicCacheDir)
  }
} catch (e) {
  console.error('[fix-standalone-static] public cache copy failed:', e.message)
}

// Ensure .next/standalone/public has actual files (no symlink) for maximum compatibility
try {
  if (fs.existsSync(standalonePublic)) {
    // remove existing file/symlink/dir
    try { fs.rmSync(standalonePublic, { recursive: true, force: true }) } catch {}
  }
  const source = fs.existsSync(projectPublic) ? projectPublic : (fs.existsSync(publicCacheDir) ? publicCacheDir : null)
  if (source) {
    const copyRecursive = (src, dest) => {
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
    copyRecursive(source, standalonePublic)
  } else {
    console.warn('[fix-standalone-static] No public directory found to copy')
  }
} catch (e) {
  console.error('[fix-standalone-static] public copy failed:', e.message)
}

console.log('[fix-standalone-static] Symlinks ensured.')


