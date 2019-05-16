<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="list">
      <ol>
        <li v-for="item in data" v-bind:key="item">{{ item }}</li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  private data = ['first', 'second', 'third', 'fourth'];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
