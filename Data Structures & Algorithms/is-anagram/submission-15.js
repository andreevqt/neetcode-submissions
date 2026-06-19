class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // s = "racecar"
    // t = "carrace"
    // map1 = {a: 2, c: 2, r: 2, e: 1}
    // map2 = {a: 2, c: 2, r: 2, e: 1}
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const map1 = {};
        for (let i = 0; i < s.length; i++) {
            map1[s[i]] = (map1[s[i]] ?? 0) + 1;
        }

        const map2 = new Map();
        for (let i = 0; i < t.length; i++) {
            map2[t[i]] = (map2[t[i]] ?? 0) + 1;
        }

        for (const key of Object.keys(map1)) {
            if (map1[key] !== map2[key]) {
                return false;
            }
        }

        return true;
    }
}
