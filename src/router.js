import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QSideLink,
  QRouteTab,
  QTabs
} from 'quasar'

Vue.component('QLayout',QLayout)
Vue.component('QToolbar',QToolbar)
Vue.component('QToolbarTitle',QToolbarTitle)
Vue.component('QBtn',QBtn)
Vue.component('QIcon',QIcon)
Vue.component('QList',QList)
Vue.component('QListHeader',QListHeader)
Vue.component('QItem',QItem)
Vue.component('QItemSide',QItemSide)
Vue.component('QItemMain',QItemMain)
Vue.component('QSideLink',QSideLink)
Vue.component('QRouteTab',QRouteTab)
Vue.component('QTabs',QTabs)

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '/', component: load('Hello') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
