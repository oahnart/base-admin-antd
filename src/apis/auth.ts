import { mainAxios } from "libs/axios";

/**change password props type */
interface changePasswordProps {
  oldPassword: string;
  newPassword: string;
}

export const changePasswordApi = (payload: changePasswordProps) => {
  return mainAxios.request({
    methodType: "POST",
    url: `/auth/change-password`,
    payload: payload,
    requiresToken: true,
  });
};

interface LoginProps {
  userName: string;
  password: string;
}

export const loginApi = (payload: LoginProps) => {
  return mainAxios.request({
    methodType: "POST",
    url: `/auth/login`,
    payload: payload,
  });
};
