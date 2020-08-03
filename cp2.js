const { assert } = require("console")

var cp2 = {}
module.exports = {
    beforeEach: browser => {
        cp2 = browser.page.cp2Obj()
        cp2.navigate()
    },
    after: browser =>{
        cp2.end()
    },
    'Evens and Odds Input': browser => {
        cp2
            // Check Input
            .setValue('@splInput', '1,2,3,4,5,6,7,8,9')
            .click('@split')
            .assert.containsText('@evenRes', '[2,4,6,8]')
            .assert.containsText('@oddRes', '[1,3,5,7,9]')
    },
    'Evens and Odds Results': browser => {
        cp2 
            // Check Results
            .setValue('@splInput', '5468,484414,2153546684476512,2')
            .click('@split')
            .assert.containsText('@evenRes', '[5468,484414,2153546684476512,2]')
            .assert.containsText('@oddRes', '[]')
            .clearValue('@splInput')
            .setValue('@splInput', 'abcdefg')
            .click('@split')
            .assert.containsText('@evenRes', '[]')
            .assert.containsText('@oddRes', '[null]')
    },      
    'Filter Object Input': browser => {
        cp2 
            //Check Input
            .setValue('@filInput', 'title')
            .click('@filter')
            .assert.containsText('@filRes', 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]')

    },
    'Filter Object Results': browser => {
        cp2
            //Check Results
            .setValue('@filInput', 'age')
            .click('@filter')
            .assert.containsText('@filRes', 'Filtered: [ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]')
            .clearValue('@filInput')
            .setValue('@filInput', 'asdf')
            .click('@filter')
            .assert.containsText('@filRes', 'Filtered: []')
    },
    'Filter String Input': browser => {
        cp2
            //Check Input
            .setValue('@strInput', 'Jessica')
            .click('@string')
            .assert.containsText('@strRes', 'Filtered Names: [ "Jessica" ]')
    },
    'Filter String Results': browser => {
        cp2
            //Check Results
            .setValue('@strInput', 'Melody')
            .click('@string')
            .assert.containsText('@strRes', 'Filtered Names: [ "Melody" ]')
            .clearValue('@strInput')
            .setValue('@strInput', 'CJ')
            .click('@string')
            .assert.containsText('@strRes', 'Filtered Names: []')
    },
    'Palindrome Input': browser => {
        cp2
            //Check Input
            .setValue('@palInput', '121')
            .click('@palin')
            .assert.containsText('@palRes', 'Palindrome: true')
    },
    'Palindrome Results': browser => {
        cp2
            //Check Results
            .setValue('@palInput', '45654')
            .click('@palin')
            .assert.containsText('@palRes', 'Palindrome: true')
            .clearValue('@palInput')
            .setValue('@palInput', '123456')
            .click('@palin')
            .assert.containsText('@palRes', 'Palindrome: false')
            .clearValue('@palInput')
            .setValue('@palInput', 'abc')
            .click('@palin')
            .assert.containsText('@palRes', 'Palindrome: false')
            .clearValue('@palInput')
            .setValue('@palInput', 'RACECAR')
            .click('@palin')
            .assert.containsText('@palRes', 'Palindrome: true')
    },
    'Sum Input': browser => {
        cp2
            //Check Input
            .setValue('@sumInput1', '40')
            .setValue('@sumInput2', '20')
            .click('@sum')
            .assert.containsText('@sumRes', 'Sum: 60')
    },
}