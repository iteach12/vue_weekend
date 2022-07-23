<template>
  <div>
    <h2 class="bg-blue-300">{{ title }} 동적으로 문자열 넣기</h2>
    <h2 class="bg-green-300">{{ numtest }} 숫자</h2>

    <h2 class="bg-yellow-300">{{ booleantest }} 동적으로 불린 넣기</h2>
    <h2 class="bg-teal-300">{{ objecttest }} 동적으로 객체 넣기</h2>
  </div>
  <button type="button" @click="childFunc" ref="btn" class="bg-teal-500">
    click
  </button>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
    },
    numtest: {
      type: Number,
    },
    booleantest: {
      type: Boolean,
      default: true,
    },
    objecttest: {
      type: Object,
      default: function () {
        return { greeting: 'hello' };
      },
    },
  },
  methods: {
    childFunc() {
      console.log('부모 컴포넌트에서 직접 발생시킨 이벤트');
    },
  },
};
</script>
