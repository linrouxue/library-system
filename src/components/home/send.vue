<template>
    <div>
        <el-table :data="tableData" style="width: 100%" class="box" height='800'>
            <el-table-column label="借书证号" prop="Rid" />
            <el-table-column label="姓名" prop="Sname" />
            <el-table-column label="图书ID" prop="BID" />
            <el-table-column label="书名" prop="Bname" />
            <el-table-column label="借阅日期" prop="startTime" />
            <el-table-column label="归还日期" prop="endTime" />
            <el-table-column align="right">
            <template #header>
                <el-input v-model="search" size="small" placeholder="借书证号/姓名/图书ID/书名" @input="filterTableData"/>
            </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { ref, onBeforeMount} from 'vue'
import { showSend, searchSend} from '@/utils/api.js';
import moment from 'moment';
let tableData = ref([])
onBeforeMount(() => {
    showSends()
});
const showSends = () => {
    showSend('/admin/showSend').then(res => {
        if(res.status===200){
            tableData.value = res.data;
            tableData.value.forEach(item => {
                item.startTime = moment(item.startTime).format('YYYY-MM-DD HH:mm:ss');
                item.endTime ? item.endTime = moment(item.endTime).format('YYYY-MM-DD HH:mm:ss'): null;
            })

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
        searchSend(
            '/admin/searchSend',
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

</script>
  
<style scoped>
.box {

}
</style> 
      