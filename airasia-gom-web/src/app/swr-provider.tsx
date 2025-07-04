'use client'

import { SWRConfig } from 'swr'
import { apiClient } from './lib/api'

export default function SWRProvider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig 
      value={{
        fetcher: (url: string) => apiClient.get(url),
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      {children}
    </SWRConfig>
  )
}