<template>
    <div>
        <el-button
            size="small"
            @click="addBooks"
            >
            添加书籍
        </el-button>
        <el-dialog v-model="dialogFormVisible" title="新增书籍" width="500">
            <el-form :model="BookForm">
            <el-form-item label="书名" >
                <el-input v-model="BookForm.Bname" autocomplete="off" />
            </el-form-item>
            <el-form-item label="作者" >
                <el-input v-model="BookForm.Author" autocomplete="off" />
            </el-form-item>
            <el-form-item label="出版社" >
                <el-input v-model="BookForm.Press" autocomplete="off" />
            </el-form-item>
            </el-form>
            <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="comfirmAdd">
                确定
                </el-button>
            </div>
            </template>
        </el-dialog>
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
import { ref, onBeforeMount,reactive} from 'vue'
import { addBook, showBook, searchBook, deleteBook} from '@/utils/api.js';
import { ElMessage, ElMessageBox} from 'element-plus';
import { nanoid } from 'nanoid';

const BookForm = reactive({
    BID: '',
    Bname: '',
    Author: '',
    Press: '',
})
let tableData = ref([])
onBeforeMount(() => {
    showBooks()
});
const showBooks = () => {
    showBook('/admin/showBook').then(res => {
        if(res.status===200){
            tableData.value = res.data
        }
    }).catch(err => {
        console.log(err);
    })
}
// 添加书籍
let dialogFormVisible = ref(false)
const addBooks = () => {
    dialogFormVisible.value = true
    BookForm.Bname = ''
    BookForm.Author = ''
    BookForm.Press = ''
}
const comfirmAdd = () => {
    BookForm.BID = nanoid(8)
    if(BookForm.Bname === ''){
        ElMessage.error('书名不能为空');
        return
    }else{
        addBook('/admin/addBook', BookForm).then(res => {
        if(res.status===200){
            ElMessage.success(res.data.message);
            dialogFormVisible.value = false
            showBooks()
        }
        }).catch(err => {
            console.log(err);
            ElMessage.error('添加失败');
        })
    }
}

// 搜索
let timeout = ref(null);
const filterTableData = () => {
    if (timeout.value) {
        clearTimeout(timeout.value);
    }
    timeout.value = setTimeout(() => {
        searchBook(
            '/admin/searchBook',
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

//删除读者信息
const handleDelete = (index,row) => {
    ElMessageBox.confirm(
    '确定删除该书籍',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      deleteBook('/admin/deleteBook', {
        BID: row.BID
        }).then(res => {
            if(res.status===200){
                ElMessage.success(res.data.message);
                showBooks()
            }
        }).catch(err => {
            console.log(err);
            ElMessage.error('删除失败');
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
.box {

}
</style> 
      