import m from 'mithril'
// You can use CSS Modules if you prefer:
//import styles from '../stylesheets/components/Sample.scss'

export default class Sample {
    view(vnode) {
        const { attrs } = vnode
        return m(
            'div'
            , {}
            , m(
                'ul'
                , {}
                , attrs.samples.map((sample, id) =>
                    m('li', { key: id }, m.trust(sample))
                )
            )
            , m('button', { onclick: attrs.sampleAction }, 'Click Me!')
            , m('button', { onclick: attrs.resetAction }, 'Reset List')
        )
    }
}