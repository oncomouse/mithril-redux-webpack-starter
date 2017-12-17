import m from 'mithril'
import {Provider} from 'mithril-redux'
import App from './containers/App'
import loadPolyfills from './utilities/loadPolyfills'
import PersistGate from './utilities/react-redux/lib/integration/mithril'
import configStore from './store/configStore'

const {store, persistor} = configStore();

const render = _ => {
	m.mount(document.body, {view: function () {
		return m(PersistGate, {persistor},
			m(Provider.init(store, m, App))
		)
	}})
};
loadPolyfills().then(render)

if (module.hot) {
	module.hot.accept(
		'reducers',
		_ => store.replaceReducer(combineReducers(require('./reducers')).default)
	);
    module.hot.accept();
}
