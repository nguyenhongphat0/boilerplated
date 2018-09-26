/**
 *
 * UserList
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
import makeSelectUserList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadUserList } from './actions';
import { Button, Card, Image, Header } from 'semantic-ui-react';

/* eslint-disable react/prefer-stateless-function */
export class UserList extends React.Component {
  componentDidMount() {
    this.props.loadUserList();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>UserList</title>
          <meta name="description" content="List of users" />
        </Helmet>
        <Header as="h1"><FormattedMessage {...messages.header} values={{d: this.props.userlist.length}} /></Header>
        <Card.Group>
          {this.props.userlist.map(u => 
            <Card key={u.id}>
              <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                <Card.Header>{u.name}</Card.Header>
                <Card.Meta>{u.company.name}</Card.Meta>
                <Card.Description>
                  {u.email} - {u.phone}
                </Card.Description>
              </Card.Content>
            </Card>
          )}
        </Card.Group>
      </div>
    );
  }
}

UserList.propTypes = {
  userslist: PropTypes.array,
  loadUserList: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  userlist: makeSelectUserList(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUserList: evt => dispatch(loadUserList())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userList', reducer });
const withSaga = injectSaga({ key: 'userList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserList);
