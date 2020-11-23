import React from 'react'
import { renderRoutes } from 'react-router-config'
import {HashRouter} from 'react-router-dom'
import {routes} from '@/assets/routes'
import {Provider} from 'react-redux'
import store from '@/store'
import 'antd/dist/antd.less'
import VConsole from 'vconsole'
import {IntlProvider} from 'react-intl'
import enUs from '@/assets/language/en_us'
import zhCn from '@/assets/language/zh_cn'
import Cookies from 'js-cookie'

export default function App()
{
  var vc = new VConsole()

  const language = Cookies.get('language') == 'true' ? 'zh_CN' : 'en_US'

  return (
    <Provider store={store}>
      <IntlProvider locale={language == 'zh_CN' ? 'zh' : 'en'} messages={language == 'zh_CN' ? zhCn : enUs}>
        <HashRouter>
          {renderRoutes(routes)}
        </HashRouter>
      </IntlProvider>
    </Provider>
  )
}
