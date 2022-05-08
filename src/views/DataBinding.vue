<template>
  <h1>문자열 데이터 바인딩</h1>
  <h2>Hello, {{ title }}</h2>
  <p>중괄호 두개를 이용해서 데이터 삽입</p>
  <hr width="50%" color="gray" />
  <h1>raw HTML 데이터 바인딩</h1>
  <h2>{{ htmlstring }}</h2>
  <h2 v-html="htmlstring"></h2>
  <p>v-html 디렉티브(지시문)을 사용하여 입력.</p>
  <hr width="50%" color="gray" />
  <h1>Form 입력 데이터 바인딩</h1>
  <input type="text" v-model="valueModel" />

  <p>v-model 디렉티브(지시문)을 사용하여 입력.</p>
  <hr width="50%" color="gray" />
</template>
<script>
export default {
  data() {
    return {
      title: 'World',
      htmlstring: '<p style="color:red;"> This is a red string.</p>',
      valueModel: 'South Korea',
    };
  },
};
</script>
