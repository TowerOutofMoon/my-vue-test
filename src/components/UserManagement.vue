<template>
  <div>
    <!-- 展示相关信息和操作按钮 -->
    <!-- 默认按日期降序排列 -->
    <el-table :data="userData" border style="width: 100%" :default-sort="{prop: 'registrationDate', order: 'descending'}">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="registrationDate" label="注册日期" sortable>
        <template v-slot="{ row }">{{ formatDate(row.registrationDate) }}</template>
      </el-table-column>
      <el-table-column label="状态">
        <!-- 简洁展示 status 的信息 -->
        <template v-slot="{ row }">
          <el-tooltip v-if="row" class="item" effect="dark" :content="getStatusText(row.status?.code)" placement="top">
            <span>{{ getStatusText(row.status?.code) }}</span>
          </el-tooltip>
        </template>
        <!-- <template v-slot="{ row }">{{ getStatusText(row.status.code) }}</template> -->
      </el-table-column>
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button size="mini" type="primary" @click="editUser(row)">编辑</el-button>
          <el-button size="mini" :type="row.status.code === 1 ? 'success' : 'warning'" 
          @click="toggleUserStatus(row)">{{ row.status.code === 0 ? '禁用' : '启用' }}</el-button>
          <el-button size="mini" type="danger" @click="deleteUser(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
import { mockUserRegisterResponse } from "../mockData.js";

export default {
  data() {
    return {
      userData: []
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      try {
        // const response = await axios.get('/userGroups');
        const response = mockUserRegisterResponse;
        this.userData = response.data.map(user => ({
          ...user,
          // 处理日期
          registrationDate: new Date(user.registrationDate)
        }));
        // 排序
        this.userData.sort((a, b) => b.registrationDate - a.registrationDate);
      } catch(error) {
          console.error('错误:', error);
        }
    },
    // 格式化日期
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    },
    // 更改状态
    toggleUserStatus(user) {
      user.status.code = user.status.code === 1 ? 0 : 1;
      const newStatus = user.status.code === 1 ? 'Active' : 'Inactive';
      // 模拟向后端发送更新请求
      axios.post('https://api.example.com/updateUser', { status: user.status })
        .then(response => {
          console.log(response);
          console.log(`更改用户 ${user.username} 的状态为 ${newStatus}`);
        })
        .catch(error => {
          console.error('修改用户状态失败:', error);
        });
    },
    // 获取状态文本
    getStatusText(statusCode) {
      return statusCode === 1 ? 'Active' : 'Inactive';
    },
    // 编辑用户
    editUser(user) {
      console.log('修改用户信息:', user);
    },
    // 删除用户
    deleteUser(user) {
        // 弹出对话框
        this.$confirm(`确认删除用户 ${user.username} 吗？`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(() => {
        // 模拟向后端发送删除请求
        axios.post('https://api.example.com/deleteUser', { id: user._id })
          .then(response => {
            console.log(response);
            console.log(`成功删除用户 ${user.username}`);

            // 删除成功后更新用户列表
            const index = this.userData.findIndex(u => u._id === user._id);
            if (index !== -1) {
              // 移除元素
              this.userData.splice(index, 1);
            }
          })
          .catch(error => {
            console.error('删除用户失败:', error);
          });
      })
      .catch(() => {
        console.log('取消删除');
      });
    }
  }
}
</script>