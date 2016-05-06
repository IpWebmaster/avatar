import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../../actions/UserActions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import './login.css';

const styleBtn = {
  marginTop: 15,
};

export class LoginPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.actions.login({ name: e.target.elements[0].value });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className="login-wrapper">
          <Paper zDepth={2}>
            <div className="login">
              <div className="login__header">
                  Авторизация
              </div>
              <form className="login__form" onSubmit={::this.handleSubmit}>
                <TextField
                  name="phone"
                  className="formcontainer"
                  hintText="Введите телефон"
                  floatingLabelText="Телефон"
                  floatingLabelFixed
                  fullWidth
                  type="text"
                /><br />
                <TextField
                  name="passwor"
                  className="formcontainer"
                  hintText="Введите пароль"
                  floatingLabelText="Пароль"
                  floatingLabelFixed
                  fullWidth
                  type="password"
                />
                <RaisedButton
                  type="submit"
                  label="Вход"
                  style={styleBtn}
                  primary
                  fullWidth
                />
              </form>
            </div>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
