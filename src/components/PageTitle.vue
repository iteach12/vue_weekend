<template>
  <h2 class="bg-blue-300">{{ title }}</h2>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '페이지 제목입니다.',
    },
  },
};
</script>
