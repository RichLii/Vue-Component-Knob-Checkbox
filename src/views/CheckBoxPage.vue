<template>
  <div class="flex flex-col items-center justify-center h-full">
    <div class="flex flex-col border rounded mb-4 max-w-[400px] w-full">
      <span class="text-lg font-bold border-b py-2 px-2">多選</span>
      <div class="py-4 px-2">
        <check-box
          :option="option"
          v-model:value="value"
          class="mb-4 flex-wrap"
        />
        <span class="text-sm font-bold mb-2 block">你的選擇：</span>
        <div class="flex gap-2 text-sm font-bold flex-wrap">
          <span
            v-for="select in value"
            :key="select"
            class="ani-bounce px-2 py-1 rounded bg-gray-100"
            >{{ select }}</span
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col border rounded max-w-[400px] w-full">
      <span class="text-lg font-bold border-b py-2 px-2">單選</span>
      <div class="py-4 px-2">
        <check-box
          :option="singleOption"
          v-model:value="singleValue"
          class="mb-4"
        />
        <span class="text-sm font-bold mb-2 block">你的選擇：</span>
        <div class="flex text-sm font-bold">
          <span class="px-2 py-1 rounded bg-gray-100">{{
            singleValue ? '呷飽阿！' : '還沒拉！'
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import CheckBox from '@/components/CheckBox.vue'

export default {
  components: {
    CheckBox
  },
  setup () {
    const option = [
      {
        label: '蘋果',
        side: 'right',
        color: '#ef4444'
      },
      {
        label: '香蕉',
        side: 'right',
        color: '#fbbf24'
      },
      {
        label: '芭樂',
        side: 'right',
        color: '#84cc16'
      },
      {
        label: '橘子',
        side: 'right',
        color: '#f97316'
      }
    ]
    const singleOption = [
      {
        label: '今晚我想來點？',
        side: 'left',
        color: 'green'
      }
    ]
    const value = ref('')
    const singleValue = ref()

    return {
      value,
      singleValue,
      singleOption,
      option
    }
  }
}
</script>

<style scoped>
.ani-bounce {
  animation: Bounce 100ms forwards;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes Bounce {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
</style>
