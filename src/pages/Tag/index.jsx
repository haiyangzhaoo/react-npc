import React from 'react'
import './index.less'

export default function Tag() {
  return (
    <div className="tag">
      <header className="tag-header">Header</header>
      <div className="tag-body">
        <div>Left</div>
        <div>Center</div>
        <div>Right</div>
      </div>
      <footer className="tag-footer">Fotter</footer>
    </div>
  )
}
