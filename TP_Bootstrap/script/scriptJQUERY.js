$(function(){    
    $(".card")
        .hover(function(){
            var source = $(this).attr("src");
        })
        .mouseenter(function(){
            $(this).attr("src");
        })
        .mouseleave(function(){
            let lien = "https://cdn.polscygracze.pl/uploads/2016/01/8q2JCKx.jpg";
            this.attr("src", lien);
        });
})