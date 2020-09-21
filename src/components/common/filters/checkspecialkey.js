function checkSpecialKey(str){
  var specialKey = "[`~!#$^&*()=|{}':;'\\[\\].<>/?~！#￥……&*（）——|{}【】‘；：”“'。，、？]‘'";
  for (var i = 0; i < str.length; i++) {
    if (specialKey.indexOf(str.substr(i, 1)) != -1) {
      return false;
    }
  }
  return true;
}

export function checkinput(value){
  if(!checkSpecialKey(value)){  //定义个方法判断return布尔值判断是否执行下一步操作
      return false  
  }else{return true}
}