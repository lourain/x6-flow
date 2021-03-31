export const setCookie = (name, value, day = 0) => {
  if (day === 0) {
    document.cookie = `${name}=${escape(value)};`;
  } else {
    const expires = day * 24 * 60 * 60 * 1000; // ms
    document.cookie = `${name}=${escape(value)};Expires=${expires}`;
  }
};
export const getCookie = (name) => {
  const reg = RegExp(`${name}=([^;]+)`);
  const match = document.cookie.match(reg);
  return match && match[1];
};
export const delCookie = (name) => {
  setCookie(name, '', -1);
};
/**
 * 索引转化字母
 * @param {*} index 索引
 * @param {*} upcase 是否大写
 */
export const indexToWord = (index, upcase) => {
  const a = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
  const b = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  return upcase ? a[index] : b[index];
}


/**
 * 解析时间
 * @param date 时间对象
 * @param fullTime 是否显示全时间
 */
export const formateDate = (date, fullTime) => {
  if (!date) {
    return false;
  }
  const $date = new Date(date);
  const y = $date.getFullYear();
  const m = $date.getMonth() + 1;
  const d = $date.getDate() < 10 ? '0' + $date.getDate() : $date.getDate();
  const h = $date.getHours() < 10 ? '0' + $date.getHours() : $date.getHours();
  const mi = $date.getMinutes() < 10 ? '0' + $date.getMinutes() : $date.getMinutes();
  const s = $date.getSeconds() < 10 ? '0' + $date.getSeconds() : $date.getSeconds();

  const newDate = fullTime ? `${y}/${m}/${d} ${h}:${mi}:${s}` : `${y}/${m}/${d}`;
  return newDate;
};
/**
 * 表单校验字母数字下划线函数
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateCode = (rule, value, callback) => {
  const reg = /^[a-zA-Z_][0-9_a-zA-Z]+$/
  if (value === "") {
    callback(new Error("请填写CODE"));
  } else if (value.length > 20) {
    callback(new Error('字符不得多于20位'))
  } else if (!reg.test(value)) {
    callback(new Error("请输入字母数字或下划线组合（请以字母开头）"));
  } else {
    callback();
  }
};
/**
 * 表单校验非中文函数
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateChinese = (rule, value, callback) => {
  let r = /^[^\u4e00-\u9fa5]+$/;
  if (!value) {
    callback(new Error("请输入内容"));
  } else if (!r.test(value)) {
    callback(new Error("请输入英文或印尼文"));
  } else {
    callback();
  }
};
/**
 * 表单验证非空
 * @param {*} rule
 * @param {*} value
 * @param {*} callback
 */
export const validateEmpty = (rule,value,callback) =>{
  if(!value) {
    callback(new Error("请输入内容"));
  }else{
    callback();
  }
}
/**
 *
 * 应射状态名称
 * @param {*} status 状态码
 */
export const mapStateName = (status) => {
  let statusName;
  switch (Number(status)) {
    case 0:
      statusName = '未使用'
      break;
    case 1:
      statusName = '正式使用中'
      break;
    case 2:
      statusName = '测试使用中'
      break;
  }
  return statusName
}
/**
 * 折行
 * @param {string} str 指定的字符串
 * @return {number} 字符串长度
 */
export const breakLine = (str,num) => {
  let copyStr = str.split('')
  for (let i = 1; i < str.length; i++) {
    if(i % num == 0){
      copyStr.splice(i,0,'\n')
    }
  }
  return copyStr.join('');
}
