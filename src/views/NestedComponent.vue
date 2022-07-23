<template>
  <div>
    <PageTitle
      :title="myTestTitle"
      :numtest="numTest"
      :booleantest="booleanTest"
      :objecttest="objectTest"
      @send-message="sendMessage"
      ref="pageTitle"
    />

    <ImageCard />
  </div>
</template>
<script>
import PageTitle from '../components/PageTitle';
import ImageCard from '../components/ImageCard';
export default {
  components: { PageTitle, ImageCard },
  mounted() {
    this.$refs.pageTitle.$refs.btn.click();
  },
  data() {
    return {
      myTestTitle: '제 이름은 박상준입니다. VUE를 배우고 있지요.',
      numTest: 37,
      booleanTest: false,
      objectTest: { greeting: 'world' },
    };
  },
};
</script>
