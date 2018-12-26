// 函数节流
export default (func, delay = 200) => {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

// 将文件转成流
export const filetoDataURL = (file,fn) => {
  var reader = new FileReader();
  reader.onloadend = (e) => {
    fn(e.target.result);
  };
  reader.readAsDataURL(file);
};

