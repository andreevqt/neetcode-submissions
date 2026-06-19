class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // ["act","pots","tops","cat","stop","hat"]
    // {"act": ["act", "cat"], "opst": ["pots", "stop"], "hat": ["hat"]}
    // ["act", "cat"], ["pots", "stop"], ["hat"]
    groupAnagrams(strs) {
        const map = {};

        for (const s of strs) {
            const key = s.split('').sort();
            map[key] = map[key] || [];
            map[key].push(s);
        }

        return Object.values(map);
    }
}
