class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    twoSum(nums, target) {
        var l=0;
        for (var i = 1; i < nums.length; i++) {
                
            if (l!==i && nums[i]+nums[l] === target) return [i,j]
        }
    }
}

let sol = new Solution()

console.log(sol.twoSum([2,7,11,15],9))