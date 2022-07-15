<template>
  <div>
    <h2 v-if="userSelect != ''">{{ selectedOptions }}가 선택되었습니다.</h2>
    <h2 v-else>아래의 옵션을 선택해 주세요.</h2>
    <select v-model="selectedOptions" @change="changeSelect">
      <option value="seoul">서울</option>
      <option value="jeju">제주</option>
      <option value="busan">부산</option>
      <option value="yongin">용인</option>
      <option value="wonju">원주</option>
    </select>
  </div>
  <table class="mg">
    <thead>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>취미</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(item, i) in items">
        <th>{{ item.name }}</th>
        <td>{{ item.age }}</td>
        <td>{{ item.hobby }}</td>
      </tr>
    </tbody>
  </table>
  <div class="flex flex-col m-10">
    <div class="m-4 border w-1/3">01</div>
    <div class="m-4">02</div>
    <div class="m-4">03</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: 'Jaden', age: 6, hobby: 'Painting' },
        { name: 'SangJun', age: 37, hobby: 'Programming' },
        { name: 'Yulim', age: 36, hobby: 'Reading books' },
        { name: 'Danial', age: 2, hobby: 'Crying' },
        { name: 'Popo', age: 34, hobby: 'Watching movies' },
        { name: 'Yolk', age: 20, hobby: 'Sleep' },
      ],
      selectedOptions: '',
      userSelect: '',
    };
  },
  methods: {
    changeSelect() {
      this.userSelect = this.selectedOptions;
    },
  },
};
</script>
<style></style>
