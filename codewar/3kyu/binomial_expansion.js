// https://www.codewars.com/kata/540d0fdd3b6532e5c3000b5b/train/javascript

// my solution
function expand(expr) {
  console.log(expr)
  let arr = expr.replace(/[()]/g,'').split('^');
  let x = arr[0].match(/[a-z]/)[0];
  let coe = arr[0].match(/-?\d*/)==''? 1 : arr[0].match(/-?\d*/) == '-'? -1:Number(arr[0].match(/-?\d*/)[0]);  // coefficient
  let con = Number(arr[0].match(/[a-z][+-]\d+/)[0].slice(1,));
  let pow = Number(arr[1]);
  let exp = [coe,con];
  let sum = [coe,con];
  let str = '';
  if(pow == 0) return '1';
  for(let i = 1; i < pow; i++){
    sum = mul(sum,exp);
  }
  for(let i = 0; i < sum.length; i++){
    if(i == 0 && i < sum.length-2){
      str += `${sum[i]==1 || sum[i] == -1? (sum[i]==1?'':`-`) :sum[i]}${x}^${pow-i}`;
    }else if(i == 0 > sum.length-2){
      str += `${sum[i]==1?'':sum[i]}${x}`;
    }
    else if(sum[i]>0 && i < sum.length-2 && sum[i] != 0){
      str += `+${sum[i]==1?'':sum[i]}${x}^${pow-i}`;
    }else if(sum[i]<0 && i < sum.length-2 && sum[i] != 0){
      str += `${sum[i]==1?'':sum[i]}${x}^${pow-i}`;
    }else if(sum[i]>0 && i == sum.length-1 && sum[i] != 0){
      str += `+${sum[i]}`;
    }else if(sum[i]<0 && i == sum.length-1 && sum[i] != 0){
      str += `${sum[i]}`;
    }else if( sum[i] != 0){
      str += `${sum[i]>0?'+':''}${sum[i]}${x}`
    }
  }
  console.log(sum);
  console.log(arr,coe,x,con, pow, sum);
  return str.replace(/[a-z\-+]0[a-z]/g,'');
  function mul(a,b){
    let temp = [...a];
    let len = a.length;
      for(let i = 0; i < len; i++){
        if(i == 0){
          a.unshift(a[i]*b[0]);
          for(let j = 1; j <= len; j++){
            a[j] = a[j+1]!=null? a[j+1]:0;
          }
        }else{
          a[i] *= b[0];
        }
      }
      for(let i = 0; i < len; i++){
        temp[i] *= b[1];
        a[i+1] += temp[i];
      }
    return a;
  
  }
}

// other solutions
function expand(expr) {
    let [f, a, x, b, n] = /^\((-?\d*)(.)([-+]\d+)\)\^(\d+)$/.exec(expr);
    console.log([f, a, x, b, n])
    a = !a ? 1 : a === '-' ? -1 : +a;
    b = +b;
    n = +n;
    f = Math.pow(a, n);
    console.log([f, a, x, b, n])
  
    if (!n) {
        return '1';
    }else if (!b) {
        return f + x + (n > 1 ? '^' + n : '');
    } else {
        let result = '';
        for (let i = 0; i <= n; ++i) {
            if (f > 0 && i) result += '+';
            if (f < 0) result += '-';
            if (i || f*f > 1) result += Math.abs(f);
            if (i < n) result += x;
            if (i < n - 1) result += '^' + (n - i);
            f = f * (n - i) * b / a / (i + 1);
        }
        return result;
    }
}
