class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.len = 0;
        this.arr = [];
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.arr[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.arr[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getSize() >= this.capacity) {
            this.resize();
        }

        this.arr[this.len++] = n;
    }

    /**
     * @returns {number}
     */
    popback() {
        return this.arr[--this.len];
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity = this.len * 2;
        this.arr = Array.from({length: this.capacity}, (v, i) => this.arr[i] ?? 0);
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.len;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
