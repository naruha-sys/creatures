
        
function showHome()
{
        /*
        loop through all creatures
        
        if creature lives on land, background color green
        if creature lives in water, blue
        if creature lives in air, yellow
        
        */
        document.querySelectorAll('div.creature[data-home="land"]').forEach(el => {
            el.style.backgroundColor = "green";
        });
        document.querySelectorAll('div.creature[data-home="water"]').forEach(el => {
            el.style.backgroundColor = "blue";
        });
        document.querySelectorAll('div.creature[data-home="air"]').forEach(el => {
            el.style.backgroundColor = "yellow";
        });

}//end showHome()

function showType()
{
    /*
        loop through all creatures
        
        if creature is an animal, border color solid red
        if creature is an insect, border color is dashed orange
    */
    document.querySelectorAll('div.creature[data-creature-type="animal"]').forEach(el => {
        el.style.border = "2px solid red";
    });
    document.querySelectorAll('div.creature[data-creature-type="insect"]').forEach(el => {
        el.style.border = "2px dashed orange";
    });

}//end showType()

function clearAll()
{
    /*
        loop through all creatures
        
        clear border back to 1px solid black
        clear background color to white
        
    */
    document.querySelectorAll('div.creature').forEach(el => {
        el.style.backgroundColor = "white";
        el.style.border = "1px solid black";
    });

}//end clearAll()