#!/usr/bin/env node
// Apply brand palettes to partner pages under app/is-ortaklari/*/page.tsx
// - Only updates backgrounds, headings, paragraphs, and icon colors per provided palette
// - Keeps structure; aims for better contrast
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const BASE = path.join(ROOT, 'app', 'is-ortaklari')

const palettes = {
  'ahrefs': {
    lightBg: '#e6f0fa',
    headingOpen: '#003366',
    paraOpen: '#33475b',
    icon: '#0073e6',
    iconBgOpen: '#cce4ff',
  },
  'amazon-aws': {
    lightBg: '#fff7e6',
    headingOpen: '#663c00',
    paraOpen: '#7a5900',
    icon: '#ff9900',
    iconBgOpen: '#fff2cc',
  },
  'azure': {
    lightBg: '#e6f2fb',
    headingOpen: '#003c71',
    paraOpen: '#3a587a',
    icon: '#0078d4',
    iconBgOpen: '#cce6ff',
  },
  'bitrix24': {
    lightBg: '#e6f0d9',
    headingOpen: '#2b4a17',
    paraOpen: '#4d6b27',
    icon: '#4caf50',
    iconBgOpen: '#d6e9b7',
  },
  'cloudflare': {
    lightBg: '#fff6e1',
    headingOpen: '#a85400',
    paraOpen: '#805600',
    icon: '#f38020',
    iconBgOpen: '#fff0cc',
  },
  'google-analytics': {
    lightBg: '#fff3e0',
    headingOpen: '#bf5320',
    paraOpen: '#9f4623',
    icon: '#f26522',
    iconBgOpen: '#ffe6cc',
  },
  'google-cloud': {
    lightBg: '#f5f5f5',
    headingOpen: '#202124',
    paraOpen: '#5f6368',
    icon: '#4285f4',
    iconBgOpen: '#e0e0e0',
  },
  'iyzico': {
    lightBg: '#fbeaea',
    headingOpen: '#7a0000',
    paraOpen: '#4c0000',
    icon: '#e31e24',
    iconBgOpen: '#fcdcdc',
  },
  'jivochat': {
    lightBg: '#dbe9f8',
    headingOpen: '#1e4979',
    paraOpen: '#2a3e66',
    icon: '#3498db',
    iconBgOpen: '#bdd7f8',
  },
  'paypal': {
    lightBg: '#cce7ff',
    headingOpen: '#003087',
    paraOpen: '#175ab7',
    icon: '#009cde',
    iconBgOpen: '#cce7ff',
  },
  'salesforce': {
    lightBg: '#dce6f7',
    headingOpen: '#0070d2',
    paraOpen: '#345f99',
    icon: '#00a1e0',
    iconBgOpen: '#c6d9f9',
  },
  'semrush': {
    lightBg: '#fff3e6',
    headingOpen: '#b34700',
    paraOpen: '#7a4b00',
    icon: '#ff6600',
    iconBgOpen: '#ffe7cc',
  },
  'similarweb': {
    lightBg: '#dbeaff',
    headingOpen: '#1565c0',
    paraOpen: '#2e5599',
    icon: '#1565c0',
    iconBgOpen: '#c9ddff',
  },
  'stripe': {
    lightBg: '#d9eaff',
    headingOpen: '#0069f9',
    paraOpen: '#154ea2',
    icon: '#008cdd',
    iconBgOpen: '#c3dbff',
  },
  'unica': {
    lightBg: '#e6f0fa',
    headingOpen: '#003366',
    paraOpen: '#2c4b81',
    icon: '#003366',
    iconBgOpen: '#cde0f8',
  },
  'zendesk': {
    lightBg: '#e5f0b0',
    headingOpen: '#5c7a00',
    paraOpen: '#3e5500',
    icon: '#78a300',
    iconBgOpen: '#e5f0b0',
  },
  'zoho': {
    lightBg: '#f9e6e3',
    headingOpen: '#a42a1b',
    paraOpen: '#702019',
    icon: '#e94e1b',
    iconBgOpen: '#f4d8d5',
  },
}

function applyPalette(filePath, p) {
  let src = fs.readFileSync(filePath, 'utf8')
  // Light background patches
  src = src
    .replace(/bg-\[#.*?\](?!\/)/g, `bg-[${p.lightBg}]`)
    .replace(/bg-\[#.*?\]\/20/g, `bg-[${p.lightBg}]/20`)

  // Headings on light bg previously white
  src = src
    .replace(/className=\"([^\"]*?)text-white\/95([^\"]*?)\"/g, `className="$1text-[${p.headingOpen}]$2"`)
    .replace(/className=\"([^\"]*?)text-white(?!\/)([^\"]*?)\"/g, `className="$1text-[${p.headingOpen}]$2"`)

  // Paragraphs on light bg
  src = src.replace(/text-white\/[0-9]{2}/g, `text-[${p.paraOpen}]`)

  // Generic gray on brand sections to paraOpen
  src = src.replace(/text-gray-200/g, `text-[${p.paraOpen}]`).replace(/text-gray-100/g, `text-[${p.paraOpen}]`)

  // Icon blocks
  src = src
    .replace(/bg-orange-400/g, `bg-[${p.iconBgOpen}]`)
    .replace(/bg-orange-500/g, `bg-[${p.iconBgOpen}]`)
    .replace(/className=\"w-(?:8|10|16) h-(?:8|10|16) text-white\"/g, (m) => m.replace('text-white', `text-[${p.icon}]`))
    .replace(/CheckCircle className=\"([^\"]*?)text-(?:orange|white)[^\"]*\"/g, `CheckCircle className="$1text-[${p.icon}]"`)

  fs.writeFileSync(filePath, src, 'utf8')
}

function run() {
  const dirs = fs.readdirSync(BASE, { withFileTypes: true }).filter(d => d.isDirectory())
  for (const d of dirs) {
    const key = d.name
    if (!palettes[key]) continue
    const fp = path.join(BASE, key, 'page.tsx')
    if (!fs.existsSync(fp)) continue
    applyPalette(fp, palettes[key])
    console.log(`Applied palette for ${key}`)
  }
}

run()


