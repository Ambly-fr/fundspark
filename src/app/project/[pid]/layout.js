import React, { Suspense } from 'react'
import Page from './page'
import Loading from './loading'

export default function Layout({ params, children }) {

  return (
    <div>
        <Suspense fallback={<Loading/>}>
         {params.pid ? <Page params={params} /> : children}
        </Suspense>
    </div>
  )
}
