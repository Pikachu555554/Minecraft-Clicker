let clicks = Number(localStorage.getItem("clicks")) || 0;
let addboost=Number(localStorage.getItem("addboost")) || 1;
let autoclicker=Number(localStorage.getItem("autoclicker")) || 0;
let prestige=Number(localStorage.getItem("prestige")) || 1;

let ui_ct=Number(localStorage.getItem("ui_ct")) || 0;
let uii_ct=Number(localStorage.getItem("uii_ct")) || 0;
let uiii_ct=Number(localStorage.getItem("uiii_ct")) || 0;
let uiv_ct=Number(localStorage.getItem("uiv_ct")) || 0;
let uv_ct=Number(localStorage.getItem("uv_ct")) || 0;
let uvi_ct=Number(localStorage.getItem("uvi_ct")) || 0;
let uvii_ct=Number(localStorage.getItem("uvii_ct")) || 0;
let uviii_ct=Number(localStorage.getItem("uviii_ct")) || 0;
let uix_ct=Number(localStorage.getItem("uix_ct")) || 0;
let ux_ct=Number(localStorage.getItem("ux_ct")) || 0;
let uxi_ct=Number(localStorage.getItem("uxi_ct")) || 0;
let uxii_ct=Number(localStorage.getItem("uxii_ct")) || 0;
let uxiii_ct=Number(localStorage.getItem("uxiii_ct")) || 0;
let uxiv_ct=Number(localStorage.getItem("uxiv_ct")) || 0;
let uxv_ct=Number(localStorage.getItem("uxv_ct")) || 0;
let uxvi_ct=Number(localStorage.getItem("uxvi_ct")) || 0;

let upgradeiprice=Number(localStorage.getItem("upgradeiprice")) || 10;
let upgradeiiprice=Number(localStorage.getItem("upgradeiiprice")) || 10;
let upgradeiiiprice=Number(localStorage.getItem("upgradeiiiprice")) || 100;
let upgradeivprice=Number(localStorage.getItem("upgradeivprice")) || 100;
let upgradevprice=Number(localStorage.getItem("upgradevprice")) || 10000;
let upgradeviprice=Number(localStorage.getItem("upgradeviprice")) || 10000;
let upgradeviiprice=Number(localStorage.getItem("upgradeviiprice")) || 1000;
let upgradeviiiprice=Number(localStorage.getItem("upgradeviiiprice")) || 1000;
let upgradeixprice=Number(localStorage.getItem("upgradeixprice")) || 10000;
let upgradexprice=Number(localStorage.getItem("upgradexprice")) || 10000;
let upgradexiprice=Number(localStorage.getItem("upgradexiprice")) || 10000000;
let upgradexiiprice=Number(localStorage.getItem("upgradexiiprice")) ||10000000;
let upgradexiiiprice=Number(localStorage.getItem("upgradexiiiprice")) ||100000;
let upgradexivprice=Number(localStorage.getItem("upgradexivprice")) ||100000;
let upgradexvprice=Number(localStorage.getItem("upgradexvprice")) ||1000000;
let upgradexviprice=Number(localStorage.getItem("upgradexiprice")) ||1000000;
let prestigeprice=Number(localStorage.getItem("upgradexiprice")) ||10000000;

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

