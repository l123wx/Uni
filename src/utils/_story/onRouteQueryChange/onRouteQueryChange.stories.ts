import { vueRouter } from 'storybook-vue3-router'
import type { StoryObj } from '@storybook/vue3'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import { onRouteQueryChange } from '../../onRouteQueryChange'

export default {
  title: 'OnRouteQueryChange',
}

export const TestComponent: StoryObj = {
  render: () => ({
    template: `
      <div> 当前路由地址：{{ route.fullPath }}</div>

      <router-view v-slot="{ Component, route }">
        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="list">
            <component :is="Component" :key="route.path"/>
          </keep-alive>
        </transition>
      </router-view>

      <router-link :to="'/?a=' + Math.random()">Index</router-link>
      <br/>
      <router-link :to="'/about?a=' + Math.random()">About</router-link>
      <br/>
      <button @click="handleClear">Clear Keep Alive Array</button>
    `,
    setup() {
      const router = useRouter()
      const route = useRoute()

      console.log(router)

      const list = ref(['About'])

      const handleClear = () => {
        list.value = []
        setTimeout(() => {
          router.push('/')
        })
      }

      return { router, route, handleClear, list }
    },
  }),
}

const Index = {
  name: 'Index',
  template: `
    <div>Index</div>
  `,
}

const About = {
  name: 'About',
  template: `
    <div>About</div>
  `,
  setup() {
    const route = useRoute()

    console.log(route)

    watch(() => route.fullPath, () => {
      console.log(123)
    })
    // onRouteQueryChange(() => {
    //   console.log(123)
    // }, { immediate: true })
  },
}

TestComponent.decorators = [
  vueRouter([
    {
      path: '/',
      component: Index,
    },
    {
      path: '/about',
      component: About,
    },
  ]),
]
