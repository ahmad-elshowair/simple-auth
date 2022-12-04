import React from 'react'

export const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="footer fixed-bottom p-3">
        <section className="container">
          <h4 className='text-center'>Created BY Ahmad Elshowair { date.getFullYear() }</h4>
        </section>
      </footer>
    </>
  )
}
