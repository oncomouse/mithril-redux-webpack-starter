import PolyfilledPromise from 'promise-polyfill'

// To add to window
if (!window.Promise) {
    window.Promise = PolyfilledPromise
}

export default function loadPolyfills() {
    const fillFetch = () =>
        new Promise(resolve => {
            if ('fetch' in window) return resolve()

            require.ensure(
                []
                , () => {
                    require('isomorphic-fetch')

                    resolve()
                }
                , 'fetch'
            )
        })

    /*const fillIntl = () => new Promise((resolve) => {
		if ('Intl' in window) return resolve();

		require.ensure([], () => {
			require('intl');
			require('intl/locale-data/jsonp/en.js');

			resolve();
		}, 'Intl');
	});*/

    const fillCoreJs = () =>
        new Promise(resolve => {
            if (
                'startsWith' in String.prototype &&
				'endsWith' in String.prototype &&
				'includes' in Array.prototype &&
				'Symbol' in window &&
				'assign' in Object &&
				'keys' in Object
            )
                return resolve()

            require.ensure(
                []
                , () => {
                    require('core-js')

                    resolve()
                }
                , 'core-js'
            )
        })

    return Promise.all([
        fillCoreJs()
        , fillFetch()
    //, fillIntl()
    ])
}