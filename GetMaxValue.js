/*
 write a function solution that given an integer n and returns the maximum possible value obtained by deleting one 5 digit
 from decimal representation of N. It is guaranteed that N will contain at least one 5 digit.
*/

function get_max_value(N) {
  var tmp = N
 
  var largest = 0
  var result = [];

  N.split('').forEach((val, index) => val == '5' ? result.push(index) : null)
  
  for(var prop in result) {
    
    firstone = tmp.substring(0,result[prop]);
    secondone = tmp.substring(result[prop]+1,N.length)
    tmp2=parseInt(firstone+secondone);
    if(tmp2>largest) {
      largest=tmp2;
    }
    
  }
  
  return largest;
}

console.log(get_max_value('15958'))
