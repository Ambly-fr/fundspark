import React, { Suspense } from 'react'
import Page from './page'

export default function Layout() {
  return (
    <Suspense fallback={<div>loading...</div>}>
        <Page />
    </Suspense>
  )
}
