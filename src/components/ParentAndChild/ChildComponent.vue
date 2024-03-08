<template>
  <div>
    <button @click="updateAllUsers">更新用户信息</button>
    <div v-for="group in userList" :key="group.groupId">
      <h2>{{ group.groupName }}</h2>
      <div v-for="user in group.users" :key="user.id">
        <CardComponent :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  // 子组件
  components: {
    CardComponent
  },
  props: {
    // 从 Parent 中取 userList数据
    userList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateAllUsers() {
      // 触发父组件中的更新操作
      this.$emit('updateUserList');
    }
  }
}
</script>
