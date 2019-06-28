// getDigit to count to get digit at i position from rigth   Ex- getDigit(12345,3) will return 2
function getDigit(num,i)
{
  return Math.floor(num/Math.pow(10,i))%10
}

// digiCount to count number of digits 
function digiCount(num)
{
  if(num===0) return 1

    return Math.floor(Math.log10(num))+1
}

// mostGigit to find most no of digits in a array
function mostDigits(nums)
{
  let maxDigits=0

  for(i=0;i<nums.length;i++)
  {
    maxDigits=Math.max(maxDigits,digiCount(nums[i]))
  }

  return maxDigits
}


// for sorting
function radix(nums)
{
  maxdigitCount=mostDigits(nums)

  for(let k=0;k<maxdigitCount;k++)
  {
    let bucket=Array.from({length :10},()=>[])

    for(let i=0;i<nums.length;i++)
    {
      bucket[getDigit(nums[i],k)].push(nums[i])
    }

    nums=[].concat(...bucket)
  }

  return nums
}


console.log(radix([23,345,5467,2345,9852]))