import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from '@/pages/Home'
import Cate from '@/pages/Cate'
import CateAdd from '@/pages/Cate/Add'
import Tag from '@/pages/Tag'

export default function App()
{
  return (
    <React.Fragment>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/cate/add" component={CateAdd} />
          <Route path="/cate" component={Cate} />
          <Route path="/tag" component={Tag} />
        </Switch>
      </HashRouter>
    </React.Fragment>
  )
}
