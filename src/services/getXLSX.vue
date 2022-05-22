<template>
  <div>
    <div>
      <input type="file" accept=".xls,.xlsx" @change="beforeUpload" />
    </div>
  </div>
</template>


<script>
import XLSX from "xlsx";
import { ref, toRefs } from "vue";
function readXLSX(file) {
  file = file.target.files[0];
  let nameSplit = file.name.split(".");
  let format = nameSplit[nameSplit.length - 1];
  if (!["xlsx", "csv"].includes(format)) {
    return false;
  }
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = function (evt) {
      let data = evt.target.result; // 读到的数据
      let workbook = XLSX.read(data, { type: "binary" });
      const wsname = workbook.SheetNames[0]; // 取第一张表
      const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]); // 生成json表格内容
      resolve(ws);
    };
  });
}
export default {
  name: "getXLSX",
  methods: {
    async beforeUpload(event) {
      const workbook = await readXLSX(event);
      return false;
    },
  },
  setup(props, { emit, attrs, slots }) {
    const msg = ref("子组件的msg数据");
    const beforeUpload = (event) => {
      const workbook = readXLSX(event)
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