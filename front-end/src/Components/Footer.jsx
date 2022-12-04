import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className="footer fixed-bottom p-3">
        <section className="container">
          <h4 className='text-center'>Created BY Ahmad Elshowair { new Date().getFullYear() }</h4>
        </section>
      </footer>
    </>
  )
}
