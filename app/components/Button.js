import m from 'mithril'
import R from 'ramda'

// Tachyons is loaded:
const BUTTON_STYLE = '.f6.link.dim.br3.ba.ph3.pv2.mb2.dib'
export default class Button {
    oninit({ attrs, state }) {
        state.className = BUTTON_STYLE
        if(R.has('className', attrs)) {
            state.className += ` ${attrs.className}`
            attrs = R.dissoc('className', attrs)
        } else if(R.has('class', attrs)) {
            state.className += ` ${attrs.class}`
            attrs = R.dissoc('class', attrs)
        }
        const color = R.has('color', attrs) ? attrs.color : 'mid-gray'
        state.className += ` .${color}.b--${color}`
        attrs = R.dissoc('color', attrs)
    }
    view({ state, attrs, children }) {
        return m(`button${state.className}`, attrs, children)
    }
}