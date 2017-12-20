const makeProps = function(vnode) {
    return Object.assign(
        {}
        , vnode.state.defaultProps || {}
        , vnode.attrs
    )
}
const newOninit = function(cb) {
    return function(vnode) {
        vnode.state.props = makeProps(vnode)

        cb(vnode)
    }
}

const addProps = function(Component) {
    if(typeof Component.oninit === 'function') {
        Component._prepropsOninit = Component.oninit
        Component.oninit = newOninit(Component._prepropsOninit)
    } else if(
        Component.prototype
    ) {
        if(typeof Component.prototype.oninit === 'function') {
            Component.prototype._prepropsOninit = Component.prototype.oninit
            Component.prototype.oninit = newOninit(this._prepropsOninit)
        } else {
            Component.prototype.oninit = newOninit(function(){});
        }
    } else {
        throw new Error(`${Component} was not a valid Mithril component.`)
    }
    return Component
}

export default addProps