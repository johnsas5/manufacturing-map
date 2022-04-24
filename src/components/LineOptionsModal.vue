<template>
  <div class="disableBackground">
    <div id="lineOptionsModal" class="modal" >
      <button v-if="lineDown && employee != null" @click="showDowntimeEntryModal = true; $emit('closeLineOptionsModal')">End Downtime</button>
      <button>View Downtime Entries</button>
    <!-- <button v-if="employee == null">Working on line</button> -->
      <button @click="$emit('close-modal')">Close</button>
      <downtime-entry-modal v-if="showDowntimeEntryModal" v-bind:line="line" v-bind:employee="employee" docId="null" @close-modal="closeDowntimeEntryModal"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import DowntimeEntryModal from "./DowntimeEntryModal.vue";
import { User } from '@firebase/auth';

@Component({
  components: {
    DowntimeEntryModal
  }
})
export default class LineOptionsModal extends Vue {
  @Prop() readonly line!: string
  @Prop() readonly lineDown?: boolean
  @Prop() readonly employee?: User | null

  showDowntimeEntryModal = false;

  closeDowntimeEntryModal() {
    this.showDowntimeEntryModal = false;
    this.$emit("close-modal");
  }
}
</script>

<style>
  textarea {
    font-size: 18pt;
  }
  .disableBackground {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0,0,0, 0.3);
  }
</style>