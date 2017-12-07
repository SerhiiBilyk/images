import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './header.scss';
import PropTypes from 'prop-types';
import TreeWrapper from '../tree/tree.jsx';
import Navigation from '../../components/navigation/navigation.jsx';
import {benchmark} from './benchmark.js';
//import Worker from './worker.js';

var arr = Array(9000000).fill(0);// 9 000 000
//const worker = new Worker();

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  clickHandler(e) {
    setTimeout(() => {
      //  worker.postMessage([arr])
    }, 0)

    console.log('Message posted to worker')
  }
  withoutWorker() {
    benchmark();
  //  var next = arr.map((elem, index) => elem + index)
    console.log(' end time')
  }
  render() {
    return (
      <header styleName='header'>
        <Navigation/>
        <div styleName='content'>
          
        </div>

        {/*WebWorker
          <TreeWrapper id={0}/>
          <p style={{'marginTop':'50px'}}>WebWorker test!</p>
          <button id='click' onClick={e => this.clickHandler(e)}>With Worker</button>
          <button onClick={e => this.withoutWorker(e)}>Without worker</button>
          */}

      </header>
    )
  }
}

export default CSSModules(Header, styles)
