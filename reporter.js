const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports/json/",
    reportPath: "./results/html", 
})