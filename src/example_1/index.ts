export function trans(str:string):string {
  if (!str.includes('_')) return str;
  let flag:boolean = false;
  let res:string = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '_') {
      res += (flag && i !== 1) ? str[i].toUpperCase() : str[i]
      flag = false;
    } else {
      flag = true;
    }
  }
  return res;
}

