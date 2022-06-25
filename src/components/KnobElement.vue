<template>
  <div class="relative w-fit h-fit">
    <svg
      :style="{ width: svgSize, height: svgSize }"
      class="-rotate-[90deg] rounded-full shadow-lg"
    >
      <circle
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="defalutOption.size"
        :stroke="defalutOption.tailColor"
        :stroke-width="formatStrokeSize"
        :fill="defalutOption.innerColor"
      />
      <circle
        ref="animate"
        :style="{
          '--end': progress,
          transform: `rotate(${defalutOption.offset}deg)`
        }"
        class="animation transition-[stroke-dasharray] duration-[1s] origin-center"
        :cx="svgSize / 2"
        :cy="svgSize / 2"
        :r="defalutOption.size"
        :stroke="defalutOption.trackColor"
        stroke-alignment="inner"
        :stroke-width="formatStrokeSize"
        :stroke-dasharray="progress"
        fill="none"
      ></circle>
    </svg>
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      v-show="defalutOption.showLabel"
    >
      <span
        class="font-bold"
        :style="{
          color: defalutOption.textColor,
          'font-size':
            ((defalutOption.size + defalutOption.strokeWidth / 2) / 100) * 3 +
            'rem'
        }"
        >{{ formatValueDom }}</span
      >
    </div>
  </div>
</template>

<script>
import { ref, toRef, computed, onMounted, watch } from 'vue'
export default {
  props: {
    option: { type: Object }
  },
  setup (props) {
    const animate = ref()
    const active = ref(false)
    const defalutOption = ref({
      size: 50,
      value: 20,
      min: 0,
      max: 100,
      offset: 0,
      strokeWidth: 10,
      textColor: 'black',
      innerColor: 'white',
      tailColor: '#f3f4f6',
      trackColor: '#3b82f6',
      showLabel: true
    })
    const option = toRef(props, 'option')

    const progressValue = computed(() => {
      return (
        (formatValue.value /
          (defalutOption.value.max - defalutOption.value.min)) *
        perimeter.value
      )
    })

    const formatValue = computed(() => {
      const temp = defalutOption.value.value - defalutOption.value.min
      if (temp > defalutOption.value.max) return defalutOption.value.max
      if (temp < 0) return 0
      return temp
    })

    const formatValueDom = computed(() => {
      const value = defalutOption.value.value
      return value < defalutOption.value.min
        ? defalutOption.value.min
        : value > defalutOption.value.max
          ? defalutOption.value.max
          : value
    })

    const formatStrokeSize = computed(() => {
      if (defalutOption.value.strokeWidth > defalutOption.value.size * 2) {
        return defalutOption.value.size * 2
      }
      if (defalutOption.value.strokeWidth < 0) return 0
      return defalutOption.value.strokeWidth
    })

    const svgSize = computed(() => {
      return (defalutOption.value.size + formatStrokeSize.value / 2) * 2
    })

    const perimeter = computed(() => {
      return defalutOption.value.size * 2 * Math.PI
    })

    const progress = computed(() => {
      return `${progressValue.value} 9999`
    })

    const setRealSize = () => {
      const temp =
        defalutOption.value.strokeWidth < 0
          ? 0
          : defalutOption.value.strokeWidth
      if (defalutOption.value.size > temp) {
        defalutOption.value.size = defalutOption.value.size - temp / 2
      } else {
        defalutOption.value.size =
          defalutOption.value.size - defalutOption.value.size / 2
      }
    }

    onMounted(() => {
      // 開場動畫結束監聽
      animate.value.addEventListener('animationend', () => {
        animate.value.classList.remove('animation')
      })
      // watch option
      watch(
        option,
        (nV) => {
          Object.assign(defalutOption.value, option.value)
          if (nV.size) setRealSize()
        },
        { immediate: true, deep: true }
      )
      setRealSize()
    })

    return {
      active,
      animate,
      svgSize,
      progress,
      perimeter,
      formatStrokeSize,
      defalutOption,
      formatValueDom
    }
  }
}
</script>
<style scoped>
.animation {
  --end: 0 9999;
  animation: slide 1s forwards;
}
@keyframes slide {
  from {
    stroke-dasharray: 0 9999;
  }
  to {
    stroke-dasharray: var(--end);
  }
}
</style>
