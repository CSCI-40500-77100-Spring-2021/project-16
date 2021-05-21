import React from "react";
import Form from './Form'



const validate = (name,price,prize,register,description,addressp,streamp)=>{
    const stream = /https:\/\/www\.twitch\.tv\/(?!.+\/profile).*/
    const money = /^-?(?:0|[1-9]\d{0,2}(?:,?\d{3})*)(?:\.\d+)?$/
    const address =/^[a-zA-Z0-9\s\,\''\-]*$/
    let valid = true 
    if(!name)
    {
        valid = false
    }
    if(!money.test(price))
    {
        valid = false
    }
    if(!money.test(prize))
    {
        valid = false
    }
    if(!register)
    {
        valid = false
    }
    if(!description)
    {
        valid = false
    }
    if(!address.test(addressp))
    {
        valid = false
    }
    if(!stream.test(streamp))
    {
        valid = false
    }
    return valid 
  }
  test('validate form information with no name', ()=>
  {
      expect(validate("",
      "100",
      "0",
      "Lorem",
      "Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
  test('validate form information with no information', ()=>
  {
      expect(validate("",
      "",
      "",
      ""
      ,""
      ,""
      ,"")).toBe(false)
    
  })
  test('validate form information', ()=>
  {
      expect(validate("Chess",
      "100",
      "0",
      "Lorem"
      ,"Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(true)
    
  })
  test('validate form information with wrong cash', ()=>
  {
      expect(validate("Chess",
      "100",
      "0A",
      "Lorem"
      ,"Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
  test('validate form information with cash as not a number', ()=>
  {
      expect(validate("Chess",
      "ABCD",
      "0A",
      "Lorem"
      ,"Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
  test('validate form information with no description ', ()=>
  {
      expect(validate("Chess",
      "100",
      "0",
      "Ipsum"
      ,""
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
  test('validate form information with wrong address', ()=>
  {
      expect(validate("Chess",
      "100",
      "0",
      "Lorem",
      "Ipsum"
      ,"ABC 123"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
  test('validate form information with wrong link', ()=>
  {
      expect(validate("Chess",
      "100",
      "0",
      "Lorem",
      "Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.youtube.com/watch?v=2d-SX8YRyis")).toBe(false)
    
  })
  test('validate form information with no Register info', ()=>
  {
      expect(validate("Chess",
      "100",
      "0",
      ""
      ,"Ipsum"
      ,"695 Park Ave, New York, NY 10065"
      ,"https://www.twitch.tv/loltyler1")).toBe(false)
    
  })
