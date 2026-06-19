class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // [3,4,5,6], target = 7
    // a + b = target
    // b = target - a;
    // {3: 0, 3:1}
    twoSum(nums, target) {
        const map = {};
        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];
            const b = target - a;
            if (map[b] !== undefined) {
                return [map[b], i];
            }
            map[a] = i;
        }
    }
}
