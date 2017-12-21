import m from 'mithril'
import Button from '../components/Button'
//import styles from '../stylesheets/components/Sample.scss'

export default class Sample {
    view(vnode) {
        const { attrs } = vnode
        return m('div'
            , {}
            , m('ul'
                , {}
                , attrs.samples.map((sample, id) =>
                    m('li', { key: id }, m.trust(sample))
                )
            )
            , m(Button
                , { onclick: attrs.sampleAction, color: 'dark-blue' }
                , 'Click Me!'
            )
            , m(Button
                , { onclick: attrs.resetAction, class: 'ml2' }
                , 'Reset List'
            )
        )
    }
}