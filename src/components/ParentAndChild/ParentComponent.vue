<template>
  <div>
    <!-- 父组件的更新操作：updateUserList -->
    <ChildComponent :userList="userList" @updateUserList="fetchUserList" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue';
// import axios from 'axios';
import { mockUserGroupsResponse } from "../../mockData.js";

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      // 模拟数据
      userList: []
    };
  },
  mounted() {
    this.fetchUserList();
  },
  methods: {
    fetchUserList() {
      try {
        // const response = await axios.get('/userGroups');
        const response = mockUserGroupsResponse;
        this.userList = response.data;
      } catch (error) {
        console.error('错误:', error);
      }
    }
  }
}
</script>
