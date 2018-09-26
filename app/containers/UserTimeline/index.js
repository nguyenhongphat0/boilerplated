/**
 *
 * UserTimeline
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserTimeline from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class UserTimeline extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>UserTimeline</title>
          <meta name="description" content="Description of UserTimeline" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserTimeline.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usertimeline: makeSelectUserTimeline(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userTimeline', reducer });
const withSaga = injectSaga({ key: 'userTimeline', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserTimeline);
