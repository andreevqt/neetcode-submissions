class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // [1, 2, 3, 3]
    hasDuplicate(nums) {
        const set = {};

        for (let i = 0; i < nums.length; i++) {
            if (set[nums[i]]) {
                return true;
            }
            set[nums[i]] = true;
        }

        return false;
    }
}
