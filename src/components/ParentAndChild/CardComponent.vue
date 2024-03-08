<template>
  <el-card>
    <p>Name: {{user.name}} </p>
    <p>Email: {{ user.email }}</p>
    <p>Role: {{ user.role }}</p>
  </el-card>
</template>

<script>
export default {
  props: {
    // 从 Child 中取 user 数据
    user: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
