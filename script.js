/*
//why doesn't this work?
const parse = (x) => {
    x = x.toFixed(2);
    x = parseFloat(x);
};
*/


//ADD
const add = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 + num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//SUBRTRACT
const subtract = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 - num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//MULTIPLY
// (would've loved if the function name were multiply to keep the part of speech consistent)
const multiple = (num1, num2) => {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        let ans = num1 * num2;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//DIVIDE
const divide = (dividend, divisor) => {
    //one more condition to check if the divisor is not zero
    if (typeof dividend === 'number' && typeof divisor === 'number' && divisor != 0) {
        let ans = dividend / divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//SQUARE
const square = (num) => {
    if (typeof num === 'number') {
        let ans = num * num;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//CUBE
const cube = (num) => {
    if (typeof num === 'number') {
        let ans = 1;
        for (let i=0; i<3; i++) {
        ans = ans * num;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//POWER
const power = (base, exponent) => {
    if (typeof base === 'number' && typeof exponent === 'number') {
        let ans = 1;
        for (let i = 0 ; i < exponent ; i++) {
            ans = ans * base;
        }
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//MODULO
const modulo = (dividend, divisor) => {
    if (typeof dividend === 'number' && typeof divisor === 'number') {
        let ans = dividend % divisor;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;        
    } 
    return "Error!";
};


//"function within finctions" comes in handy from here on!

//SQUARE ROOT: n^(1/2)
const squareRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {        
        let sqrt_int = 0;            
        for (let i = 0 ; square(i+1) <= num ; i++) {
            sqrt_int = sqrt_int + 1;
        }        
        let sqrt_tenth = 0;        
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + 0.1) < num && i < 9 ; i++) {
            sqrt_tenth = sqrt_tenth + 0.1;
        }
        let sqrt_hundredth = 0;        
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + sqrt_hundredth + 0.01) <= num && i < 9 ; i++) {
            sqrt_hundredth = sqrt_hundredth + 0.01;
        }
        //sqrt_thousandth: so that it rounds to the correct number
        let sqrt_thousandth = 0;
        for (let i = 0 ; square(sqrt_int + sqrt_tenth + sqrt_hundredth + sqrt_thousandth + 0.001) <= num && i < 9 ; i++) {
            sqrt_thousandth =  sqrt_thousandth + 0.001;
        }              
        let ans = sqrt_int + sqrt_tenth + sqrt_hundredth +  sqrt_thousandth;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);                
        return ans;        
    } 
    return "Error!";
};


//CUBE ROOT: n^(1/3)
//3root26 = 2.96인데 2.97 나옴
const cubeRoot = (num) => {
    if (typeof num === 'number' && num >= 0) {        
        let cbrt_int = 0;        
        for (let i = 0 ; cube(i+1) < num ; i++) {
            cbrt_int = cbrt_int + 1;
        }  
        let cbrt_tenth = 0;        
        for (let i = 0 ; cube(cbrt_int + cbrt_tenth + 0.1) < num && i < 9 ; i++) {
            cbrt_tenth = cbrt_tenth + 0.1;
        }
        let cbrt_hundredth = 0;        
        for (let i = 0 ; cube(cbrt_int + cbrt_tenth + cbrt_hundredth + 0.01) < num && i < 9 ; i++) {
            cbrt_hundredth = cbrt_hundredth + 0.01;
        }
        //cbrt_thousandth: so that it rounds to the correct number
        let cbrt_thousandth = 0;
        for (let i = 0 ; square(cbrt_int + cbrt_tenth + cbrt_hundredth + cbrt_thousandth + 0.001) < num && i < 9 ; i++) {
            cbrt_thousandth = cbrt_thousandth + 0.001;
        }              
        let ans = cbrt_int + cbrt_tenth + cbrt_hundredth +  cbrt_thousandth;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);                
        return ans ;        
    } 
    return "Error!";
};


//X ROOT: n^(1/x)
const root = (num, x_root) => {
    if (typeof num === 'number' && typeof x_root === 'number') {
        let root_val = 0;
        let check = power(root_val, x_root);

        for(let i = 0 ; i+1 < x_root && check <= num; i++){
            root_val = root_val + 1;
        }

        let ans = root_val;
        ans = ans.toFixed(2);
        ans = parseFloat(ans);
        return ans;
    }
    return "Error!"
}

console.log( "sqrt",
squareRoot(100), //10
squareRoot(100.8), //10.04
squareRoot(101), //10.05
squareRoot(99), //9.95
squareRoot(5), //2.24
squareRoot(1000), //31.62
squareRoot(-100), //error
squareRoot(9),  // 3
squareRoot(144),  // 12
);

console.log("cubeRoot", 
cubeRoot(8), //2
cubeRoot(26), //2.96 > console.log=2.97 drrrr why?!?
cubeRoot(27), //3
cubeRoot(28), //3.04
cubeRoot(30), //3.11
cubeRoot(-1000), //NOT error ideally, but I will deal with this later: right now this will give an error
cubeRoot("bleh"), //error
);

console.log("xRoot",
root(9,2),//3
root(9,3),//2.08
root(15625, 6), //5
root(15625, "lalaLand"),//error
);


console.log(add(7, 22),
add(1, 2),  // returns 3
add(0.1, 0.2),  // returns 0.3
add(999, 1019),  // returns 2018
add(),  // return "Error"
add("Hello"),  // return "Error");
);

console.log(subtract(7, 22),
subtract(2, 1),  // returns 1
subtract(1, 2),  // returns -1
subtract(0.3, 0.2),  // returns 0.1
subtract(),  // return "Error"
subtract("Hello"),  // return "Error"
);

console.log(multiple(7, 22),
multiple(2, 1),  // returns 1 > NOPE: 2
multiple(1, 2),  // returns -1 > NOPE: 2
multiple(0.1, 0.2),  // returns 0.02
multiple(),  // return "Error"
multiple("Hello"),  // return "Error"
);

console.log(divide(7, 22),
divide(2, 1),  // returns 2
divide(1, 2),  // returns 0.5
divide(1, 3),  // returns 0.33
divide(0, 10),  // returns 0
divide(10, 0),  // returns "Error"
);

console.log(square(7),
square(2),  // returns 4 (which is 2^2)
square(1),  // returns 1 (which is 1^2)
square(10),  // returns 100 (which is 100^2)
square("Hello"), 
);

console.log(cube(7),
cube(2),  // returns 8 (which is 2^3)
cube(1),  // returns 1 (which is 1^3)
cube(10),  // returns 1000000 (which is 100^3) > NOPE: 10^3 = 1000, cube(100) = 100^3 = 1000000
cube("Hello"), 
);


console.log(power(7), //returns error, which is expected
power(2, 1),  // returns 2 (which is 2^1)
power(1, 2),  // returns 1 (which is 1^2)
power(0, 10),  // returns 0 (which is 0^10)
power(10, 0),  // returns 1 (which is 10^0)
power(10, 10),  // returns 10000000000 (which is 10^10)
power("Hello"), 
);

console.log(modulo(7), //returns error, which is expected
modulo(2, 1),  // returns 0
modulo(1, 2),  // returns 1
modulo(0, 10),  // returns 0
modulo(10, 0),  // returns NaN
modulo(10, 10),  // returns 10000000000 > NOPE: 0
modulo("Hello"), 
);

