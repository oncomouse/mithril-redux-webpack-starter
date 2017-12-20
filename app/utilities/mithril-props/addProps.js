const makeProps = function(vnode) {
    return Object.assign(
        {}
        , vnode.state.defaultProps || {}
        , vnode.attrs
    )
}
const newOninit = function(vnode, cb) {
    vnode.state.props = makeProps(vnode);
    cb(vnode)
}

const addProps = function(Component) {
    if(typeof Component.oninit === 'function') {
        Component._prepropsOninit = Component.oninit
        Component.oninit = newOninit(vnode,Component._prepropsOninit)
    } else if(
        Component.prototype
        && typeof Component.prototype.oninit === 'function'
    ) {
        Component.prototype._prepropsOninit = Component.prototype.oninit
        Component.prototype.oninit = newOninit(vnode, this._prepropsOninit)
    }
    return Component
}

export default addProps