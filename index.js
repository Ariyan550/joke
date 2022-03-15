
  // Math objects

  // 1. Math.PI
  // 2. Math.round()
  // 3. Math.pow()
  // 4. Math.sqrt()
  // 5. Math.abs() return absolute value remove - value 
  // 6. Math.ceil() return 2.1 then output 3
  // 7. Math.floor()
  // 8. Math.trunc() can accept negative value
  // 9. Math.random()
  // 10. Math.min(2,20,50,70)
  // 11. Math.max(50,400,800)

// there are four way to writing js events

// mouse events

// onmousedown()
// onmouseup()
// mouseenter()
// mouseleave()

// keyboard events

// keypress()
// keyup()
// keydown()

// input events

// onchange core version change

// timing events

// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval() we need variable ref


// es8
// string padding()
// Object.values()
// object.entries() return new array

// es9
// Array.flat(set flat level)


"use strict" //when you used use strict mode it check any traditional code missing in js then find out
// event bubling and cupturing
// higher order function and call back function


// callback hell

// setTimeout(()=>{
//   console.log('call Back 1')
//   setTimeout(()=>{
//     console.log('call Back 2')
//      setTimeout(()=>{
//       console.log('call Back 3')
//      },1000)
//   },1000)
// },1000)


// ajax/ XMLhttp request

// new method insertAdjacentHTML('afterbegin, data)


const jokeBody =document.querySelector('#jokeBody')
const jokeBtn =document.querySelector('#jokeBtn')



const jokeload =()=>{
  fetch("https://icanhazdadjoke.com/",{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
  }).then((res)=>{ return res.json()}).then((data)=>{
      jokeBody.innerHTML=data.joke
  
  }).catch((eror)=>{
    alert(eror)
  })

}

jokeBtn.addEventListener('click',jokeload)
jokeload()
const ale =document.querySelector('.alert')
const cbtn =document.querySelector('#close')

function myfun(){
  ale.style.display='block'
}
cbtn.onclick=()=>{
  ale.style.display='none'
}
