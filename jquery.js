var links=document.querySelectorAll('.links a')
console.log(links);
for (var i=0;i<=links.length;i++) {
    var link = links [i];
    link.style.backgroundColor="red";
}

//la meme chose en jquery

jQuery('.links a').css('backgroundColor', 'red')
$('.links a').css('backgroundColor', 'red')

$(document).ready(function() {
        $("button").click(function() {
                $("p").hidden();
            )
        };
    )};

//les toggles
