// Dependencies
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    width: 100%
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }

  .react-Slidy {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    background: #dcdcdc;
    min-height: 50px;
    position: relative;
  }
  .react-Slidy-prev, .react-Slidy-next {
    align-items: center;
    background: rgba(255, 255, 255, .8);
    bottom: 0;
    cursor: pointer;
    display: flex;
    height: 20%;
    justify-content: center;
    margin: auto 0;
    min-height: 56px;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: opacity 0.3s ease;
    width: 40px;
    z-index: 1;
  }
  @media screen and (max-width: 850px) {
    .react-Slidy-prev, .react-Slidy-next {
      display: none;
    }
  }
  .react-Slidy-next {
    border-radius: 10px 0 0 10px;
    right: 0;
  }
  .react-Slidy-next::after {
    margin-right: 6px;
    transform: rotate(45deg);
    border-right: 3px solid #aaa;
    border-top: 3px solid #aaa;
    content: '';
    display: inline-block;
    height: 24px;
    width: 24px;
  }
  .react-Slidy-prev {
    border-radius: 0 10px 10px 0;
    left: 0;
  }
  .react-Slidy-prev::after {
    margin-left: 6px;
    transform: rotate(-135deg);
    border-right: 3px solid #aaa;
    border-top: 3px solid #aaa;
    content: '';
    display: inline-block;
    height: 24px;
    width: 24px;
  }
  .react-Slidy:hover > span {
    opacity: 1;
  }
  .react-Slidy:hover > span[disabled] {
    opacity: 0.2;
  }
  .react-Slidy > div {
    font-size: 0;
    max-height: 100%;
    overflow: hidden;
    position: relative;
    transition: all 1s ease-in-out;
    white-space: nowrap;
    width: 100%;
  }
  .react-Slidy > div > ul {
    display: block;
    list-style: none;
    padding: 0;
    width: 100%;
    will-change: transform, transition-timing, transition-duration;
  }
  .react-Slidy > div > ul > li {
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 100%;
  }
  ${'' /* .react-Slidy > div img {
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    display: block;
    height: auto;
    pointer-events: none;
    width: 100%;
  } */}
`;
