
function addPromise(a,b){
  return new Promise(function(resolve,reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Only numbers are allowed');
    }
  })
}

addPromise(2,'a').then(function(sum){
  console.log('success',sum);
},function(error){
  console.log('error',error);
});