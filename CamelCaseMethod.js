String.prototype.camelCase=function(){

    return this.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')



}


console.log("test case".camelCase());
console.log(" camel case word".camelCase());