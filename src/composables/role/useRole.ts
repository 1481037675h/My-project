// 封装增删改查的操作，不做细化
import { deleteApi } from "@/api/role";
import { AddRoleModel } from "@/api/role/RoleModel";
import { EditType } from "@/type/BaseEnum";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { FuncList } from "@/type/BaseType";
import useInstance from "@/hooks/useInstance";
export default function useRole(getList: FuncList) {
  const { global } = useInstance();
  //新增弹框的ref属性
  const addRef = ref<{ show: (type: string, row?: AddRoleModel) => void }>();
  //新增
  const addBtn = () => {
    addRef.value?.show(EditType.ADD);
  };
  //编辑
  const editBtn = (row: AddRoleModel) => {
    addRef.value?.show(EditType.EDIT, row);
  };
  //删除
  const deleteBtn = async (row: AddRoleModel) => {
    const cofirm = await global.$myconfirm("确定删除该数据吗?");
    if (cofirm) {
      let res = await deleteApi(row.roleId);
      if (res && res.code == 200) {
        //信息提示
        ElMessage.success(res.msg);
        //刷新列表
        getList();
      }
    }
  };
  return {
    addBtn,
    editBtn,
    deleteBtn,
    addRef,
  };
}
