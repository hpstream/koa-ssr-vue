/* eslint-disable func-call-spacing */
/* eslint-disable no-unexpected-multiline */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// console.log(HelloWorld.data())
export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'Hello',
        component: HelloWorld
      }, {
        path: '/test',
        name: 'Test',
        component: () => import('@/components/Test')
      }
    ]
  })
}
