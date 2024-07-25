'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

import { subscribeGoogleTag } from './subscribeGoogleTag'

export const GTMInjection: React.FC = () => {
  const pathName = usePathname()
  useEffect(() => {
    subscribeGoogleTag(window, 'pageview')
  }, [pathName])

  return (
    <Script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WZ9CXZN5');`
      }}
      id="google-tag-manager-integration"
    />
  )
}
