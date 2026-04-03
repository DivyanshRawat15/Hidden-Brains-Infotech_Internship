var args = process.argv;
var command = args[2];
function Queue() {
    this.items = [];
    this.enqueue = function(element) {
        this.items[this.items.length] = element;
    };
    this.dequeue = function() {
        if (this.items.length === 0) {
            return null;
        }
        var first = this.items[0];
        for (var i = 1; i < this.items.length; i++) {
            this.items[i - 1] = this.items[i];
        }
        this.items.length = this.items.length - 1;
        return first;
    };
}
/* Call */
var q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue());
console.log(q.items);
console.log(q.enqueue(40));
console.log(q.items);