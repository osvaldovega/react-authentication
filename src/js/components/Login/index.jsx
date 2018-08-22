import { connect } from 'react-redux';
import {
  onSnackBarChange,
  validateUser
} from '../../actions';
import Login from './Login';


const mapStateToProps = (state) => ({
  error: state.login.error,
  isAuth: state.login.isAuth,
  isLoading: state.login.isLoading,
  snackBarStatus: state.login.snackBarStatus,
});

const mapDispatchToProps = {
  onSnackBarChange,
  validateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
