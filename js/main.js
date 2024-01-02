$(function(){

    

    // PORTFOLIO 열고 닫기
    $(".portfolioButton").click(function(){
        if($(".portfolioList").hasClass("open")){
            $(".portfolioList").removeClass("open").addClass("close")
            $(".portfolioMenuSVG").css("transform","rotate(-90deg)")
        }else if($(".portfolioList").hasClass("close")){ 
            $(".portfolioList").removeClass("close").addClass("open")
            $(".portfolioMenuSVG").css("transform","rotate(0deg)")
        }
    })
    // .side_topList 클릭
    $(".side_topList>li").click(function(){
        let idx = $(this).index() 
        let idxi = $(this).index()-5
        if(idx<6){
            menuClick(idx)
        }else if(idx>=6){
            menuBottomClick(idx,idxi)
        }
    })
    // .side_bottomList 클릭
    $(".side_bottomList>li").click(function(){

        
        let idxi = $(this).index()
        let idx = $(this).index() + 5
        menuBottomClick(idx,idxi)
    })
    // explorer 클릭
    $(".portfolioList>li").click(function(){
        let idx = $(this).index() 
        let idxi = $(this).index()-5
        if(idx<5){
            menuClick(idx)
        }else if(idx>=5){
            menuBottomClick(idx,idxi)
        }
    })

    // mainTab 클릭
    $(".mainTab>li").click(function(){
        let idx = $(this).index() 
        let idxi = $(this).index()-5
        if(idx<5){
            menuClick(idx)
        }else if(idx>=5){
            menuBottomClick(idx,idxi)
        }
    })

    // welcomeAbout 클릭
    $(".welcomeAbout").click(function(){
        let idx = 5
        let idxi = 0 
        menuBottomClick(idx,idxi)
    })

    // colorMode
    $(".modernMode").click(function(){
        $(":root").css("--mainbgcolor","#181818")
        $(":root").css("--bgcolor1","#333333")
        $(":root").css("--bgcolor2","#2D2E2E")
        $(":root").css("--bgcolor3","#373737")
        $(":root").css("--bgcolor4","#1f1f1f")
        $(":root").css("--bgcolor5","#181818")
        $(":root").css("--bordercolor","#454545")
        $(":root").css("--headerfontcolor","#bcbcbc")
        $(":root").css("--pointcolor1","#2a78d700")
        $(":root").css("--pointcolor2","#2a78d7")
        $(":root").css("--pcolor1","#619DD8")
        $(":root").css("--pcolor2","#A4DCFF")
        $(":root").css("--pcolor3","#F7894B")
        $(":root").css("--pcolor4","#FFDC8F")
        $(":root").css("--pcolor5","#FBD610")
        $(":root").css("--pcolor6","#95CEA7")
    })
    $(".githubMode").click(function(){
        $(":root").css("--mainbgcolor","#2E323B")
        $(":root").css("--bgcolor1","#353747")
        $(":root").css("--bgcolor2","#353747")
        $(":root").css("--bgcolor3","#353747")
        $(":root").css("--bgcolor4","#353747")
        $(":root").css("--bgcolor5","#353747")
        $(":root").css("--bordercolor","#2E323B")
        $(":root").css("--headerfontcolor","#bcbcbc")
        $(":root").css("--pointcolor1","#9A5B8D00")
        $(":root").css("--pointcolor2","#9A5B8D")
        $(":root").css("--pcolor1","#EB86C5")
        $(":root").css("--pcolor2","#5CE880")
        $(":root").css("--pcolor3","#E7EE94")
        $(":root").css("--pcolor4","#EB86C5")
        $(":root").css("--pcolor5","#81E1E6")
        $(":root").css("--pcolor6","#BD9EF1")
    })

    
   

})

// 어떤 메뉴를 클릭해도 모두 바뀌는 함수
function menuClick(idx){
    $(".mainTab>li").removeClass("active")
    $(".mainTab>li").eq(idx).addClass("active")
    $(".portfolioList>li").removeClass("active")
    $(".portfolioList>li").eq(idx).addClass("active")
    $(".side_topList>li").removeClass("on")
    $(".side_topList>li").eq(idx).addClass("on")
    $(".side_bottomList>li").removeClass("on")
    $(".mainContentList>li").removeClass("active")
    $(".mainContentList>li").eq(idx).addClass("active")
}
function menuBottomClick(idx,idxi){
    $(".mainTab>li").removeClass("active")
    $(".mainTab>li").eq(idx).addClass("active")
    $(".portfolioList>li").removeClass("active")
    $(".portfolioList>li").eq(idx).addClass("active")
    $(".side_topList>li").removeClass("on")
    $(".side_bottomList>li").removeClass("on")
    $(".side_bottomList>li").eq(idxi).addClass("on")
    $(".mainContentList>li").removeClass("active")
    $(".mainContentList>li").eq(idx).addClass("active")
}