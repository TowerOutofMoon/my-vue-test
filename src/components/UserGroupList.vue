<template>
  <div>
    <el-table :data="groupData" style="width: 100" :default-sort="{prop: 'groupId', order: 'ascending'}" :stripe="true">
      <el-table-column label="分组ID" prop="groupId" width=150></el-table-column>
      <el-table-column label="分组名称" prop="groupName" width=300
      :filters="[{ text: '管理员', value: 1 }, { text: '用户', value: 2 }]"
      :filter-method="filterGroupName"></el-table-column>
      <el-table-column label="用户列表">
        <template v-slot="{ row }">
          <!-- 选择展示的用户,并且按照id排序 -->
          <el-table :data="row.displayedUsers" :ref="'userTable_' + row.groupId"
          style="width: 100" 
          :default-sort="{prop: 'id', order: 'ascending'}"
          :stripe="true">
            <el-table-column label="用户名" prop="name"></el-table-column>
            <el-table-column label="邮箱" prop="email"></el-table-column>
            <el-table-column label="角色" prop="role"></el-table-column>
            <!-- 按照创建时间排序 -->
            <el-table-column label="创建时间" sortable prop="createdAt">
              <template v-slot="{ row: userRow }">
                {{ formatDateTime(userRow.createdAt) }}
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <el-pagination
            layout="prev, pager, next"
            :total="row.users.length"
            :page-size="3"
            @current-change="handleCurrentChange(row, $event)">
          </el-pagination>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>

import { mockUserGroupsResponse } from "../mockData.js";

export default {
  data() {
    return {
      groupData: [],
    };
  },
  mounted() {
    this.fetchUserGroups();
    // 初始展示第一页的用户
    this.groupData.forEach(group => {
      group.displayedUsers = this.getDisplayedUsers(group.users, 1);
    });
  },
  methods: {
    async fetchUserGroups() {
      try {
        // const response = await axios.get('/userGroups');
        const response = mockUserGroupsResponse;
        this.groupData = response.data;
      } catch (error) {
        console.error('错误:', error);
      }
    },
    // 处理页码变化事件
    handleCurrentChange(row, currentPage) {
      // 以行为单位进行处理，区分不同表格
      row.displayedUsers = this.getDisplayedUsers(row.users, currentPage);
    },
    // 获取显示的用户
    getDisplayedUsers(users, currentPage) {
      // 每页最多展示3条数据
      const pageSize = 3;
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return users.slice(startIndex, endIndex);
    },
    // 格式化打印日期
    formatDateTime(dateTime) {
      const date = new Date(dateTime);
      return date.toLocaleString();
    },
    // 分组筛选
    filterGroupName(value, row) {
      return row.groupId == value;
    }
  }
};

</script>

<style>

</style>
