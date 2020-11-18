import React from 'react'
import { renderRoutes } from 'react-router-config'
import {HashRouter} from 'react-router-dom'
import {routes} from '@/assets/routes'
// http://test-sm-quark-vt.alibaba.net/c4c270bf23b7fc2147bfdd2355c7219c.html
export default function App()
{
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  )
}
