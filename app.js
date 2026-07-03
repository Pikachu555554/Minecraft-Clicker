let clicks=0
let addboost=1
let autoclicker=0
let prestige=1

let upgradeiprice=10
let upgradeiiprice=10
let upgradeiiiprice=100
let upgradeivprice=100
let upgradevprice=10000
let upgradeviprice=10000
let upgradeviiprice=1000
let upgradeviiiprice=1000
let upgradeixprice=10000
let upgradexprice=10000
let upgradexiprice=10000000
let upgradexiiprice=10000000
let upgradexiiiprice=100000
let upgradexivprice=100000
let upgradexvprice=1000000
let upgradexviprice=1000000
let prestigeprice=10000000

let inflationupgradei=1.2
let inflationupgradeii=1.2
let inflationupgradeiii=1.4
let inflationupgradeiv=1.4
let inflationupgradev=10
let inflationupgradevi=10
let inflationupgradevii=1.6
let inflationupgradeviii=1.6
let inflationupgradeix=1.8
let inflationupgradex=1.8
let inflationupgradexi=25
let inflationupgradexii=25
let inflationupgradexiii=2
let inflationupgradexiv=2
let inflationupgradexv=2.2
let inflationupgradexvi=2.2
let inflationprestige=2.5

let upgradevlimit=0
let upgradevilimit=0
let upgradexilimit=0
let upgradexiilimit=0

let nameElement = document.getElementById("clicks");
let clickButton = document.getElementById("click");

let upgradeiButton = document.getElementById("upgradei");
let upgradeiiButton = document.getElementById("upgradeii");
let upgradeiiiButton = document.getElementById("upgradeiii");
let upgradeivButton = document.getElementById("upgradeiv");
let upgradevButton = document.getElementById("upgradev");
let upgradeviButton = document.getElementById("upgradevi");
let upgradeviiButton = document.getElementById("upgradevii");
let upgradeviiiButton = document.getElementById("upgradeviii");
let upgradeixButton = document.getElementById("upgradeix");
let upgradexButton = document.getElementById("upgradex");
let upgradexiButton = document.getElementById("upgradexi");
let upgradexiiButton = document.getElementById("upgradexii");
let upgradexiiiButton = document.getElementById("upgradexiii");
let upgradexivButton = document.getElementById("upgradexiv");
let upgradexvButton = document.getElementById("upgradexv");
let upgradexviButton = document.getElementById("upgradexvi");
let prestigeButton = document.getElementById("prestige");

let priceElement = document.getElementById("upgradeipricedisp");
let priceElementTwo = document.getElementById("upgradeiipricedisp")
let priceElementThree = document.getElementById("upgradeiiipricedisp")
let priceElementFour = document.getElementById("upgradeivpricedisp")
let priceElementFive = document.getElementById("upgradevpricedisp")
let priceElementSix = document.getElementById("upgradevipricedisp")
let priceElementSeven = document.getElementById("upgradeviipricedisp")
let priceElementEight = document.getElementById("upgradeviiipricedisp")
let priceElementNine = document.getElementById("upgradeixpricedisp")
let priceElementTen = document.getElementById("upgradexpricedisp")
let priceElementEleven = document.getElementById("upgradexipricedisp")
let priceElementTwelve = document.getElementById("upgradexiipricedisp")
let priceElementThirteen = document.getElementById("upgradexiiipricedisp")
let priceElementFourteen = document.getElementById("upgradexivpricedisp")
let priceElementFifteen = document.getElementById("upgradexvpricedisp")
let priceElementSixteen = document.getElementById("upgradexvipricedisp")
let priceElementPrestige = document.getElementById("prestigepricedisp")



let autoclickElement = document.getElementById("autoclickdisp"); 
let addboostElement = document.getElementById("addboostdisp")
let prestigeElement = document.getElementById("prestigedisp")

