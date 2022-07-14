<template>
  <h2 class="bg-blue-300">{{ title }} 동적으로 문자열 넣기</h2>
  <!-- <h2 class="bg-red-300">{{ numtest }} 동적으로 숫자 넣기</h2> -->
  <!-- <h2 class="bg-yellow-300">{{ booleantest }} 동적으로 불린 넣기</h2>
  <h2 class="bg-teal-300">{{ arraytest }} 동적으로 배열 넣기</h2>
  <h2 class="bg-violet-300">{{ objecttest }} 동적으로 객체 넣기</h2>
  <h2 class="bg-gray-300">{{ title }}</h2> -->
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.', // title값이 제시되지 않았을 때의 기본 값
    },
    // numtest: {
    //   type: Number,
    //   default: 10,
    // },
    // booleantest: {
    //   type: Boolean,
    //   default: true,
    // },
    // arraytest: {
    //   type: Array(),
    //   default: [1, 2, 3],
    // },
    // objecttest: {
    //   type: Object(),
    //   default: { greeting: 'Hello, World!' },
    // },
  },
};
</script>
