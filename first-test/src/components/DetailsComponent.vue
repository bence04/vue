<template>
  <div class="details">
    <p @click="navigateBack()">&lt; back</p>
    details {{ selectedItemId }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import people from '../store/contacts';

@Component
export default class DetailsComponent extends Vue {
  private selectedItemId: number = -1;

  private created() {
    this.selectedItemId = +this.$route.query.id;

    this.$store.registerModule('contacts', people);
  }

  private navigateBack() {
    this.$router.push({ path: '/' });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
