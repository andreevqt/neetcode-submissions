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

        const c = {};
        for (const ch of s) {
            c[ch] = (c[ch] ?? 0) + 1;
        }

        for (const ch of t) {
            if (!c[ch]) {
                return false;
            }
            c[ch]--;
        }

        return true;
    }
}
