import Header from './index.js'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    test: state,
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
