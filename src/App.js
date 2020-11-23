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

export default function App()
{
  var vc = new VConsole()
  const cookies = {}
  document.cookie ? document.cookie.split(';').map(val => {
      cookies[val.split('=')[0]] = val.split('=')[1]
  }) : [];
  const language = cookies['language'] != undefined && cookies['language'] == 'true' ? 'zh_CN' : 'en_US'
  console.log(language, cookies)

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