var clickfx=document.getElementById("clicksound");
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
      localStorage.setItem("clicks", clicks)
      localStorage.setItem("prestige", prestige)
      localStorage.setItem("addboost", addboost)
      localStorage.setItem("prestigeprice", prestigeprice);
      localStorage.setItem("ui_ct", ui_ct)
      localStorage.setItem("uii_ct", uii_ct)
      localStorage.setItem("uiii_ct", uiii_ct)
      localStorage.setItem("uiv_ct", uiv_ct)
      localStorage.setItem("uv_ct", uv_ct)
      localStorage.setItem("uvi_ct", uvi_ct)
      localStorage.setItem("uvii_ct", uvii_ct)
      localStorage.setItem("uviii_ct", uviii_ct)
      localStorage.setItem("uix_ct", uix_ct)
      localStorage.setItem("uxi_ct", uxi_ct)
      localStorage.setItem("uxii_ct", uxii_ct)
      localStorage.setItem("uxiii_ct", uxiii_ct)
      localStorage.setItem("uxiv_ct", uxiv_ct)
      localStorage.setItem("uxv_ct", uxv_ct)
      localStorage.setItem("uxvi_ct", uxvi_ct)
      localStorage.setItem("prestige", prestige)
      localStorage.setItem("upgradeiprice", upgradeiprice)
      localStorage.setItem("upgradeiiprice", upgradeiiprice)
      localStorage.setItem("upgradeiiiprice", upgradeiiiprice)
      localStorage.setItem("upgradeivprice", upgradeivprice)
      localStorage.setItem("upgradevprice", upgradevprice)
      localStorage.setItem("upgradeviprice", upgradeviprice)
      localStorage.setItem("upgradeviiprice", upgradeviiprice)
      localStorage.setItem("upgradeviiiprice", upgradeviiiprice)
      localStorage.setItem("upgradeixprice", upgradeixprice)
      localStorage.setItem("upgradexprice", upgradexprice)
      localStorage.setItem("upgradexiprice", upgradexiprice)
      localStorage.setItem("upgradexiiprice", upgradexiiprice)
      localStorage.setItem("upgradexiiiprice", upgradexiiiprice)
      localStorage.setItem("upgradexivprice", upgradexivprice)
      localStorage.setItem("upgradexvprice", upgradexvprice)
      localStorage.setItem("upgradexviprice", upgradexviprice)  
      localStorage.setItem("prestigeprice", prestigeprice)
      localStorage.setItem("upgradevlimit", upgradevlimit)
      localStorage.setItem("upgradevilimit", upgradevilimit)
      localStorage.setItem("upgradexilimit", upgradexilimit)
      localStorage.setItem("upgradexiilimit", upgradexiilimit)
},10);
setInterval(function(){
    clicks=clicks+(prestige*autoclicker)
       nameElement.textContent = a(clicks)
       autoclickElement.textContent = a(autoclicker)
},1000);
function increaseClicks() {
    clicks = clicks+(addboost*prestige); 
    clickfx.play();
    nameElement.textContent = a(clicks); 
}
function buyupgradei(){
    if (clicks>=upgradeiprice){
      clicks=clicks-upgradeiprice
      addboost=addboost+1
      ui_ct=ui_ct+1
      upgradeiprice=upgradeiprice*inflationupgradei
      nameElement.textContent =  a(clicks); 
      priceElement.textContent = a(upgradeiprice)
      addboostElement.textContent = a(addboost)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradeii(){
    if (clicks>=upgradeiiprice){
      clicks=clicks-upgradeiiprice
      autoclicker=autoclicker+1
      uii_ct=uii_ct+1
      upgradeiiprice=upgradeiiprice*inflationupgradeii
      nameElement.textContent =   a(clicks); 
      priceElementTwo.textContent = a(upgradeiiprice)
      autoclickElement.textContent = a(autoclicker); 
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradeiii(){
    if (clicks>=upgradeiiiprice){
      clicks=clicks-upgradeiiiprice
      addboost=addboost+10
      uiii_ct=uiii_ct+1
      upgradeiiiprice=upgradeiiiprice*inflationupgradeiii
      nameElement.textContent =  a(clicks); 
      priceElementThree.textContent = a(upgradeiiiprice)
      addboostElement.textContent = a(addboost)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradeiv(){
    if (clicks>=upgradeivprice){
      clicks=clicks-upgradeivprice
      autoclicker=autoclicker+10
      uiv_ct=uiv_ct+1
      upgradeivprice=upgradeivprice*inflationupgradeiv
      nameElement.textContent =    a(clicks); 
      priceElementFour.textContent = a(upgradeivprice)
      autoclickElement.textContent = a(autoclicker)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradev(){
  if (clicks>=upgradevprice){
    if (upgradevlimit<2){
      clicks=clicks-upgradevprice
      addboost=addboost*2
      uv_ct=uv_ct+1
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
  }else{
    alert("Sorry, you don't have enough grass.")
   }
}
function buyupgradevi(){
  if (clicks>=upgradeviprice){
    if (upgradevilimit<2){
      clicks=clicks-upgradeviprice
      autoclicker=autoclicker*2
      uvi_ct=uvi_ct+1
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
  }else{
    alert("Sorry, you don't have enough grass.")
   }
}
function buyupgradevii(){
    if (clicks>=upgradeviiprice){
      clicks=clicks-upgradeviiprice
      addboost=addboost+100
      uvii_ct=uvii_ct+1
      upgradeviiprice=upgradeviiprice*inflationupgradevii
      nameElement.textContent =    a(clicks); 
      priceElementSeven.textContent = a(upgradeviiprice)
      addboostElement.textContent = a(addboost)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradeviii(){
    if (clicks>=upgradeviiiprice){
      clicks=clicks-upgradeviiiprice
      autoclicker=autoclicker+100
      uviii_ct=uviii_ct+1
      upgradeviiiprice=upgradeviiiprice*inflationupgradeviii
      nameElement.textContent = a(clicks); 
      priceElementEight.textContent = a(upgradeviiiprice)
      autoclickElement.textContent = a(autoclicker); 
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradeix(){
    if (clicks>=upgradeixprice){
      clicks=clicks-upgradeixprice
      addboost=addboost+1000
      uix_ct=uix_ct+1
      upgradeixprice=upgradeixprice*inflationupgradeix
      nameElement.textContent =    a(clicks); 
      priceElementNine.textContent = a(upgradeixprice)
      addboostElement.textContent = a(addboost)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradex(){
    if (clicks>=upgradexprice){
      clicks=clicks-upgradexprice
      autoclicker=autoclicker+1000
      ux_ct=ux_ct+1
      upgradexprice=upgradexprice*inflationupgradex
      nameElement.textContent = a(clicks); 
      priceElementTen.textContent = a(upgradexprice)
      autoclickElement.textContent = a(autoclicker); 
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradexi(){
  if (clicks>=upgradexiprice){
    if (upgradexilimit<2){
      clicks=clicks-upgradexiprice
      addboost=addboost*3
      uxi_ct+uxi_ct+1
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
  }else{
    alert("Sorry, you don't have enough grass.")
  }
}
function buyupgradexii(){
  if (clicks>=upgradexiiprice){
    if (upgradexiilimit<2){
      clicks=clicks-upgradexiiprice
      autoclicker=autoclicker*3
      uxii_ct=uxii_ct+1
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
  }else{
    alert("Sorry, you don't have enough grass.")
  }
}
function buyupgradexiii(){
    if (clicks>=upgradexiiiprice){
      clicks=clicks-upgradexiiiprice
      addboost=addboost+10000
      uxiii_ct=uxiii_ct+1
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
      uxiv_ct=uxiv_ct+1
      upgradexivprice=upgradexivprice*inflationupgradexiv
      nameElement.textContent = a(clicks); 
      priceElementFourteen.textContent = a(upgradexivprice)
      autoclickElement.textContent = a(autoclicker)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradexv(){
    if (clicks>=upgradexvprice){
      clicks=clicks-upgradexvprice
      addboost=addboost+100000
      uxv_ct=uxv_ct+1
      upgradexvprice=upgradexvprice*inflationupgradexv
      nameElement.textContent = a(clicks); 
      priceElementFifteen.textContent = a(upgradexvprice)
      addboostElement.textContent = a(addboost)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyupgradexvi(){
    if (clicks>=upgradexviprice){
      clicks=clicks-upgradexviprice
      autoclicker=autoclicker+100000
      uxvi_ct=uxvi+1
      upgradexviprice=upgradexviprice*inflationupgradexvi
      nameElement.textContent = a(clicks); 
      priceElementSixteen.textContent = a(upgradexviprice)
      autoclickElement.textContent = a(autoclicker)
    }else{
      alert("Sorry, you don't have enough grass.")
    }
}
function buyprestige(){
    if (clicks>=prestigeprice){
      document.body.className = "area-volcano";
      clicks=clicks-prestigeprice
      prestige=prestige+1
      prestigeprice=prestigeprice*inflationprestige
      clicks=clicks*0
      addboost=1
      autoclicker=0

      upgradeiprice=10
      upgradeiiprice=10
      upgradeiiiprice=100
      upgradeivprice=100
      upgradevprice=10000
      upgradeviprice=10000
      upgradeviiprice=1000
      upgradeviiiprice=1000
      upgradeixprice=10000
      upgradexprice=10000
      upgradexiprice=10000000
      upgradexiiprice=10000000
      upgradexiiiprice=100000
      upgradexivprice=100000
      upgradexvprice=1000000
      upgradexviprice=1000000
      ui_ct=0
      uii_ct=0
      uiii_ct=0
      uiv_ct=0
      uv_ct=0
      uvi_ct=0
      uvii_ct=0
      uviii_ct=0
      uix_ct=0
      ux_ct=0
      uxi_ct=0
      xii_ct=0
      uxiii_ct=0
      uxiv_ct=0
      uxv_ct=0
      uxvi_ct=0
      priceElement.textContent = a(upgradeiprice); 
      priceElementTwo.textContent = a(upgradeiiprice); 
      priceElementThree.textContent = a(upgradeiiiprice); 
      priceElementFour.textContent = a(upgradeivprice); 
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
      addboostElement.textContent = a(addboost)
      autoclickElement.textContent = a(autoclicker)
      nameElement.textContent = a(clicks); 
      priceElementPrestige.textContent = a(prestigeprice)
      prestigeElement.textContent = a(prestige)
    }else{
      alert("Sorry, you don't have enough grass.")
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
