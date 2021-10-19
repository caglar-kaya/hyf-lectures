function youSayGoodBye() {
    console.log('Good Bye!');
    function andISayHello() {
        console.log('Hello!'); 
    }
    return andISayHello;
}

let something = youSayGoodBye();

something();