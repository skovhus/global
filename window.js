var win;

if (typeof global !== "undefined") {
    win = global;
} else if (typeof window !== "undefined") {
    win = window;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;
