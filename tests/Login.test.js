import { Selector } from "testcafe";
import Navbar from "../pages-objects/components/Navbar";
import xPathToCss from 'xpath-to-css'

const navbar = new Navbar()


// prettier-ignore
fixture`Login Test`
    .page`http://zero.webappsecurity.com/index.html`



test.only('User Login with invalid credential', async t => {

    await t.click(navbar.signInButtom)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok();

    const userName = Selector('#user_login')
    const userpassword = Selector('#user_password')

    await t.typeText(userName, 'invalid username', { paste: true })//if remove paste then it will type one letter at a time
    await t.typeText(userpassword, 'inavlid password', { paste: true })

    const submitButton = Selector('.btn.btn-primary')
    await t.click(submitButton)

    const errorMsg = Selector('.alert-error').innerText

    await t.expect(errorMsg).contains('Login and/or password are wrong.')
})

test.skip('User can Login with valid Credentials', async t => {

    const signInButton = Selector('#signin_button')
    await t.click(signInButton)

    const loginForm = Selector('#login_form')
    await t.expect(loginForm.exists).ok();

    const userName = Selector('#user_login')
    const userpassword = Selector('#user_password')

    await t.typeText(userName, 'username', { paste: true })//if remove paste then it will type one letter at a time
    await t.typeText(userpassword, 'password', { paste: true })

    const submitButton = Selector('.btn.btn-primary')
    await t.click(submitButton)

    await t.wait(4000)

    const user = Selector('.dropdown-toggle').nth(1)
    await t.expect(user.innerText).contains('username')

    await t.click(user)

    const logout = Selector('#logout_link')
    await t.click(loginForm)

    await t.expect(signInButton.exists).ok()

})

test('Feed Back Form', async t => {
    const feddbackLink = Selector('#feedback')
    const name = Selector('#name')
    const email = Selector('#email')
    const subject = Selector('#subject')
    const comment = Selector('#comment')
    const submit = Selector('input').withAttribute('value','Send Message')
    const message = Selector('div').innerText

    const xPath =
    '//div[@id="foo"][2]/span[@class="bar"]//a[contains(@class, "baz")]//img[1]';
  const css = xPathToCss(xPath);
  console.log(css);
    await t.click(feddbackLink)
    await t.typeText(name,'testemail.com',{paste:true})
    await t.typeText(email,'Test@email.com',{paste:true})
    await t.typeText(subject,'feedback',{paste:true})
    await t.typeText(comment,'comment',{paste:true})
    await t.click(submit)

    await t.expect(message).contains('Thank you for your comments')
})