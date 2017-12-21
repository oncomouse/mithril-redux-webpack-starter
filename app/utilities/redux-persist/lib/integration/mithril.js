import m from 'mithril' // eslint-disable-line import/no-unresolved

export default class PersistGate {
    oninit(vnode) {
        const { attrs } = vnode
        attrs.loading = attrs.loading || m(`div`)
    }
    oncreate(vnode) {
        this._unsubscribe = vnode.attrs.persistor.subscribe(
            this.handlePersistorState.bind(vnode)
        )
        this.handlePersistorState.apply(vnode)
    }
    onbeforeremove() {
        this._unsubscribe && this._unsubscribe()
    }
    view(vnode) {
        const { children, attrs, state } = vnode
        return m(`div`, {}, state.bootstrapped ? children : attrs.loading)
    }
    handlePersistorState() {
        const { persistor } = this.attrs
        const { bootstrapped } = persistor.getState()
        if (bootstrapped) {
            if (this.attrs.onBeforeLift) {
                Promise.resolve(this.attrs.onBeforeLift())
                    .then(() => this.state.bootstrapped = true)
                    .catch(() => this.state.bootstrapped = true)
            } else {
                this.state.bootstrapped = true
            }
            m.redraw()
            this._unsubscribe && this._unsubscribe()
        }
    }
}