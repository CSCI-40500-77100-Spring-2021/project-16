const validate = (emailp,pass)=>{
    const email = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let valid = true
    if(!email.test(emailp))
    {
        valid = false
    }
    if(!password.test(pass))
    {
        valid = false
    }
    return valid
}
test("validate login",()=>{
    expect(validate("test@gmail.com","Abcdef888#")).toBe(true)
}
)
test("validate login",()=>{
    expect(validate("test1@gmail.com","Abcdef888#")).toBe(true)
}
)
test("validate login with empty email",()=>{
    expect(validate("","Abcdef888#")).toBe(false)
}
)
test("validate login with no email",()=>{
    expect(validate("HolaComoEsta","Abcdef888#")).toBe(false)
}
)
test("validate login with invalid password",()=>{
    expect(validate("test@gmail.com","abc")).toBe(false)
}
)
test("validate login with no password",()=>{
    expect(validate("test@gmail.com","")).toBe(false)
}
)
test("validate login with invalid password password",()=>{
    expect(validate("test@gmail.com","abcdefg12)(")).toBe(false)
}
)
test("validate login with invalid password password",()=>{
    expect(validate("test@gmail.com","Abcdef!()123")).toBe(false)
}
)
