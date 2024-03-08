# 前端笔试项目

所有题目相关代码都在 /src/components 目录下，在 App.vue 中取消注释后启动服务器查看页面展示。

模拟的响应在 mockData.js 中查看。

## 题目和组件对应关系

### 题目一：MyContainer.vue

在 App.vue 中取消下列代码注释：
    
    <!-- <input v-model="content" placeholder="输入内容以查看页面变化" class="input-field"> -->
    <!-- <MyContainer :content="content"></MyContainer> -->
    // import MyContainer from './components/MyContainer.vue'
    components: {
    // MyContainer,
    },

### 题目二：ProductList.vue

在 App.vue 中取消下列代码注释：
    
    <!-- <ProductList/> -->
    // import ProductList from './components/ProductList.vue'
    components: {
    // ProductList,
    },

关键代码：
```javascript
calculateAverageRating(reviews) {
  if (reviews.length === 0) {
    return '没有评论';
  }
  // 累加器
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  // 保留1位小数
  return (totalRating / reviews.length).toFixed(1);
}
```

### 题目三：UserGroupList.vue

在 App.vue 中取消下列代码注释：
    
    <!-- <UserGroupList/> -->
    // import UserGroupList from './components/UserGroupList.vue'
    components: {
    // UserGroupList,
    },

关键代码：

```javascript
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
```

### 题目四：ParentAndChild -- ParentComponent.vue / ChildComponent.vue / CardComponent.vue

在 App.vue 中取消下列代码注释：
    
    <!-- <ParentComponent/> -->
    // import ParentComponent from './components/ParentAndChild/ParentComponent.vue'
    components: {
    // ParentComponent,
    },

需要修改 mockData.js 中 mockUserGroupsResponse 的内容，再点击更新按钮才能看到修改。

### 题目五：UserManagement.vue

在 App.vue 中取消下列代码注释：
    
    <!-- <UserManagement/> -->
    // import UserManagement from './components/UserManagement.vue'
    components: {
    // UserManagement,
    },

关键代码：
```javascript
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
          console.error('删除用户失败:', error);
        });
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
```

注：由于未实现后端接口，三个修改按钮点击后只在控制台输出信息。