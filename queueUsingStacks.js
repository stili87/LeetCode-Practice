
var MyQueue = function() {
    this.s1 = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s1.push(x)
    this.s2 = []
    for(let i = this.s1.length - 1; i >= 0; i--){
        this.s2.push(this.s1[i])
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    const element = this.s2.pop()
    this.s1 = []
    for(let i = this.s2.length -1; i >= 0; i--){
        this.s1.push(this.s2[i])
    }
    return element
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.s2[this.s2.length - 1]
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.s2.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
