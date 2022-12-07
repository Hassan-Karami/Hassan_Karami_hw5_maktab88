function seperators(num) {
  if(isNaN(num)){
    return "!invlid Input"
  }
    let str = num.toString();
    let result = "";
    while (str.length > 3) {
      result = "," + str.slice(str.length - 3) + result;
      str = str.slice(0, length - 3);
    }
    return str + result;
  }
  console.log(seperators(2589331));
  console.log(seperators(1000));
  console.log(seperators("hello"));


