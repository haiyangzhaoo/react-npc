import React from 'react'
import styles from './index.less'

export default function Tag() {
	console.log(1111, styles)
  return (
    <div className={styles.tag}>
      <header className={styles.tagHeader}>Header</header>
      <div className={styles.tagBody}>
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
      </div>
      <footer className={styles.tagFooter}>Fotter</footer>
    </div>
  )
}
