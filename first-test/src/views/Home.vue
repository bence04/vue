<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDoListComponent msg="Test vue app"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ToDoListComponent from '@/components/ToDoList.vue'; // @ is an alias to /src

@Component({
  components: {
    ToDoListComponent,
  },
})
export default class Home extends Vue {}
</script>
