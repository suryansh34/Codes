import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='not-found-page'>
      <div className='not-found-orb not-found-orb-one' aria-hidden='true' />
      <div className='not-found-orb not-found-orb-two' aria-hidden='true' />
      <div className='not-found-grid' aria-hidden='true' />

      <div className='not-found-shell'>
        <div className='not-found-status'>
          <span className='status-dot' />
          Route unavailable
        </div>

        <div className='not-found-number' aria-hidden='true'>404</div>

        <h1 className='not-found-title'>Page not found</h1>
        <p className='not-found-copy'>
          The page you are looking for drifted into the void. Go back home and
          try a different route.
        </p>

        <div className='not-found-actions'>
          <Link className='not-found-button not-found-button-primary' to='/'>
            Return home
          </Link>
          <Link className='not-found-button not-found-button-secondary' to='/about'>
            Explore about
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound
