import request from '@/utils/request'

export function getRoleInfo(pageNum, pageSize, data = {}) {
  return request({
    url: '/role/getAllRoles',
    method: 'get',
    params: {
      pageNum,
      pageSize,
      status: data.status,
      roleKey: data.roleKey,
      roleName: data.roleName
    }
  })
}

export function addRole(data) {
  return request({
    url: '/role/addRole',
    method: 'post',
    data: {
      roleKey: data.roleKey,
      roleName: data.roleName,
      status: data.status,
      menuIds: [],
      roleSort: data.roleSort
    }
  })
}

export function editStatus(roleId, status) {
  return request({
    url: '/role/changeStatus',
    method: 'post',
    data: {
      roleId,
      status
    }
  })
}

export function delRole(roleId) {
  return request({
    url: '/role/deleteRole/' + roleId,
    method: 'delete'
  })
}

export function editRole(data) {
  return request({
    url: '/role/updateRole',
    method: 'post',
    data: {
      menuIds: data.menuIds,
      roleName: data.roleName,
      roleKey: data.roleKey,
      roleId: data.roleId,
      status: data.status,
      roleSort: data.roleSort
    }
  })
}
