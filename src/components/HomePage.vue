<template>
  <div>
    <div class="text-left">
      <h1 class="text-3xl font-bold mb-8">使用說明</h1>
      <section class="mb-8">
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4 border-b pb-1">CheckBox</h2>
          <span>Custom Checkbox Component 使用說明</span>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">傳入值</h3>
          <span class="px-4 py-2 rounded text-xl bg-gray-100 font-bold"
            >option</span
          >
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">資料型別</h3>
          <span class="px-4 py-2 rounded text-xl bg-gray-100 font-bold"
            >Array</span
          >
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">參數</h3>
          <ul class="ml-4 list-disc grid gap-4">
            <li>
              <p class="text-md font-bold mb-1">label</p>
              <p>CheckBox Label 的文字內容</p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">side</p>
              <p class="mb-1">
                CheckBox 放置方位，目前提供
                <span class="highlight">left</span> 和
                <span class="highlight">right</span> 兩個屬性
              </p>
              <p>
                <span class="highlight">left </span>文字置於選框左方，<span
                  class="highlight"
                  >right </span
                >文字置於選框右方
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">color</p>
              <p>調整選框顏色，可填入任意顏色，資料型別為字串類型</p>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">使用方式</h3>
          <div class="bg-stone-100 rounded p-4 mb-4">
            <code>
              &lt;<span class="font-medium text-blue-400">check-box</span>
              :option="&lt;yourOption&gt;" v-model:value="&lt;yourValue&gt;"
              /&gt;
            </code>
          </div>
          <p class="mb-1">
            如果 option 內只有一筆資料，那回傳出來的值只會是
            <span class="highlight">true</span> 或
            <span class="highlight">false</span>
          </p>
          <p>
            如果 option 內有多筆資料，那回傳出來的值只會是
            <span class="highlight">Array</span>
          </p>
        </div>
      </section>
      <div class="bg-gray-100 h-2 mb-8"></div>
      <section>
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4 border-b pb-1">Knob</h2>
          <span>Custom Knob Component 使用說明</span>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">傳入值</h3>
          <span class="px-4 py-2 rounded text-xl bg-gray-100 font-bold"
            >option</span
          >
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">資料型別</h3>
          <span class="px-4 py-2 rounded text-xl bg-gray-100 font-bold"
            >Object</span
          >
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">參數</h3>
          <ul class="ml-4 list-disc grid gap-4">
            <li>
              <p class="text-md font-bold mb-1">size</p>
              <p>
                Knob 整體大小，資料型別<span class="highlight">Number</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">value</p>
              <p>
                Knob 進度條數值大小，資料型別<span class="highlight"
                  >Number</span
                >
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">min</p>
              <p class="mb-1">
                Knob 進度條最小值，資料型別<span class="highlight">Number</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">max</p>
              <p>
                Knob 進度條最大值，資料型別<span class="highlight">Number</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">offset</p>
              <p>
                Knob 進度條起使位置，資料型別<span class="highlight"
                  >Number</span
                >
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">strokeWidth</p>
              <p>
                Knob 進度條粗細，資料型別<span class="highlight">Number</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">textColor</p>
              <p>進度文字顏色，資料型別<span class="highlight">String</span></p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">innerColor</p>
              <p>內圈顏色，資料型別<span class="highlight">String</span></p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">tailColor</p>
              <p>
                下方軌道軸顏色，資料型別<span class="highlight">String</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">trackColor</p>
              <p>
                上方進度軸顏色，資料型別<span class="highlight">String</span>
              </p>
            </li>
            <li>
              <p class="text-md font-bold mb-1">showLabel</p>
              <p>
                是否顯示進度標籤，資料型別<span class="highlight">Boolean</span>
              </p>
            </li>
          </ul>
        </div>
        <div class="mb-8">
          <h3 class="text-xl font-bold mb-4 border-b pb-1">使用方式</h3>
          <div class="bg-stone-100 rounded p-4 mb-4">
            <code>
              &lt;<span class="font-medium text-blue-400">knob-element</span>
              :option="&lt;yourOption&gt; /&gt;
            </code>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.highlight {
  font-weight: bold;
  background: #f3f4f6;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin-left: 0.25rem;
}
</style>
