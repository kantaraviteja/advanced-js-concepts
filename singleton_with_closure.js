let singleton = (function() {
    let counter = 0; // this is only accesable in below object due to closure
    function incCounter() {
        counter++;
    }
    return {
        "incBy": function(x) {
            counter += x;
        },
        "getCounter": function(){
            console.log(counter);
            return counter;
        },
        "inc1": function(){
            incCounter();
        }
    }
}());

singleton.getCounter();
singleton.incBy(5);
singleton.getCounter();
singleton.incBy(21);
singleton.getCounter();
singleton.inc1();
singleton.getCounter();
console.log(singleton.counter);



