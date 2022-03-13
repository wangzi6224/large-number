if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/large-number.min")
} else if(process.env.NODE_ENV === "development") {
    module.exports = require("./dist/large-number")
}
