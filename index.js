// Add your functions and code here
// var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){
  window.kittens.push(name)
  // return kittens
}

function destructivelyPrependKitten(name){
  window.kittens.unshift(name)
}

function destructivelyRemoveFirstKitten(){
 window.kittens.shift() 
}

function appendKitten(name){
  return kittens.concat([name])
}

function prependKitten(name){
  return [name, ...kittens]
}