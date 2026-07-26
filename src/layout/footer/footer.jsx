import React from 'react'
import './__footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p className='footer__copyright'>©Copyright {year} Erik Mesen</p>
    </footer>
  )
}

