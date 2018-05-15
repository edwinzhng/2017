import React from 'react'
import { withPrefix } from "gatsby-link";

class Canvas extends React.Component {
  componentWillMount() {
    if(typeof window !== 'undefined') {
      const script = document.createElement("script");
      script.src = withPrefix('/js/particles.js');
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <canvas id='canvas'></canvas>
    );
  }
}

export default Canvas
