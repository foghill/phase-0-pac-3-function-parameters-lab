function introduction(name) {
return(`Hi, ny name is ${name}`)
}

function introductionWithLanguage(name, language) {
    console.log(`Hi my name is ${name} and I am learning to program in ${language}.`);
  }

  function sayHelloTo(firstName = "User") {
    console.log(`Hello, ${firstName}!`);
  }

  function introductionWithLanguage(name, language = "Javascript") {
    console.log(`Hi my name is ${name} and I am learning to program in ${language}.`);
  }

  