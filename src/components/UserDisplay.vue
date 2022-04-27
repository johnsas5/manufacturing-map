<template>
  <div class="userDisplay">
    <svg height="20" width="20">
      <circle cx="10" cy="10" r="8" stroke="black" stroke-width="1" fill="lightgreen" />
    </svg>
    <span>{{dName}}</span>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class UserDisplay extends Vue {
  @Prop() readonly dName!: string;
}
</script>
<style>
  .userDisplay {
    display: flex;
    flex-direction: row;
    vertical-align: middle;
  }
  .userDisplay svg {
    padding-right: 10px;
  }
</style>