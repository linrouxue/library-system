<template>
    <div>
        <el-button
            size="small"
            @click="handleDelete(scope.$index, scope.row)"
            >
            添加用户
        </el-button>
        <el-table :data="filterTableData" style="width: 100%" class="box">
            <el-table-column label="借书证号" prop="readID" />
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="联系方式" prop="phone" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="搜索" />
            </template>
            <template #default="scope">
                <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >
                删除
                </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from 'vue'
import axios from 'axios'

onBeforeMount(() => {
  axios.post('http://localhost:3000/api')
    .then(response => {
    // 处理成功响应
    console.log(response.data);
    })
    .catch(error => {
    // 处理错误
    console.error('Error fetching data:', error);
    });
});
const search = ref('')
const filterTableData = computed(() =>
tableData.filter(
    (data) =>
    !search.value ||
    data.name.toLowerCase().includes(search.value.toLowerCase())
)
)
const handleDelete = (index,row) => {
    //删除读者信息
console.log(index, row)
}

const tableData = [
{
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
},
{
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
},
{
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
},
{
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
},
]
</script>
  
<style scoped>
.box {

}
</style> 
      