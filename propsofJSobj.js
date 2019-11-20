const allProperties = (jsObj) => {
  return object.keys (jsObj)
}

let dessert = {
  name: "Icecream",
  flavour: "Cookie dough",
  toppings: "Gummy bears"
}

console.log(allProperties(jsObj))