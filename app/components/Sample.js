import m from 'mithril'
//import styles from '../stylesheets/components/Sample.scss'
// Tachyons is also loaded
const BUTTON_STYLE = '.f6.link.dim.br3.ba.ph3.pv2.mb2.dib'

export default class Sample {
    view(vnode) {
        const { attrs } = vnode
        return m(''
            , {}
            , m('ul'
                , {}
                , attrs.samples.map((sample, id) =>
                    m('li', { key: id }, m.trust(sample))
                )
            )
            , m(`button${BUTTON_STYLE}.dark-blue.b--dark-blue`
                , { onclick: attrs.sampleAction }
                , 'Click Me!'
            )
            , m(`button${BUTTON_STYLE}.ml2.mid-gray.b--mid-gray`
                , { onclick: attrs.resetAction }
                , 'Reset List'
            )
        )
    }
}