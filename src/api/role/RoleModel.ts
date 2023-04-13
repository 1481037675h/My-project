// 定义角色数据类型，和后端基本一致
export type AddRoleModel = {
  type: string; //新增：0，编辑：1
  roleId: string;
  roleName: string;
  remark: string;
};
//列表查询参数类型
export type ListParm = {
  roleName: string;
  currentPage: number;
  pageSize: number;
  total: number;
};
