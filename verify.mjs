import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const html = await readFile(new URL('./public/index.html', import.meta.url), 'utf8')
assert.match(html, /^<!doctype html>/i)
assert.match(html, /<p>pages-demo-ready<\/p>/)
console.log('Pages demo asset verified')
