module.exports = function toReadable (number) {
  
  let arr = number.toString().split('');
  let hundred = [];
  let ten = [];
  let arr2 = arr.map(function(item){
    if(item == 1)  {return item ="one";}
    else if(item == 2) {return item = "two";}
    else if(item == 3) {return item = "three";}
    else if(item == 4) {return item = "four";}
    else if(item == 5) {return item = "five";}
    else if(item == 6) {return item = "six";}
    else if(item == 7) {return item = "seven";}
    else if(item == 8) {return item = "eight";}
    else if(item == 9) {return item = "nine";}
    else return item = 'zero';
  });
  let in1 = arr.length - 3;
  let in2 = arr.length - 2; 
  let in3 = arr.length - 1;
  if(arr.length > 1){
    if(arr[in2] == '1'){
      if(arr[in3] == '0'){
      ten = ten.concat('ten');
      } else if(arr[in3] == '1'){
        ten = ten.concat('eleven');
      } else if(arr[in3] == '2'){
        ten = ten.concat('twelve');
      } else if(arr[in3] == '3'){
        ten = ten.concat('thirteen');
      } else if(arr[in3] == '5'){
        ten = ten.concat('fifteen');
      } else if(arr[in3] == '8'){
        ten = ten.concat('eighteen');
      } else {ten = ten.concat(`${arr2[in3]}teen`);
      } 
    } else if(arr[in2] == '2'){
    ten = ten.concat(`twenty`, arr2[in3]);
    } else if(arr[in2] == '3'){
      ten = ten.concat(`thirty`, arr2[in3]);
    }else if(arr[in2] == '4'){
      ten = ten.concat(`forty`, arr2[in3]);
    } else if(arr[in2] == '5'){
      ten = ten.concat(`fifty`, arr2[in3]);
    } else if(arr[in2] == '8'){
      ten = ten.concat(`eighty`, arr2[in3]);
    } else if(arr[in2] == '0'){
      ten = ten.concat(arr2[in3]);
    } else ten = ten.concat(`${arr2[in2]}ty`, arr2[in3]);
  } else if(arr[in3] == 0){
    ten = ten.splice(-1, 1);
  } else ten = '';
  if(arr.length > 2){
    hundred = hundred.concat(`${arr2[in1]} hundred`)
  } else hundred = [];
  let result = [];

  if(arr.length > 1){result = hundred.concat(ten);
  } else if(arr.length = 1) result = arr2[0];
  if(result[in3] == 'zero') {
    result.length = result.length - 1;
  } else if(result[in2] == 'zero') result.length = result.length - 1;
  else result = result;
  if(Array.isArray(result) == true) result = result.join(' '); else result = result;
  return result;
}
