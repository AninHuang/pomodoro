import React, { Component } from 'react';

export default class SvgContainer extends Component {
  refCurve = React.createRef();

  state = {
    viewBox: '0 0 800 200',
    fillColor: '#C36742',
    path: 'M 800 100 Q 400 200 0 100 L 0 0 L 800 0 L 800 100 Z',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScoll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScoll);
  }

  onScoll = () => {
    let lastKnownScrollPosition = 0;
    let ticking = false;

    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        this.scrollEvent(lastKnownScrollPosition);
        ticking = false;
      });
    }

    ticking = true;
  }

  scrollEvent = (scrollPos) => {
    const defaultCurveValue = 200;
    const curveRate = 3;
    let curveValue;

    if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
      curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
      this.refCurve.current.setAttribute(
        'd',
        `M 800 100 Q 400 ${curveValue} 0 100 L 0 0 L 800 0 L 800 100 Z`,
      );
    }
  }

  render() {
    return (
      <div className="svg-container">
        <svg viewBox={this.state.viewBox} className="svg">
          <path ref={this.refCurve} id="curve" fill={this.state.fillColor} d={this.state.path} />
        </svg>
      </div>
    );
  }
}


// const SvgContainer = () => (
//   <div className="svg-container">
//     <svg viewBox="0 0 800 400" className="svg">
//       <path id="curve" fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z" />
//     </svg>
//   </div>
// );

// export default SvgContainer;
