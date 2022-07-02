<template>
  <div>
  <h2><mark>문자열 데이터 바인딩</mark></h2>
  <h3>Hello, {{ title }}</h3>
  <p>중괄호 두개를 이용해서 데이터 삽입</p>
  </div>
  <div>
  <h2>raw HTML 데이터 바인딩</h2>
  <h3>{{ htmlstring }}</h3>
  <p>중괄호 두개를 이용하여 문자열로 입력</p>
  <h3 v-html="htmlstring"></h3>
  <p>v-html 디렉티브(지시문)을 사용하여 입력.</p>
  </div>
  <hr width="70%" color="gray" />
  <div>
  <h2>Form 입력 데이터 바인딩</h2>
  <p>v-model 디렉티브(지시문)을 사용하여 입력.</p>
  <h3>input type=text</h3>
  <input type="text" v-model="valueModel" />
  <h3>input type=number</h3>
  <p>이 경우 문자열이 아닌 숫자열로 관리됨.</p>
  <input type="number" v-model="numberModel">
  <h3>textarea v-model 사용</h3>
  <textarea v-model="message"></textarea>
  <h3>Select v-mode 사용</h3>
  <select v-model="school">
    <option value="02">성북초</option>
    <option value="03">횡성초</option>
    <option value="064">서원초</option>
  </select>
  </div>
  <hr width="70%" color="gray" />
</template>
<script>
export default {
  data() {
    return {
      title: 'World',
      htmlstring: '<p style="color:red;"> This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel:3,
      message:'이것은 텍스트 에어리어 입니다. v-model을 사용합니다.',
      school:"064",
    };
  },
};
</script>
