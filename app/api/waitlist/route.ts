import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile } from 'fs/promises'
import path from 'path'

const DB = path.join(process.cwd(), 'waitlist.json')

async function load(): Promise<string[]> {
  try {
    return JSON.parse(await readFile(DB, 'utf-8'))
  } catch {
    return []
  }
}

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Email non valida' }, { status: 400 })
  }

  const emails = await load()

  if (!emails.includes(email)) {
    emails.push(email)
    await writeFile(DB, JSON.stringify(emails, null, 2))
  }

  return NextResponse.json({ count: emails.length })
}

export async function GET() {
  const emails = await load()
  return NextResponse.json({ count: emails.length })
}
