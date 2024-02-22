String.prototype.vreplace = function(vocal) {
    return this.replace(/[aeiouAEIOU]/g, vocal);
};

console.log("apples and bananas".vreplace("u")); // Output: "upplus und bununus"