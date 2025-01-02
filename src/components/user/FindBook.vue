<template>
    <div>
        <el-table :data="tableData" style="width: 100%" class="box" height='800'>
            <el-table-column label="图书ID" prop="BID" />
            <el-table-column label="书名" prop="Bname" />
            <el-table-column label="作者" prop="Author" />
            <el-table-column label="出版社" prop="Press" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="请输入图书ID/书名" @input="filterTableData"/>
            </template>
            <template #default="scope">
                <el-button
                size="small"
                type="primary"
                @click="sendBook(scope.$index, scope.row)"
                :disabled="scope.row.status === '已被借阅'"
                >
                借阅
                </el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onBeforeMount,reactive} from 'vue'
import { userShowBook, userSearchBook, userSendBook} from '@/utils/api.js';
import { ElMessage, ElMessageBox} from 'element-plus';
import { nanoid } from 'nanoid';
import moment from 'moment';

const UserSendForm = reactive({
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
    userShowBook('/user/showBook').then(res => {
        if(res.status===200){
            tableData.value = res.data
        }
    }).catch(err => {
        console.log(err);
    })
}
// 搜索
let timeout = ref(null);
const filterTableData = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
        userSearchBook(
            '/user/searchBook',
            {
                search: search.value
            }
        ).then(res => {
            if (res.status === 200) {
                tableData.value = res.data;
            }
        }).catch(err => {
            console.log(err);
        });
    }, 1000);
};
const search = ref('')

// 借阅书籍
const sendBook = (index,row) => {
    ElMessageBox.confirm(
    '确定借阅该书籍',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
        UserSendForm.SID = nanoid(8)
        UserSendForm.BID = row.BID
        UserSendForm.RID = JSON.parse(localStorage.getItem('info')).account
        UserSendForm.startTime = moment().format('YYYY-MM-DD HH:mm:ss');
        userSendBook('/user/sendBook',UserSendForm).then(res => {
            if(res.status===200){
                ElMessage.success(res.data.message);
                showBooks()
            }
        }).catch(err => {
            console.log(err);
            ElMessage.error('借阅失败');
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
              