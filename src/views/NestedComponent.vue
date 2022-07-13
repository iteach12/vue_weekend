<template>
  <div>
    <PageTitle :title="myTestTitle" />
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle';
export default {
  components: { PageTitle },
  data() {
    return {
      myTestTitle: '제 이름은 박상준입니다. VUE를 배우고 있지요.',
    };
  },
};
</script>
