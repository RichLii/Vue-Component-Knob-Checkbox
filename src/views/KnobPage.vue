<template>
  <div class="">
    <div class="pg">
      <!-- size -->
      <div class="pg__container">
        <h2 class="pg__title">SIZE</h2>
        <div class="pb__block">
          <KnobElement :option="{ size: 40 }" />
          <KnobElement :option="{ size: 50 }" />
          <KnobElement :option="{ size: 60 }" />
        </div>
      </div>

      <!-- value -->
      <div class="pg__container">
        <h2 class="pg__title">VALUE</h2>
        <div class="pb__block mb-6">
          <KnobElement :option="{ value: 30 }" />
          <KnobElement :option="{ value: 40 }" />
          <KnobElement :option="{ value: 50 }" />
        </div>
        <div class="pb__block">
          <KnobElement :option="{ value: 5, min: 5 }" />
          <KnobElement :option="{ value: 87, min: 5, max: 100 }" />
          <KnobElement :option="{ value: 90, max: 90 }" />
        </div>
      </div>

      <!-- color -->
      <div class="pg__container">
        <h2 class="pg__title">COLOR</h2>
        <div class="pb__block mb-6">
          <KnobElement :option="{ trackColor: '#86efac' }" />
          <KnobElement :option="{ trackColor: '#fde047' }" />
          <KnobElement :option="{ trackColor: '#a5b4fc' }" />
        </div>
        <div class="pb__block mb-6">
          <KnobElement
            :option="{ tailColor: '#dcfce7', trackColor: '#4ade80' }"
          />
          <KnobElement
            :option="{ tailColor: '#fef9c3', trackColor: '#facc15' }"
          />
          <KnobElement
            :option="{ tailColor: '#e0e7ff', trackColor: '#818cf8' }"
          />
        </div>
        <div class="pb__block">
          <KnobElement
            :option="{
              textColor: '#166534',
              innerColor: '#bbf7d0',
              tailColor: '#dcfce7',
              trackColor: '#4ade80'
            }"
          />
          <KnobElement
            :option="{
              textColor: '#92400e',
              innerColor: '#fef08a',
              tailColor: '#fef9c3',
              trackColor: '#facc15'
            }"
          />
          <KnobElement
            :option="{
              textColor: '#3730a3',
              innerColor: '#c7d2fe',
              tailColor: '#e0e7ff',
              trackColor: '#818cf8'
            }"
          />
        </div>
      </div>

      <!-- width -->
      <div class="pg__container">
        <h2 class="pg__title">WIDTH</h2>
        <div class="pb__block">
          <KnobElement :option="{ strokeWidth: 15 }" />
          <KnobElement :option="{ strokeWidth: 30 }" />
          <KnobElement :option="{ strokeWidth: 60, showLabel: false }" />
        </div>
      </div>

      <!-- offset -->
      <div class="pg__container">
        <h2 class="pg__title">OFFSET</h2>
        <div class="pb__block">
          <KnobElement :option="{ value: 15, offset: 30 }" />
          <KnobElement :option="{ value: 30, offset: 45 }" />
          <KnobElement :option="{ value: 45, offset: 90 }" />
        </div>
      </div>

      <!-- change value -->
      <div class="pg__container">
        <h2 class="pg__title">CHANGE VALUE</h2>
        <div class="pb__block flex-col items-center">
          <knob-element :option="option" />
          <div class="flex">
            <button
              @click="option.value += 10"
              class="border-2 rounded active:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </button>
            <button
              @click="option.value = 30"
              class="border-2 rounded active:bg-gray-100 ml-4 px-1"
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import KnobElement from '@/components/KnobElement.vue'
export default {
  components: {
    KnobElement
  },
  setup () {
    const option = ref({
      value: 30
    })
    return { option }
  }
}
</script>

<style scoped>
.pg {
  display: flex;
  flex-direction: column;
}
.pg__container {
  margin-bottom: 4rem;
  overflow-x: auto;
}
.pg__title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.pb__block {
  display: flex;
  gap: 2rem;
}
@media screen and (min-width: 425px) {
  .pg {
    align-items: center;
  }
  .pg__container {
    overflow-x: visible;
  }
}
</style>
