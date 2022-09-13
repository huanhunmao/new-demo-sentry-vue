<template>
  <div class="home">
    <span>{{ testData }}</span>
    <button @click="handleClick">test</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      testData: 'xxxxxx',
    }
  },
  created() {
    setTimeout(async () => {
      await testPpxxxxxx()
    })
  },
  methods: {
    handleClick() {
      //   await test()
      setInterval(async () => {
        // await testMethods()
      })
    },
  },
}
</script>
