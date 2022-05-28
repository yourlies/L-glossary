<template>
  <ul class="list-container">
    <li>
      <span>どうかしら</span>
    </li>
    <li>
      <span>彼氏</span>
    </li>
  </ul>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.list-container {
  margin: 0;
  padding: 0;
  border-radius: 3px;
  li {
    list-style: none;
    padding: 0;
    span {
      user-select: none;
      cursor: pointer;
      font-size: 14px;
      background-color: #555;
      padding: 6px 10px;
      display: flex;
      font-weight: bold;
      color: #fff;
      align-items: center;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  }
}
</style>
