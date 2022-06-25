<template>
  <div class="flex gap-4">
    <label
      class="checkbox-container flex items-center gap-2 cursor-pointer"
      v-for="checkbox in options"
      :key="checkbox"
    >
      <input
        class="checkbox absolute opacity-0"
        type="checkbox"
        :value="checkbox.label"
        @input="emitValue($event)"
      />
      <span
        class="flex check-mark rounded-sm relative block order-1 bg-gray-200 w-6 h-6"
        :style="{
          '--bg-color': checkbox.color
        }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="text-white transition-transform"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
          />
        </svg>
      </span>
      <span class="text-[1.15rem]" :class="sideClass(checkbox.side)">
        {{ checkbox.label }}
      </span>
    </label>
  </div>
</template>

<script>
import { computed, toRef, ref } from 'vue'
export default {
  props: {
    option: {
      type: Array
    }
  },
  setup (props, context) {
    const options = toRef(props, 'option')
    const outPutArray = ref([])

    const emitValue = (event, id) => {
      const optionLength = options.value.length
      if (optionLength === 1) {
        context.emit('update:value', event.target.checked)
      }
      if (optionLength > 1) {
        if (event.target.checked) {
          outPutArray.value.push(event.target.value)
        } else {
          outPutArray.value = outPutArray.value.filter(
            (checkboxItem) => checkboxItem !== event.target.value
          )
        }
        context.emit('update:value', outPutArray.value)
      }
    }

    const sideClass = computed(() => {
      return function (side) {
        if (side === 'left') return { 'order-0': true }
        return { 'order-2': true }
      }
    })

    return {
      outPutArray,
      options,
      sideClass,
      emitValue
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
* {
  font-family: 'Noto Sans TC', sans-serif;
}
.checkbox-container:hover .check-mark {
  background: rgb(156 163 175);
}
.checkbox:checked + .check-mark {
  transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);
  background: var(--bg-color);
}
.check-mark svg {
  transform: scale(0);
}
.checkbox:checked + .check-mark svg {
  transform: scale(1);
}
</style>
