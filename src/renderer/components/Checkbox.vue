<template>
    <div class="block-with-checkbox" :class="{ lock }">
        <input
            type="checkbox"
            @change="$emit('change', $event.target.checked)"
            :disabled="lock"
            class="checkbox" 
            :id="'cb'+_uid" />
        <label v-if="label" 
            :for="'cb'+_uid" 
            v-text="label"></label>
    </div>
</template>
<script>
export default {
  name: 'checkbox',
  computed: {
    val: {
      get() {
        return this.value;
      },
    }
  },
  props: {
    value: {
      type: Boolean
    },
    label: {
      type: String,
      default: ' '
    },
    lock: {
      type: Boolean,
      default: false
    }
  }
};
</script>