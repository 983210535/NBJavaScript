import request from "../utils/service";

interface Login {
  j_username: string;
  j_password: string;
  type: string
}

interface MenuItem {
  name: string;
  path: string;
  code: string;
  url: string;
  isEnabled: number;
  children?: MenuItem[]
}

export const login = (params: Login) => {
  return request<number>({
    method: 'post',
    // url: 'api/mobile/login', // 汉口学院登录
    url: '/zd-admin/doLogin',
    params
  });
}

export const getMenu = () => {
  return request<MenuItem[]>({
    method: 'post',
    // url: 'api/mobile/login', // 汉口学院登录
    url: '/zd-admin/getMenu',
  });
}
