import { Selector } from "testcafe";

fixture`Basic Demo`.page`https://devexpress.github.io/testcafe/example/`.before(async t => {

    // test precodiotion setup
    // intiliization
    // test data setup
}).beforeEach(async t => {

    await t.setTestSpeed(1)//0.1 min-1 max
    await t.setPageLoadTimeout(0)
    // runs before each test
    console.log(`before Each`)
}).after(t => {
    //cleaning up
    //closing/terminating browser
    // closing resources
}).afterEach(t => {
    // runs after each Test
})

test(`Basic Intearction`, async t => {
    await t.typeText('#developer-name', 'suraj')
    await t.click('#submit-button')
    await t.expect(Selector('#article-header').innerText).contains('suraj')
    await t.wait(2000);

    // Click
    // await t.click('selector',{option});
    // // Double click 
    // await t.doubleClick('selector', {option})
    // // Right click
    // await t.rightClick('selector',{option})
    // //Drag
    // await t.drag('selector',200,0,{option})
    // //Hover
    // await t.hover('selector')
    // //select text
    // await t.selectText('selector')
    // //Type text
    // await t.typeText('selector')
    // //Press Key on Keyboard
    // await t.pressKey('key')
    // //Navigate
    // await t.navigateTo('url')
    // //Take Screenshot
    // await t.takeScreenshot()
    // await t.takeElementScreenshot()
    // //Resize Window
    // await t.resizeWindow(800,600)


    // Deep Equal 
    // await t.expect('foo').eql('foo','assert Meaage', {option})
    // //Not Deep Equal
    // await t.expect('foo').notEql('boo')
    // //Ok
    // await t.expect(true).ok()
    // // Not Ok
    // await t.expect(false).notOk()
    // //contains
    // await t.expect('Joker').contains('ker')
    // // not Contains
    // await t.expect('Joker').notContains('ker')
    // //Greater or Less Then
    // await t.expect(10).gt(9)
    // await t.expect(10).gte(10);
    // await t.expect(8).lt(10);
    // await t.expect(8).lte(8)
    // //within
    // await t.expect(12).within(1,20)
    // // not Within
    // await t.expect(10).notWithin(11,10) 
})

test(`Basic Intearction`, async t => {
    await t.typeText('#developer-name', 'suraj')
    await t.click('#submit-button')
    await t.expect(Selector('#article-header').innerText).contains('suraj')
    await t.wait(2000)
})