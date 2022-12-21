import http from '@/utils/http/request'
import { PageConfigProps } from '@/types/System/Form'
import { UserVO, ChangePwdAPIParams } from '@/types/Base/UserManagement'

// Find Data by Pagination
export const getUserList = (data: PageConfigProps) => http({
    url: '/user/list',
    method: 'post',
    data
  })

// Add a new user
export const addUser = (data: UserVO) => http({
    url: '/user',
    method: 'post',
    data
  })

// Update user
export const updateUser = (data: UserVO) => http({
    url: '/user',
    method: 'put',
    data
  })

// Delete user
export const deleteUser = (id: number) => http({
    url: '/user',
    method: 'put',
    data: {
      data: id
    }
  })

// Reset password
export const resetPassword = (id_list: number[]) => http({
    url: '/user/reset-pwd',
    method: 'post',
    data: {
      id_list
    }
  })

// Change password
export const changePassword = (data: ChangePwdAPIParams) => http({
    url: '/user/change-pwd',
    method: 'post',
    data
  })