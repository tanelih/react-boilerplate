import React  from 'react';
import styles from 'containers/App/styles.css';

/**
 * @class
 *
 * TODO Documentation
 */
export default class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

