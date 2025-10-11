document.addEventListener("DOMContentLoaded", function()
{
        let body = document.querySelector("body");
        document.querySelector("#red").addEventListener("click",
            function(){ body.style.backgroundColor = "red";}
        );
        document.querySelector("#blue").addEventListener("click",
            function(){ body.style.backgroundColor = "blue";}
        );
        document.querySelector("#green").addEventListener("click",
            function(){ body.style.backgroundColor = "green";}
        );
})
