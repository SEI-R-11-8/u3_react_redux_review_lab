import React from 'react'

function Home() {
  return (
    <div className="home">
      <div>
        <h1>Best Vacation Spots</h1>
        <h2>
          Places to unwind
        </h2>
      </div>
      <div>
        <img
          style={{ display: 'block', maxWidth: '25%',  alignItems: 'center'}}
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          alt="hotel"
        />
      </div>
    </div>
  )
}

export default Home