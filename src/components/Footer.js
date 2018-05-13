import React from 'react'
import Ionicon from 'react-ionicons'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
       <a href='https://github.com/edwinzhng' target='_blank'>
        <Ionicon className="ionicon git" icon="logo-github" color="#fff" fontSize="40px"/>
       </a>
       <a href='https://linkedin.com/in/edwin-zhang/' target='_blank'>
        <Ionicon className="ionicon linkedin" icon="logo-linkedin" color="#fff" fontSize="40px"/>
       </a>
       <a href='mailto:edwinzhang64@gmail.com'>
        <Ionicon className="ionicon mail" icon="md-paper-plane" color="#fff" fontSize="40px"/>
       </a>
      </div>
    );
  }
}

export default Footer
