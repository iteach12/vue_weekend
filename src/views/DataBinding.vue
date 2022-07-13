<template>
  <div>
    <h2><mark>문자열 데이터 바인딩</mark></h2>
    <h3>Hello, {{ title }}</h3>
    <h3>{{ title.split('') }}</h3>
    <!-- 콧수염 안에는 단순히 데이터 이름만 들어가는 것이 아니라 자바스크립트 표현식도 이용할 수 있다. -->
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
    <input type="number" v-model.number="numberModel" />
    <h3>textarea v-model 사용</h3>
    <textarea v-model="message"></textarea>
    <h3>Select v-model 사용</h3>
    <select v-model="school">
      <option value="02">성북초</option>
      <option value="03">횡성초</option>
      <option value="064">서원초</option>
    </select>
  </div>
  <hr width="70%" color="gray" />
  <h3>checkbox => checked 속성 사용</h3>
  <p>
    체크박스에서는 v-model이 체크박스의 value 속성이 아닌 checked속성을 사용하기
    때문에, value속성에 데이터 바인딩을 하려면 v-model이 아닌 v-bind:value를
    사용해야 함.
  </p>
  <div>
    <label><input type="checkbox" value="서울" v-model="checked" /> 서울</label>
    <label><input type="checkbox" value="울산" v-model="checked" /> 울산</label>
    <label><input type="checkbox" value="부산" v-model="checked" /> 부산</label>
    <br />
    <span>체크한 지역 : {{ checked }}</span>
  </div>
  <hr />
  <h2>리스트 렌더링(v-for)</h2>
  <table>
    <thead>
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>카테고리</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr :key="i" v-for="(product, i) in productList">
        <td>{{ product.product_name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.delivery_price }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      title: 'Hello World !!!',
      htmlstring: '<p style="color:red;"> This is a red string.</p>',
      valueModel: 'South Korea',
      numberModel: 3,
      message: '이것은 텍스트 에어리어 입니다. v-model을 사용합니다.',
      school: '064',
      checked: [],
      productList: [
        {
          product_name: '무선마우스',
          price: 12000,
          category: '노트북/태블릿',
          delivery_price: 5000,
        },
        {
          product_name: '마우스패드',
          price: 18000,
          category: '악세서리',
          delivery_price: 3000,
        },
        {
          product_name: '기계식키보드',
          price: 22000,
          category: '키보드',
          delivery_price: 2000,
        },
        {
          product_name: '의자',
          price: 42000,
          category: '가구',
          delivery_price: 4000,
        },
      ],
    };
  },
};
</script>
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>
