class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // [7,7], k = 1
    // 
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array(nums.length + 1);

        for (let i = 0; i < freq.length; i++) {
            freq[i] = [];
        }

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        for (const [k, v] of Object.entries(count)) {
            freq[v].push(Number(k));
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            const arr = freq[i];
            for (const item of arr) {
                res.push(item);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
