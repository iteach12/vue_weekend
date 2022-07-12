<template>
  <div class="home">
    <h3>VUE 연습</h3>
    <hr>
    <h4>안녕하세요. 제 이름은 {{myname}}입니다.</h4>
    <input type="text" v-model="myname">
    <p v-if="myname != 0"
    >0이 아닙니다. 다시 입력하세요.</p>
    <p v-else-if="myname == 0">0이 맞습니다.</p>
    <hr />
    <h1 :class="{bigname:(myname != 0), smallname:(myname == 0)}">클래스 연습입니다.</h1>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      myname:'박상준',
    }
    
  },
};
</script>
<style>
h3{
  font-size: xx-large;
  color:blueviolet;
}
.bigname{
  font-size: xx-large;
  color: aqua;
}
.smallname{
  font-size: smaller;
  color: yellow;
}
</style>