nameElement.textContent = clicks;
priceElement.textContent = upgradeiprice; 
priceElementTwo.textContent = upgradeiiprice; 
priceElementThree.textContent = upgradeiiiprice; 
priceElementFour.textContent = upgradeivprice; 
priceElementFive.textContent = a(upgradevprice); 
priceElementSix.textContent = a(upgradeviprice);
priceElementSeven.textContent = a(upgradeviiprice); 
priceElementEight.textContent =a(upgradeviiiprice); 
priceElementNine.textContent =a(upgradeixprice); 
priceElementTen.textContent =a(upgradexprice); 
priceElementEleven.textContent =a(upgradexiprice); 
priceElementTwelve.textContent =a(upgradexiiprice); 
priceElementThirteen.textContent =a(upgradexiiiprice); 
priceElementFourteen.textContent =a(upgradexivprice); 
priceElementFifteen.textContent =a(upgradexvprice); 
priceElementSixteen.textContent =a(upgradexviprice); 
priceElementPrestige.textContent =a(prestigeprice); 
autoclickElement.textContent = autoclicker; 
addboostElement.textContent = addboost;
prestigeElement.textContent = prestige;
function a(clicks){
  if (clicks>=1_000_000_000_000_000_000){
    return(clicks/1_000_000_000_000_000_000).toFixed(1)+"Qi"
  }else if (clicks>=1_000_000_000_000_000){
    return(clicks/1_000_000_000_000_000).toFixed(1)+"Qa"
  }else if (clicks>=1_000_000_000_000){
    return(clicks/1_000_000_000_000).toFixed(1)+"T"
  }else if (clicks>=1_000_000_000){
    return(clicks/1_000_000_000).toFixed(1)+"B"
  }else if (clicks>=1_000_000){
    return ((clicks/1_000_000).toFixed(1)+"M")
  }else if (clicks>=1_000){
    return((clicks/1_000).toFixed(1)+"K")
  }
  else{
    return clicks.toFixed(1)
  }
}
setInterval(function(){
    clicks=clicks+(prestige*autoclicker)
       nameElement.textContent = a(clicks)
       autoclickElement.textContent = a(autoclicker)
},1000);
function increaseClicks() {
    clicks = clicks+(addboost*prestige);            
    nameElement.textContent = a(clicks); 
}
function buyupgradei(){
    if (clicks>=upgradeiprice){
      clicks=clicks-upgradeiprice
      addboost=addboost+1
      upgradeiprice=upgradeiprice*inflationupgradei
      nameElement.textContent =  a(clicks); 
      priceElement.textContent = a(upgradeiprice)
      addboostElement.textContent = a(addboost)


  }
}
function buyupgradeii(){
    if (clicks>=upgradeiiprice){
      clicks=clicks-upgradeiiprice
      autoclicker=autoclicker+1
      upgradeiiprice=upgradeiiprice*inflationupgradeii
      nameElement.textContent =   a(clicks); 
      priceElementTwo.textContent = a(upgradeiiprice)
      autoclickElement.textContent = a(autoclicker); 
    }
  }
function buyupgradeiii(){
    if (clicks>=upgradeiiiprice){
      clicks=clicks-upgradeiiiprice
      addboost=addboost+10
      upgradeiiiprice=upgradeiiiprice*inflationupgradeiii
      nameElement.textContent =  a(clicks); 
      priceElementThree.textContent = a(upgradeiiiprice)
      addboostElement.textContent = a(addboost)
  }
}
function buyupgradeiv(){
    if (clicks>=upgradeivprice){
      clicks=clicks-upgradeivprice
      autoclicker=autoclicker+10
      upgradeivprice=upgradeivprice*inflationupgradeiv
      nameElement.textContent =    a(clicks); 
      priceElementFour.textContent = a(upgradeivprice)
      autoclickElement.textContent = a(autoclicker)
    }
  }
function buyupgradev(){
  if (clicks>=upgradevprice){
    if (upgradevlimit<2){
      clicks=clicks-upgradevprice
      addboost=addboost*2
      upgradevprice=upgradevprice*inflationupgradev
      upgradevlimit=upgradevlimit+1
      nameElement.textContent = a(clicks); 
      priceElementFive.textContent = a(upgradevprice)
      addboostElement.textContent = a(addboost)
      if (upgradevlimit>=2){
        priceElementFive.textContent= "Limit Reached"
      }
    }else{
        priceElementFive.textContent = "Limit Reached"
    }
  }
}
function buyupgradevi(){
  if (clicks>=upgradeviprice){
    if (upgradevilimit<2){
      clicks=clicks-upgradeviprice
      autoclicker=autoclicker*2
      upgradeviprice=upgradeviprice*inflationupgradevi
      upgradevilimit=upgradevilimit+1
      nameElement.textContent = a(clicks); 
      priceElementSix.textContent = a(upgradeviprice)
      autoclickElement.textContent = a(autoclicker)
      if (upgradevilimit>=2)
        priceElementSix.textContent = "Limit Reached"
    }else{
        priceElementSix.textContent = "Limit Reached"
    }
  }
}
function buyupgradevii(){
    if (clicks>=upgradeviiprice){
      clicks=clicks-upgradeviiprice
      addboost=addboost+100
      upgradeviiprice=upgradeviiprice*inflationupgradevii
      nameElement.textContent =    a(clicks); 
      priceElementSeven.textContent = a(upgradeviiprice)
      addboostElement.textContent = a(addboost)
  }
}
function buyupgradeviii(){
    if (clicks>=upgradeviiiprice){
      clicks=clicks-upgradeviiiprice
      autoclicker=autoclicker+100
      upgradeviiiprice=upgradeviiiprice*inflationupgradeviii
      nameElement.textContent = a(clicks); 
      priceElementEight.textContent = a(upgradeviiiprice)
      autoclickElement.textContent = a(autoclicker); 
    }
  }
