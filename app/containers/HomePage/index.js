import React                from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

/**
 * @class
 *
 * TODO Documentation
 */
export default class HomePage extends React.Component {
  render() {
    return (
      <section className="container--home">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <p>
          Foo Bar
        </p>
      </section>
    )
  }
}

