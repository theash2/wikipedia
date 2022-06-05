<template>
  <div>
    <div id="searchcontainer">
      <el-input placeholder="请输入内容" v-model="searchInput" @change="print" clearable class="usernameInput"> </el-input>
      <el-button type="primary" icon="Search" @click="searchContent">搜索</el-button>
    </div>
    <p class="info">标题:{{ contents.title }}</p>
    <p class="info">简介:</p>
    <ol class="content">

      <li v-for="(c, index) in contents.content" :key="index">{{ c }}</li>
    </ol>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import readFile from "../services/readFile.vue";
import { Search } from '@element-plus/icons-vue'
import { SearchData } from '../services/apis';
export default {
  name: "index",
  components: {
    readFile,
    Search
  },
  data() {
    return {
      searchInput:'',
      bodyContent:''
    }
  },
  methods: {
    print(){
      console.log('print',this.searchInput)
    },
    searchContent(){
      SearchData({key:this.searchInput}).then((result) => {
        if(result){
            this.getContent(result);
        }else{
          alert('该词条暂未收录');
        }
      }).catch((err) => {
        
      });
    },
    getContent(string){
      let html = new DOMParser().parseFromString(string,"text/html");
      console.log('getContent',html);
      this.contents.title = html.getElementsByTagName('title')[0].innerHTML.replace("百度百科","");
      let summary = html.getElementsByClassName("lemma-summary")[0];
      let arrs =Array.from(summary.getElementsByClassName('para'));
      arrs.forEach((a,index) => {
        if(a.innerHTML.length>0){
          console.log(index,":",a.textContent)
          this.contents.content.push(a.textContent);
        }
        });
      console.log("title:",content.title);
      this.content[0].content = typeof(string);
      console.log("转化为dom:",arrs);
      
    },
    formatString(string){
    }
  },
  setup(props, contentsparams) {
    const Data = ref([]);
    const contents = reactive({
      title: "",
      content: [],
    });
    return {
      Data,
      contents,
    };
  },
};
</script>

<style>
.searchcontainer{
  width: 300px;
  height: auto;
}
.usernameInput{
  width: 50%;
}
.content{
  width: 80%;
  margin: 0px auto;
}
.info{
  text-align: left;
  margin-left: 20%;
}
</style>