import React from 'react'
import { renderRoutes } from 'react-router-config'
import './index.scss'

export default function Cate(props) {
  console.log('cate', props)
  const {route} = props

  return (
    <div className="cate">
      Cate父级内容
      {route.routes && renderRoutes(route.routes)}
    </div>
  )
}
