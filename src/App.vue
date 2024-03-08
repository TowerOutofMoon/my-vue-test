<template>
  <div id="app">
    <!-- 根据输入框内容动态绑定content -->
    <!-- <input v-model="content" placeholder="输入内容以查看页面变化" class="input-field"> -->
    <!-- <MyContainer :content="content"></MyContainer> -->
    <!-- <ProductList/> -->
    <!-- <UserGroupList/> -->
    <!-- <ParentComponent/> -->
    <UserManagement/>
  </div>
</template>

<script>
// import MyContainer from './components/MyContainer.vue'
// import ProductList from './components/ProductList.vue'
// import UserGroupList from './components/UserGroupList.vue'
// import ParentComponent from './components/ParentAndChild/ParentComponent.vue'
import UserManagement from './components/UserManagement.vue'

export default {
  name: 'App',
  components: {
    // MyContainer,
    // ProductList,
    // UserGroupList,
    // ParentComponent,
    UserManagement,
  },
  data() {
    return {
      content: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input-field {
  margin-bottom: 100px;
}
</style>
