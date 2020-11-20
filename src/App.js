import React from 'react'
import { renderRoutes } from 'react-router-config'
import {HashRouter} from 'react-router-dom'
import {routes} from '@/assets/routes'
import {Provider} from 'react-redux'
import store from '@/store'
import 'antd/dist/antd.less'
import VConsole from 'vconsole'

export default function App()
{
  var vc = new VConsole()

  return (
    <Provider store={store}>
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  )
}
