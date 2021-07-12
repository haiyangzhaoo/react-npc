import React from 'react'
import { renderRoutes } from 'react-router-config'
import styles from './index.scss'

export default function Cate(props) {
  console.log('cate', props)
  const {route} = props

  return (
    <div className={styles.cate}>
      <header>cate页面Header部的内容</header>
      {route.routes && renderRoutes(route.routes)}
	  <footer>cate页面Footer部的内容</footer>
    </div>
  )
}
