/*


Input: 2
Output:
 1
121


*/

var n = 6;
for(let i = 0; i < n;i++){
  let str = ''
  for(let j = 0; j < n-i-1;j++){
    str +='0'
  }
  let h = 1
  for(k = n-i-1;k<n;k++){
    str +=h
    h = h + 1
  }
  
  h = i
  for(k=n;k <n*2-1;k++){
     
     str += h
     h =  h - 1
     h = h <= 0 ? '0' : h
  }
  

  console.log(str)
}

