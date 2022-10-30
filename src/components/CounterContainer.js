import { connect } from 'react-redux'
import * as actions from '../actions'
import Counter from './Counter'

const CounterContainer = props => <Counter { ...props } />

const mapStateToProps = state => ( { counter: state } )

export default connect( mapStateToProps, actions )( CounterContainer )