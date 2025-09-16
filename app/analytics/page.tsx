import { Suspense } from 'react'
import AnalyticsPage from '../../components/AnalyticsContent'

export default function Analyticspage() {
  return (
    <Suspense fallback={<div className='text-white text-center p-4'>Loading analytics...</div>}>
      <AnalyticsPage />
    </Suspense>
  )
}