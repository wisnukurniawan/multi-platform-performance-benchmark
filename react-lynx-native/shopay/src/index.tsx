import '@lynx-js/react/debug'
import { root } from '@lynx-js/react'

import ProductGrid from './ProductGrid.js'

root.render(<ProductGrid />)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
