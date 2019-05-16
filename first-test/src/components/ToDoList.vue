<template>
  <div class="todo">
    <h1>{{ msg }}</h1>
    <h3>{{ items.name }}</h3>
    <input type="text" v-model="newItem" @change="newElementAdd()">
    <div class="list">
      <div v-for="item in items" v-bind:key="item.id">
        <div @click="openDetails(item.id)">
          {{ item.id }} - {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ToDoListComponent extends Vue {
  @Prop() private msg!: string;
  private newItem: string = '';
  private items = {};

  private created() {
    this.$store.watch(
      (state, getters) => getters.todos,
      (newValue) => {
        this.items = newValue;
      });
  }

  private newElementAdd() {
    this.$store.dispatch('addNewItemAction', {name: this.newItem});
    this.newItem = '';
  }

  private openDetails(index: string) {
    this.$router.push({path: '/detail', query: { id: index}});
  }
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
