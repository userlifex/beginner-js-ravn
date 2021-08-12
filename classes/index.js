class SecretetClass {

  constructor() {
    const secret = 'class is a lie'
    this.tellMeTheSecret = function (){
      console.log(secret)
    }
  }

  sayTheSecret() {
    console.log(this.secret)
  }

}

const sec = new SecretetClass()

sec.sayTheSecret()

sec.tellMeTheSecret()
