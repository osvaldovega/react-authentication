import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavMenu from './NavMenu';
import { onUserLogout } from '../../actions';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onUserLogout,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMenu));