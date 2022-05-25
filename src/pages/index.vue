<template>
  <div>
      <readFile @getData="getData"></readFile>
      <h3>内容标题:{{content.title}}</h3>
      <p v-for="(c,index) in content.content" :key="index">内容:{{c}}</p>
  </div>
</template>

<script>
import { ref,reactive } from 'vue';
import readFile from '../services/readFile.vue';
import praseHTML from '../services/praseHTML';
export default {
    name:'index',
    components:{
      readFile
    },
  setup(props, contents) {
    const Data = ref([]);
    const content = reactive({
      title:'',
      content:[]
    });
    const getData = (val) => {
      Data.value = val;
      // console.log("子组件传回的值", val);
      let html = new DOMParser().parseFromString(val,"text/html");
      content.title = html.getElementsByTagName('title')[0].innerHTML;
      let summary = html.getElementsByClassName("lemma-summary")[0];
      let arrs =Array.from(summary.getElementsByClassName('para'));
      arrs.forEach((a,index) => {
        if(a.innerHTML.length>0){
          // content.content.push(a.innerHTML
          console.log(index,":",a.innerHTML)
        }
        });
      console.log("title:",content.title);
      content.content = typeof(val);
      console.log("转化为dom:",arrs);

    };
    return {
      Data,
      getData,
      content
    };
  },
}
</script>

<style>

</style>