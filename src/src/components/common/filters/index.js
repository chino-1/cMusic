export function formatcount1(count){
    if(count < 30000){
        return count
    }else{
        let ct = count.toString() // 直接调用slice不行，打印了接口的count数据类型发现是number，所以干脆转成字符串
        let str = ct.slice(0,ct.length-4)
        return `${str}万`
    }
}
export function formatcount2(count){
    if(count < 999){
        return count
    }else if(count > 999 && count <10000){
        return `999+`
    }else{
        return `1w+`
    }
}
//时间戳格式化为标准日期代码
function padLeftZero(str) {
    return ("00" + str).substr(str.length);
  }
  
  // 时间日期格式化
function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  
    let o = {
      "M+": date.getMonth() + 1,
      "d+": date.getDate(),
      "h+": date.getHours(),
      "m+": date.getMinutes(),
      "s+": date.getSeconds()
    };
  
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + "";
        fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
      }
    }
  
    return fmt;
  }
export function showDate(value) {
    let date = new Date(value * 1000);
    // return formatDate(date, "yyyy-MM-dd");
    return formatDate(date, "MM-dd");
}

//歌曲时间格式化
export function timeFormat(time) {
  let minu = 0;
  let sec = 0;
  time = Math.floor(time % 3600); //Math.floor 向下取整
  minu = Math.floor(time / 60);
  sec = Math.floor(time % 60);
  sec = sec < 10 ? '0' + sec : sec + '';
  minu = minu < 10 ? '0' + minu : minu + '';
  return minu + ':' + sec;
}