/**
 * This is a demonstration of a school of inheritance called parasitic inheritance.
 *  It DOES NOT use "new" operator or prototype to  create objects.
 */
let shape = function (name) {
    let size = 0;
    return {
        "name": name,
        "incSize": function() {
            size++;
        },
        "getSize": function() {
            console.log(size);
        }
    }
}

var rectangle = function (l, b) {
    let that = shape("rectangle");
    that.incSize();
    that.length = l;
    that.breath = b;
    that.area = function() {
        return l * b;
    }
    return that;
}

function main () {
    let rec1 = rectangle(2, 3);
    let rec2 = rectangle(5,10);
    rec1.incSize();
    rec1.getSize();
    rec2.getSize();
    console.log(rec1.area());
};

main();
