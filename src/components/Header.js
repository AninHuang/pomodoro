import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {
  render() {
    return (
      <SVGcontainer>
        <svg viewbox="0 0 800 400" className="svg">
          <SVGpath id="curve" fill="#50c6d8" d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z" />
        </svg>
      </SVGcontainer>
    );
  }
}

const SVGcontainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;

  a {
    text-decoration: none;
    margin: 0 10px;
  }
`;

const SVGpath = styled.path`
  transition: .1s;
`;
