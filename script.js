let gameInfo = {
                cookieAmount:0,
                cookieRate:99,
                grandmas:0,
                grandmaPrice:0,
                grandmaButtonHasAppeared: false
}
let cookieElement = document.getElementById("Cookielabel")

function Increasecookies(){
  gameInfo.cookieAmount += 1
  cookieElement.innerText =  "Cookies: " + gameInfo.cookieAmount
}
let game = document.getElementById("Gamecontrol")

function buyGrandmas(){
  if(gameInfo.cookieAmount > gameInfo.grandmaPrice){
    gameInfo.grandmas += 1
    gameInfo.cookieRate += 1
    gameInfo.cookieAmount -= gameInfo.grandmaPrice
    gameInfo.grandmaPrice += gameInfo.grandmaPrice
  }
}

function grandmaButtonApppears(){
  let grandmaCounter = "<div id='grandmaCounter' class='grandma'> Number of grandmas: " + gameInfo.grandmas + "</div>"
  let grandmaButton = "<button id='grandmaButton' class='grandma' onclick='buyGrandmas()'> Grandma price is " + gameInfo.grandmaPrice + "</button>"
  return "<div class='grandma-container'> " + grandmaCounter + grandmaButton + "</div>"
}


function rungame(){
  gameInfo.cookieAmount += gameInfo.cookieRate
  cookieElement.innerText =  "Cookies: " + gameInfo.cookieAmount
  if(gameInfo.grandmaButtonHasAppeared == true){
    grandmaCounter.innerText = "Grandmas: " + gameInfo.grandmas
  }
  if(gameInfo.cookieAmount > gameInfo.grandmaPrice && gameInfo.grandmaButtonHasAppeared == false){
    game.innerHTML += grandmaButtonApppears()
    gameInfo.grandmaButtonHasAppeared = true
  }
}
let gameinterval = setInterval(rungame,1000)

