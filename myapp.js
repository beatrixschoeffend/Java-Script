var car={
    color:"red",
    speed: 200,
   engine: {
       size: 2.0,
       make: "bmw",
       fuel: "Petrol",
       pistons: [{maker: "BMW"},{maker:"BMW"}]
   },
    drive: function() {return "drive";}
};

var array = [
    "string",
    100, 
    ["embed", 200], 
    {car: "ford"},
    function() {retrung "dive";}
];


function name(fulname)
{
    return fullname;
}
console.log(name (function () {return "embed";} ))


function Apple (color, weight)

{
    this.color = color;
    this.weight = weight
}

Apple.protoype = {
    eat : function() {return this;},
    throw: function() {return "throw the apple";}
};

var apple1 = new Apple ("red", 99)
var apple2 = new Apple ("green", 200)
var alpple3 = new Apple ("pink", 300)







var carsLeft = 0,
    carsRight = 0,
    greenMan = "yes";

if(greenMan === "yes") 
    {
        console.log ("cross the road");
    }
    


var carsLeft = 0,
    carsRight = 0,
    greenMan = "no";

if(greenMan === "yes"); 
    {
        console.log ("cross the road");
    }
else if (carsLeft === 0)
    {
        console.log ("All clear! Cross the road");
    }


var carsLeft = 1,
    carsRight = 0,
    greenMan = "no";

if(greenMan === "yes"); 
    {
        console.log ("cross the road");
    }
else if (carsLeft === 0 || carsRight === 0)
    {
        console.log ("All clear! Cross the road");
    }
else
{
    console.log ("Stay where you are!");
}





var classRegister = ["Lawrence", "John", "Jeff"];

for( var i=0; i < classRegister.length; i-- ) 
{
    console.log ( classRegister [ i ] );
}


var classRegister = ["Lawrence", "John", "Jeff"]
for ( var index=0 in classRegister)
     {
    console.log (classRegister[index])
};
     
     
     
     
console.dir(document.getElementById("hello"));
var pHello = document.getElementById("hello");

pHello.innerText="new world";
pHello.innerHTML Text += "order <span>hello world</spann>";
pHello.outerHTML ="h2 id="hello"> neworld order <span>hello world</span</h2>";
var spanH1 = document.querySelectorAll ("h1 span") [0];
spanH1[0].innerHTML = "new text here!!";


var el = document.getElementById("style");
/*el.style.background = "blue";
el.style.color = "white";
el.style.width = "200px";

el.style.cssText = "background: blue; color: white; width: 200px";
el.style.cssText += "height: 100px;";*/

console.log (getComputedStyle(el));


var select = document.getElementsByName("cars") [0];

select.onclick = function(event){console.log (event);
                                };
function ClickCallback (event){ console.log("click by add event listener");}

select.removeEventListner("click", ClickCallback);


var element = document.createElement("div");

element.style.cssText = "width:200px; height:200px; background:blue;";

element.onclick = function() {alert("hello");};

//document.body.appendChilt(element);

var target = document.getElementById("yelow");

document.body.insertBefore (element, target);














let elements =
    document.getelementsByName("cssProperty")
let div = document.getElementById("modify")

function set()
{
    for (let index= 0; index < elements.length; index ++)
        {
            let cssProperty = elements [index].getAttribute ("id");
            
            let cssValue = elements[index].value;
            
            div.style [ cssProperty ] = cssValue;‚
        }
}
    
    document.getElementsById("set").addEventListnener ("click", set);
