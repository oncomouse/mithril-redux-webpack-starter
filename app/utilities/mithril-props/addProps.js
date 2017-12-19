const addProps = function(Component) {
    if(typeof Component.oninit === 'function') {
        Component._prepropsOninit = Component.oninit
        Component.oninit = function(vnode) {
            vnode.state.props = Object.assign(
                {}
                , vnode.state.defaultProps || {}
                , vnode.attrs
            )
            Component._prepropsOninit(vnode)
        }
    } else if(
        Component.prototype
        && typeof Component.prototype.oninit === 'function'
    ) {
        Component.prototype._prepropsOninit = Component.prototype.oninit
        Component.prototype.oninit = function(vnode) {
            vnode.state.props = Object.assign(
                {}
                , vnode.state.defaultProps || {}
                , vnode.attrs
            )
            this._prepropsOninit(vnode)
        }
    }
    return Component
}

export default addProps