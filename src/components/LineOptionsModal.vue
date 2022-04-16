<template>
  <div class="lineOptionsModal">
    <button v-if="lineDown && employee != null" @click="showDowntimeEntryModal = true; $emit('closeLineOptionsModal')">End Downtime</button>
    <button>View Downtime Entries</button>
    <!-- <button v-if="employee == null">Working on line</button> -->
    <button @click="$emit('close-modal')">Close</button>
    <downtime-entry-modal v-if="showDowntimeEntryModal" v-bind:line="line" v-bind:employee="employee" @close-modal="closeDowntimeEntryModal"/>
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
  }
}
</script>

<style>
/* MODAL STUFF!!!!!!!!!!!!!!!!!! */
</style>