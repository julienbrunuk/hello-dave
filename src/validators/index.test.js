import {isEmailAddress, isFullName} from "./index";

describe('email validator', () => {
    it('fails an invalid email', () => {
        expect(isEmailAddress('abcdefmailcom')).toEqual(false)
    })
    it('validates a valid email', () => {
        expect(isEmailAddress('abcdef@mail.com')).toEqual(true)
    })
})