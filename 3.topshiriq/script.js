
  function findNumber(nums){
    let natija = 0

    for(let num of nums){
        if(num == natija){
            natija[num] += 1
        }else{
            natija[num] = 1
        }
    }

    for(let key of natija){
        if(natija[key] == 1){
            return key
        }
    }
  }

  arr = [3, 7, 2, 5, 3, 7]
  result = findNumber(arr)