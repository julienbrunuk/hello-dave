export const isEmailAddress = (emailToTest) => {
    // Expression found there: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const emailAddressRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailAddressRegex.test(String(emailToTest).toLowerCase());
}

export const isFullName = (fullName) => {
    return fullName.length > 3 && fullName.contains(' ')
}