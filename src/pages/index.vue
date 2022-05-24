<template>
  <div>
      <readFile @getData="getData"></readFile>
      <h3>内容标题:{{content.title}}</h3>
      <p>内容:{{content.content}}</p>
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
      content:''
    });
    const getData = (val) => {
      Data.value = val;
      console.log("子组件传回的值", val);
      content.content = '内容'
      // content.title = praseHTML(val);
      content.title = new DOMParser().parseFromString(val,"text/xml")
      console.log("转化为dom:",content.title);

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