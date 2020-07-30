module.exports = {
    beforeEach: browser => browser.url('https://www.yoodlize.com/'),
    after: browser => browser.end(),
    'Check See All': browser => {
        browser
            .useXpath()
            // $x('(//div[text()="See all"])[#]')
            .click('(//div[text()="See all"])[1]')
            .verify.elementPresent('(//div[text()="category: Recreational Vehicles"])')
            .back()
            .click('(//div[text()="See all"])[2]')
            .verify.elementPresent('(//div[text()="category: Outdoor Gear"])')
            .back()
            .click('(//div[text()="See all"])[3]')
            .verify.elementPresent('(//div[text()="category: Electronics"])')
            .back()
            .click('(//div[text()="See all"])[4]')
            .verify.elementPresent('(//div[text()="category: Party & Wedding Equipment"])')
            .back()
            .click('(//div[text()="See all"])[5]')
            .verify.elementPresent('(//div[text()="category: Tools"])')
            .back()
            .click('(//div[text()="See all"])[6]')
            .verify.elementPresent('(//div[text()="category: Clothing"])')
            .back()
            .click('(//div[text()="See all"])[7]')
            .verify.elementPresent('(//div[text()="category: Home and Kitchen"])')
            .back()
            .click('(//div[text()="See all"])[8]')
            .verify.elementPresent('(//div[text()="category: Toys and Games"])')
            .back()
            .click('(//div[text()="See all"])[9]')
            .verify.elementPresent('(//div[text()="category: Lawn and Garden"])')
            .back()
            .click('(//div[text()="See all"])[10]')
            .verify.elementPresent('(//div[text()="category: Sporting Equipment"])')
            .back()
            .click('(//div[text()="See all"])[11]')
            .verify.elementPresent('(//div[text()="category: DVDs"])')
            .back()
            .click('(//div[text()="See all"])[12]')
            .verify.elementPresent('(//div[text()="category: Venues"])')
            .back()
            .click('(//div[text()="See all"])[13]')
            .verify.elementPresent('(//div[text()="category: Music"])')
            .back()
            .click('(//div[text()="See all"])[14]')
            .verify.elementPresent('(//div[text()="category: Business Equipment"])')
            .back()
            .click('(//div[text()="See all"])[15]')
            .verify.elementPresent('(//div[text()="category: Misc"])')
            .back()
    },
    'Check bottom buttons': browser => {
        browser
            .useXpath()
            .click('(//div[text()="TOOLS"])[2]')
            .assert.elementPresent('(//div[text()="category: Tools"])')
            .back()
            .click('(//div[text()="OUTDOOR GEAR"])[2]')
            .assert.elementPresent('(//div[text()="category: Outdoor Gear"])')
            .back()
            .click('(//div[text()="ELECTRONICS"])[2]')
            .assert.elementPresent('(//div[text()="category: Electronics"])')
            .back()
            .pause(3000)
            .click('(//div[text()="PARTY & WEDDING"])')
            .assert.elementPresent('(//div[text()="category: Party & Wedding Equipment"])')
            .back()
            .click('(//div[text()="RECREATIONAL VEHICLES"])[2]')
            .assert.elementPresent('(//div[text()="category: Recreational Vehicles"])')
            .back()
            .click('(//div[text()="CLOTHING"])[2]')
            .assert.elementPresent('(//div[text()="category: Clothing"])')
            .back()
            .click('(//div[text()="HOME & KITCHEN"])[2]')
            .assert.elementPresent('(//div[text()="category: Home and Kitchen"])')
            .back()
            .click('(//div[text()="TOYS & GAMES"])[2]')
            .assert.elementPresent('(//div[text()="category: Toys and Games"])')
            .back()
            .click('(//div[text()="LAWN & GARDEN"])[2]')
            .assert.elementPresent('(//div[text()="category: Lawn and Garden"])')
            .back()
            .click('(//div[text()="SPORTING GOODS"])[2]')
            .assert.elementPresent('(//div[text()="category: Sporting Equipment"])')
            .back()
            .click('(//div[text()="DVDS & VIDEO GAMES"])')
            .assert.elementPresent('(//div[text()="category: DVDs"])')
            .back()
            .click('(//div[text()="VENUES"])[2]')
            .assert.elementPresent('(//div[text()="category: Venues"])')
            .back()
            .click('(//div[text()="MUSIC"])[2]')
            .assert.elementPresent('(//div[text()="category: Music"])')
            .back()
            .click('(//div[text()="MISC"])[2]')
            .assert.elementPresent('(//div[text()="category: Misc"])')       
    }

}