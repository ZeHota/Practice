module.exports = {
    // nightwatch cp2.js
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        split: ('button[name="evenOddButton"]'),
        filter: ('button[name="objectFilterButton"]'),
        string: ('button[id="nameFilterButton"]'),
        palin: ('button[name="palindromeButton"]'),
        sum: ('button[name="sumButton"]'),
        splInput: ('input[name="evenOddInput"]'),
        evenRes: ('span[name="evenResults"]'),
        oddRes: ('span[name="oddResults"]'),
        filInput: ('input[name="objectFilterInput"]'),
        filRes: ('span[name="objectFilterResults"]'),
        strInput: ('input[id="nameFilterInput"]'),
        strRes: ('span[name="nameFilterResults"]'),
        palInput:('input[name="palindromeInput"]'),
        palRes:('span[name="palindromeResults"]'),
        sumInput1:('input[name="sumInput1"]'),
        sumInput2:('input[name="sumInput2"]'),
        sumRes: ('span[name="sumResults"]'),
        

    }

}