const threeSum = (nums, target) => {
	for (let i = 0; i < nums.length; i ++) {
		for(let j = 0; j < nums.length; j ++) {
			for(let k = 0; k < nums.length; k ++) {
				if(nums[i] + nums[j] + nums[k] === target){
					const foundNumbers = [];
					foundNumbers.push(nums[i], nums[j], nums[k]);
					return foundNumbers;
				}
			}
		}
	}
}

const threeNumbers = threeSum(expenseReport, SUM);

if(threeNumbers){
    let threeNumberProduct = null;
    threeNumberProduct = multiplyNumbers(threeNumbers);
}