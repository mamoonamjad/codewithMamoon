console.clear();

const sum = (a,b) => {
return a+b;
};

const subtract= (a,b) => {
    return a-b;
};

const multiply = (a,b) => {
    return a*b;
};

const funcs={ sum:sum, subtract:subtract, multiply:multiply };

module.exports = funcs;