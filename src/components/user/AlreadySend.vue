<template>
<el-table :data="filterTableData" style="width: 100%">
    <el-table-column label="借书证号" prop="readID" />
    <el-table-column label="图书ID" prop="bookID" />
    <el-table-column label="借书日期" prop="startTime" />
    <el-table-column label="还书日期" prop="endTime" />
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
</template>

<script setup>
import { computed, ref } from 'vue'


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
</style> 
            