

// function largest(arr, n)
// {
//     arr.sort();
//     return arr[n-1];
// }

function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i];
  }

  return max;
}




