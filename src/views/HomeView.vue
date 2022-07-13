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
    <h1 :class="{bigname:(myname != 0), smallname:(myname == 0)}" class="bg-red-400">클래스 연습입니다.</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>문제내기</th>
        <th>구구단</th>
        <th>정답</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <button type="button" @click="randomGugu">문제내기</button>
        </th>
        <td>
          <p>
            {{gugudan}} X {{guguTimes}} = ?
          </p>
        </td>
        <td>
          <input type="text" v-model="myAnswer">
          <p v-if="guguAnswer == myAnswer" class="bg-red-300">정답입니다.</p>
          <p v-else class="bg-blue-300">틀렸습니다.</p>
          </td>
      </tr>
      <tr>
        <th></th>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data() {
    return {
      myname:'박상준',
      gugudan:2,
      guguTimes:1,
      guguAnswer:2,
      myAnswer:0,
    }
    
  },
  methods:{
    randomGugu(){
      this.gugudan = Math.ceil(Math.random()*9);
      this.guguTimes = Math.ceil(Math.random()*9);
      this.guguAnswer = this.gugudan * this.guguTimes;
      
    }

  }
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
