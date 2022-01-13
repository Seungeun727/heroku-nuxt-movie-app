export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Headline } from '../..\\components\\Headline.vue'
export { default as Loader } from '../..\\components\\Loader.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MovieItem } from '../..\\components\\MovieItem.vue'
export { default as MovieList } from '../..\\components\\MovieList.vue'
export { default as Search } from '../..\\components\\Search.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
