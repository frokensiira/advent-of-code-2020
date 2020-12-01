const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i ++) {
		let currentDifference = target - nums[i];
		const found = nums.find(num => num === currentDifference);

		if(found) {
			const foundNumbers = [];
			foundNumbers.push(nums[i], found);
			return foundNumbers;
		}
	}
}

const twoNumbers = twoSum(expenseReport, SUM);

let twoNumberProduct = null;
if(twoNumbers) {
	twoNumberProduct = multiplyNumbers(twoNumbers);
}