function buyupgradeix(){
    if (clicks>=upgradeixprice){
      clicks=clicks-upgradeixprice
      addboost=addboost+1000
      upgradeixprice=upgradeixprice*inflationupgradeix
      nameElement.textContent =    a(clicks); 
      priceElementNine.textContent = a(upgradeixprice)
      addboostElement.textContent = a(addboost)
  }
}
function buyupgradex(){
    if (clicks>=upgradexprice){
      clicks=clicks-upgradexprice
      autoclicker=autoclicker+1000
      upgradexprice=upgradexprice*inflationupgradex
      nameElement.textContent = a(clicks); 
      priceElementTen.textContent = a(upgradexprice)
      autoclickElement.textContent = a(autoclicker); 
    }
  }
function buyupgradexi(){
  if (clicks>=upgradexiprice){
    if (upgradexilimit<2){
      clicks=clicks-upgradexiprice
      addboost=addboost*3
      upgradexiprice=upgradexiprice*inflationupgradexi
      upgradexilimit=upgradexilimit+1
      nameElement.textContent = a(clicks); 
      priceElementEleven.textContent = a(upgradexiprice)
      addboostElement.textContent = a(addboost)
      if (upgradexilimit>=2){
        priceElementEleven.textContent= "Limit Reached"
      }
    }else{
        priceElementEleven.textContent = "Limit Reached"
    }
  }
}
function buyupgradexii(){
  if (clicks>=upgradexiiprice){
    if (upgradexiilimit<2){
      clicks=clicks-upgradexiiprice
      autoclicker=autoclicker*3
      upgradexiiprice=upgradexiiprice*inflationupgradexii
      upgradexiilimit=upgradexiilimit+1
      nameElement.textContent = a(clicks); 
      priceElementTwelve.textContent = a(upgradexiiprice)
      autoclickElement.textContent = a(autoclicker)
      if (upgradexilimit>=2){
        priceElementTwelve.textContent= "Limit Reached"
      }
    }else{
        priceElementTwelve.textContent = "Limit Reached"
    }
  }
}
function buyupgradexiii(){
    if (clicks>=upgradexiiiprice){
      clicks=clicks-upgradexiiiprice
      addboost=addboost+10000
      upgradexiiiprice=upgradexiiiprice*inflationupgradexiii
      nameElement.textContent = a(clicks); 
      priceElementThirteen.textContent = a(upgradexiiiprice)
      addboostElement.textContent = a(addboost)
  }
}
function buyupgradexiv(){
    if (clicks>=upgradexivprice){
      clicks=clicks-upgradexivprice
      autoclicker=autoclicker+10000
      upgradexivprice=upgradexivprice*inflationupgradexiv
      nameElement.textContent = a(clicks); 
      priceElementFourteen.textContent = a(upgradexivprice)
      autoclickElement.textContent = a(autoclicker)
  }
}
function buyupgradexv(){
    if (clicks>=upgradexvprice){
      clicks=clicks-upgradexvprice
      addboost=addboost+100000
      upgradexvprice=upgradexvprice*inflationupgradexv
      nameElement.textContent = a(clicks); 
      priceElementFifteen.textContent = a(upgradexvprice)
      addboostElement.textContent = a(addboost)
  }
}
function buyupgradexvi(){
    if (clicks>=upgradexviprice){
      clicks=clicks-upgradexviprice
      autoclicker=autoclicker+100000
      upgradexviprice=upgradexviprice*inflationupgradexvi
      nameElement.textContent = a(clicks); 
      priceElementSixteen.textContent = a(upgradexviprice)
      autoclickElement.textContent = a(autoclicker)
  }
}
function buyprestige(){
    if (clicks>=prestigeprice){
      clicks=clicks-prestigeprice
      prestige=prestige+1
      prestigeprice=prestigeprice*inflationprestige
      clicks=clicks*0
      addboost=1
      autoclicker=0
      addboostElement.textContent = a(addboost)
      autoclickElement.textContent = a(autoclicker)
      nameElement.textContent = a(clicks); 
      priceElementPrestige.textContent = a(prestigeprice)
      prestigeElement.textContent = a(prestige)
  }
}
clickButton.addEventListener("click", increaseClicks);
upgradeiButton.addEventListener("click", buyupgradei);
upgradeiiButton.addEventListener("click", buyupgradeii);
upgradeiiiButton.addEventListener("click", buyupgradeiii);
upgradeivButton.addEventListener("click", buyupgradeiv);
upgradevButton.addEventListener("click", buyupgradev);
upgradeviButton.addEventListener("click", buyupgradevi);
upgradeviiButton.addEventListener("click", buyupgradevii);
upgradeviiiButton.addEventListener("click", buyupgradeviii);
upgradeixButton.addEventListener("click", buyupgradeix);
upgradexButton.addEventListener("click", buyupgradex);
upgradexiButton.addEventListener("click", buyupgradexi);
upgradexiiButton.addEventListener("click", buyupgradexii);
upgradexiiiButton.addEventListener("click", buyupgradexiii);
upgradexivButton.addEventListener("click", buyupgradexiv);
upgradexvButton.addEventListener("click", buyupgradexv);
upgradexviButton.addEventListener("click", buyupgradexvi);
prestigeButton.addEventListener("click", buyprestige);
