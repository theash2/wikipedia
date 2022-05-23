<template>
  <div>
      <p>读取文件</p>
    <div>
      <input type="file"  accept="" @change="beforeUpload" />
    </div>
  </div>
</template>


<script>
import { ref, toRefs } from "vue";
function readFile(file) {
  file = file.target.files[0];

  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsText(file,"utf-8");
    reader.onload = function (evt) {
      let data = evt.target.result; // 读到的数据
      resolve(data);
    };
  });
}
export default {
  name: "readFile",
  methods: {
    async beforeUpload(event) {
      const workbook = await readFile(event);
      return false;
    },
  },
  setup(props, { emit, attrs, slots }) {
    const msg = ref("子组件的msg数据");
    const beforeUpload = (event) => {
      const workbook = readFile(event)
        .then((val) => {
          emit("getUsersData", val);
          console.log("workbook", val);
          return false;
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return {
      msg,
      beforeUpload,
    };
  },
};
</script>

<style>
</style>