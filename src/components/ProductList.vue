<template>
  <h1 class="title">产品列表</h1>
  <div class="product-list">
    <!-- 遍历后端的产品列表 -->
    <div v-for="product in products" :key="product.id" class="product-item">
      <h3>{{ product.name }}</h3>
      <p>价格(元): {{ product.price }}</p>
      <p>平均评分: {{ calculateAverageRating(product.reviews) }}</p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import { mockProductResponse } from '@/mockData';

export default {
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        // const response = await axios.get('/product');
        const response = mockProductResponse;
        this.products = response.data;
      } catch (error) {
        console.error('错误:', error);
      }
    },
    calculateAverageRating(reviews) {
      if (reviews.length === 0) {
        return '没有评论';
      }
      // 累加器
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      // 保留1位小数
      return (totalRating / reviews.length).toFixed(1);
    }
  }
};
</script>

<style>
.product-list {
  display: flex;
  flex-wrap: wrap;
}

.title {
  margin-bottom: 20px;
}

.product-item {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 300px;
}
</style>
