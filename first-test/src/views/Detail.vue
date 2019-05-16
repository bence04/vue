<template>
  <div class="detail">
    <h1>This is an about page</h1>
    <DetailsComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DetailsComponent from '@/components/DetailsComponent.vue'; // @ is an alias to /src

@Component({
  components: {
    DetailsComponent,
  },
})
export default class Detail extends Vue {}
</script>
