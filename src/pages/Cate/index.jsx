import React from 'react'
import { renderRoutes } from 'react-router-config'

export default function Cate(props) {
  console.log('cate', props)
  const {route} = props

  return (
    <>
      Cate父级内容
      {route.routes && renderRoutes(route.routes)}
    </>
  )
}
