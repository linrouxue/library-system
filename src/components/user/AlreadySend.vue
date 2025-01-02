<template>
    <div>
        <el-table :data="tableData" style="width: 100%" class="box" height='800'>
            <el-table-column label="图书ID" prop="BID" />
            <el-table-column label="书名" prop="Bname" />
            <el-table-column label="作者" prop="Author" />
            <el-table-column label="出版社" prop="Press" />
            <el-table-column label="借阅时间" prop="startTime" />
            <el-table-column align="right">
            <template #header>
            </template>
            <template #default="scope">
                <el-button
                size="small"
                type="primary"
                @click="backBook(scope.$index, scope.row)"
                >
                归还
                </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onBeforeMount,reactive} from 'vue'
import { showBackBook,userBackBook } from '@/utils/api.js';
import { ElMessage, ElMessageBox} from 'element-plus';
import moment from 'moment';

const UserBackForm = reactive({
    SID: '',
    BID: '',
    RID: '',
    startTime: '',
    endTime: null
})
let tableData = ref([])
onBeforeMount(() => {
    showBooks()
});
const showBooks = () => {
    let RID = JSON.parse(localStorage.getItem('info')).account
    showBackBook('/user/showBack',{RID:RID}).then(res => {
        if(res.status===200){
            tableData.value = res.data
        }
    }).catch(err => {
        console.log(err);
    })
}

// 归还书籍
const backBook = (index,row) => {
    ElMessageBox.confirm(
    '确定归还该书籍',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        userBackBook('/user/backBook',{SID:row.SID}).then(res => {
            if(res.status===200){
                ElMessage.success(res.data.message);
                showBooks()
            }
        }).catch(err => {
            console.log(err);
            ElMessage.error('归还失败');
        })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消操作',
      })
    })
}

</script>
    
<style scoped>
</style> 
              