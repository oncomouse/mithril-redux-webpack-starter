import m from 'mithril'
import R from 'ramda'
import { bindActionCreators } from 'redux'
import { connect } from 'mithril-redux'
import { addProps } from '../utilities/mithril-props'
import * as SampleActions from '../actions/sampleActions'
import Sample from '../components/Sample'

const mapStateToProps = (state, ownProps) => ({
	samples: state.Samples
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: R.mergeAll([bindActionCreators(SampleActions, dispatch)])
})

class App {
	sampleEvent(ev) {
		ev.preventDefault()
		ev.stopPropagation()
		this.props.actions.sampleAction()
	}
	resetEvent(ev) {
		ev.preventDefault()
		ev.stopPropagation()
		this.props.actions.resetAction()
	}
	view(vnode) {
		const { state } = vnode
		return m(`.sans-serif.pa3`, {},
	        m(Sample, {
				samples: state.props.samples
				, sampleAction: this.sampleEvent.bind(state)
				, resetAction: this.resetEvent.bind(state)
			})
        )
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(addProps(App))
