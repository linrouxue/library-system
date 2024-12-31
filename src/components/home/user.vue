<template>
    <div>
        <el-button
            size="small"
            @click="addUsers"
            >
            添加用户
        </el-button>
        <el-dialog v-model="dialogFormVisible" title="新增用户" width="500">
            <el-form :model="userForm">
            <el-form-item label="姓名" >
                <el-input v-model="userForm.Sname" autocomplete="off" />
            </el-form-item>
            <el-form-item label="联系方式" >
                <el-input v-model="userForm.Sphone" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="userForm.password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="角色">
                <el-radio-group v-model="userForm.role">
                    <el-radio value="user">user</el-radio>
                    <el-radio value="admin">admin</el-radio>
                </el-radio-group>
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
            <el-table-column label="借书证号" prop="RID" />
            <el-table-column label="姓名" prop="Sname" />
            <el-table-column label="联系方式" prop="Sphone" />
            <el-table-column label="密码" prop="password" />
            <el-table-column label="角色" prop="role" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="请输入借书证号/姓名" @input="filterTableData"/>
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
import { addUser, showUser, searchUser, deleteUser} from '@/utils/api.js';
import { ElMessage, ElMessageBox} from 'element-plus';
import { nanoid } from 'nanoid';

const userForm = reactive({
    RID: '',
    Sname: '',
    Sphone: '',
    // 设默认密码
    password: '123456',
    role: 'user'
})
let tableData = ref([])
onBeforeMount(() => {
    showUsers()
});
const showUsers = () => {
    showUser('/admin/showUser').then(res => {
        if(res.status===200){
            tableData.value = res.data
        }
    }).catch(err => {
        console.log(err);
    })
}
// 添加用户
let dialogFormVisible = ref(false)
const addUsers = () => {
    dialogFormVisible.value = true
    userForm.Sname = ''
    userForm.Sphone = ''
}
const comfirmAdd = () => {
    userForm.RID = nanoid(8)
    if(userForm.Sname === ''){
        ElMessage.error('请输入姓名');
        return
    }else{        
        addUser('/admin/addUser', userForm).then(res => {
            if(res.status===200){
                ElMessage.success(res.data.message);
                dialogFormVisible.value = false
                showUsers()
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
        searchUser(
            '/admin/searchUser',
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
    '确定删除该用户',
    '温馨提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      deleteUser('/admin/deleteUser', {
        RID: row.RID
        }).then(res => {
            if(res.status===200){
                ElMessage.success(res.data.message);
                showUsers()
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
      