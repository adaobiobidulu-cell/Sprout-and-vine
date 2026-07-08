import fs from 'fs'
import path from 'path'

/*
 * Changelog entries live as markdown files in content/changelog/, one per
 * entry (marketing site improvement brief 2.1). Adding a new .md file
 * publishes a new entry with no code change. No CMS, no dependencies:
 * frontmatter is three known keys and bodies are plain paragraphs, so a
 * small hand parser beats pulling in gray-matter + a markdown pipeline.
 *
 * File format:
 *   ---
 *   date: 2026-07-02
 *   title: Smart Pickup photo flow shipped
 *   image: /changelog/pickup.png   (optional, one screenshot max)
 *   ---
 *   Plain paragraphs separated by blank lines. 2 to 6 sentences.
 */

export interface ChangelogEntry {
  slug: string
  date: string // ISO yyyy-mm-dd
  title: string
  image?: string
  paragraphs: string[]
}

const CHANGELOG_DIR = path.join(process.cwd(), 'content', 'changelog')

export function getChangelogEntries(): ChangelogEntry[] {
  if (!fs.existsSync(CHANGELOG_DIR)) return []

  const entries: ChangelogEntry[] = []
  for (const file of fs.readdirSync(CHANGELOG_DIR)) {
    if (!file.endsWith('.md')) continue
    const raw = fs.readFileSync(path.join(CHANGELOG_DIR, file), 'utf8')
    const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
    if (!match) continue

    const front: Record<string, string> = {}
    for (const line of match[1].split('\n')) {
      const kv = line.match(/^(\w+):\s*(.+)$/)
      if (kv) front[kv[1]] = kv[2].trim()
    }
    if (!front.date || !front.title) continue

    entries.push({
      slug: file.replace(/\.md$/, ''),
      date: front.date,
      title: front.title,
      image: front.image,
      paragraphs: match[2]
        .split(/\n\s*\n/)
        .map(p => p.replace(/\s*\n\s*/g, ' ').trim())
        .filter(Boolean),
    })
  }

  return entries.sort((a, b) => b.date.localeCompare(a.date))
}
