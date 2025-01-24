const welcome = {
    msg: 'Welcome',
    handleMsg : ()=>{
        console.log("Hello user..");
    },
    currTime : new Date().toLocaleDateString(),
    arr : ["abc",1,2,3]
}

module.exports = welcome;
console.log(welcome.arr);
welcome.handleMsg();