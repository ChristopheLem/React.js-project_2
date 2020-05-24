import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'

// Components
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

function Test() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Test/>, document.getElementById('app'))
