'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { Grade, Subject, BookFormat } from '@/types'

const grades: Grade[] = ['Creche', 'Nursery', 'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6']
const subjects: Subject[] = ['English', 'Mathematics', 'Science', 'Social Studies', 'Religious Studies', 'Creative Arts', 'Physical Education', 'French', 'Computer Studies', 'Home Economics']
const formats: BookFormat[] = ['Textbook', 'Workbook', 'Storybook', 'Reference', 'Activity Book']

export default function ProductFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilters = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (value && value !== '') params.set(key, value)
    else params.delete(key)
    params.delete('page')
    router.push(`/shop?${params.toString()}`)
  }

  const clearAllFilters = () => router.push('/shop')

  const currentGrade = searchParams.get('grade') || ''
  const currentSubject = searchParams.get('subject') || ''
  const currentFormat = searchParams.get('format') || ''

  return (
    <aside className="card p-5 sticky top-28 space-y-5">
        <div className="flex items-center justify-between">
        <h3 className="font-semibold text-secondary-900">Filter</h3>
        <button onClick={clearAllFilters} className="text-sm text-primary-600 hover:text-primary-700">Clear all</button>
        </div>

      {/* Class (Grade) */}
        <div>
        <label className="block text-sm font-medium text-secondary-700 mb-1">Class</label>
        <div className="relative">
          <select
            value={currentGrade}
            onChange={(e) => updateFilters('grade', e.target.value)}
            className="w-full px-3 py-3 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white appearance-none"
          >
            <option value="">All Classes</option>
            {grades.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">▾</span>
          </div>
        </div>

      {/* Subject */}
        <div>
        <label className="block text-sm font-medium text-secondary-700 mb-1">Subject</label>
        <div className="relative">
          <select
            value={currentSubject}
            onChange={(e) => updateFilters('subject', e.target.value)}
            className="w-full px-3 py-3 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white appearance-none"
          >
            <option value="">All Subjects</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">▾</span>
          </div>
        </div>

      {/* Format */}
        <div>
        <label className="block text-sm font-medium text-secondary-700 mb-1">Format</label>
        <div className="relative">
          <select
            value={currentFormat}
            onChange={(e) => updateFilters('format', e.target.value)}
            className="w-full px-3 py-3 border border-secondary-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white appearance-none"
          >
            <option value="">All Formats</option>
            {formats.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-secondary-400">▾</span>
          </div>
        </div>
    </aside>
  )
} 