export const validatePassword = () => {
  return (rule: any, value: string, callback: (arg0?: Error) => void) => {
    if (value.length < 6) {
      callback(new Error('密码不能少于6位'))
    } else {
      callback()
    }
  }
}
