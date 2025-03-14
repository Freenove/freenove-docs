// JavaScript Document
$(document).ready(function () {
	loadReady();

});
$(window).resize(function () {
	// console.log('resize ... ');
	NaviResize();
});

function loadReady() {
	// console.log('ready ... ');
	setNavBar();
	NaviResize();
	var autoPlay2 = setInterval("test()", 1000);
	$(".dropBtn").click(function () {
		// $(this).css("background-color", "#FFF");
		$("#txt").text("click:");
	});

}

function NaviResize() {
	// var wy_nav_side = document.getElementsByClassName('wy-nav-side')[0];
	// var wy_nav_content = document.getElementsByClassName('wy-nav-content')[0];
	// // var nav_fn = document.getElementsByClassName('nav_fn')[0];
	// var rect_wy_nav_side = wy_nav_side.getBoundingClientRect();
	// // var rect_wy_nav_content = wy_nav_content.getBoundingClientRect();
	// // var rect_nav_fn = nav_fn.getBoundingClientRect();
	// console.log('rect_wy_nav_side :', rect_wy_nav_side.width);
	// console.log('wy_nav_content:', wy_nav_content.width);
	// $('.wy-nav-content').on
	// // var winWidth = $(window).width();
	// console.log("wy-nav-side " + $('.wy-nav-side').width() + ' wy-nav-content: ' + $('.wy-nav-content').outerWidth(true) + " " + $('.wy-nav-side').offset().left + "");
	var navWidth = $('.wy-nav-side').width() + $('.wy-nav-content').outerWidth(true) + $('.wy-nav-side').offset().left;
	var navHeight = $(".extrabody-content").height();
	var navItemWidth = navWidth / 7;
	navItemWidth = navItemWidth < 60 ? 60 : navItemWidth;
	var navItemHeight = navItemWidth / 5;
	// console.log("navWidth " + navWidth + ' navItemWidth: ' + navItemWidth + " " + $('.wy-nav-side').offset().left + "");
	// $(".extrabody-content").height(navItemWidth);
	// $(".nav_fn").height(navItemHeight);
	// $(".nav_fn>ul").css("line-height", navItemHeight + "px");
	$(".nav_fn>ul>li").width(navItemWidth);
	// console.log('.extrabody-content.height: ' + $(".extrabody-content").height());
	$(".nav_fn>ul>li").height($(".extrabody-content").height);
	$(".nav_fn>ul a").css("font-size", navItemWidth * 0.15 + "px");

}
function test() {
	//var today=new Date()
	//var h=today.getHours()
	//var m=today.getMinutes()
	//var s=today.getSeconds()
	$("#txt").fadeToggle(1000);
	//$("#txt").text(bannerCount+":"+winWidth);
}

function setPageLogo() {
	var link =
		document.querySelector("link[rel*='icon']") ||
		document.createElement("link");
	link.type = "image/x-icon";
	link.rel = "shortcut icon";
	link.href = "_static/images/logo_head_16.png";
	document.getElementsByTagName("head")[0].appendChild(link);
}

let navBarHTML =
	`
  <div class="nav_fn">
    <ul>
        <!-- <li class="navLogo"><a href="/index.html"></a></li> -->
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/"  target="_blank" class="dropBtn">Home</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="#" class="dropBtn">Store</a>
                <div class="dropDownContent">
                    <a href="https://store.freenove.com/" target="_blank">Official </a>
                    <a href="https://freenove.com/store" target="_blank">Amazon </a>
                    <a href="https://freenove.com/store" target="_blank">eBay </a>
                    <a href="https://freenove.aliexpress.com/store" target="_blank">AliExpress </a>
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/tutorial.html#" target="_blank" class="dropBtn">Tutorial</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/support.html#" target="_blank" class="dropBtn">Support</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/app.html#" target="_blank" class="dropBtn">App</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/contact.html#" target="_blank" class="dropBtn">Contact</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        <li>
            <div class="navDropDown">
                <a href="https://docs.freenove.com/en/latest/about-freenove/about.html#" target="_blank" class="dropBtn">About</a>
                <div class="dropDownContent">
                </div>
            </div>
        </li>
        
            <!-- <li id="txt">
                <div class="navDropDown">
                    <a href="https://freenove.com/" class="dropBtn">Welcome</a>
                    <div class="dropDownContent">
                    </div>
                </div>
            </li> -->
       
    </ul>
</div>
`;

function setNavBar() {
	let navBar = document.getElementById('navContent');

	// console.log("111: " + navBar.innerHTML);
	navBar.innerHTML = navBarHTML;
	// console.log("222: " + navBar.innerHTML);
}

window.onload = function () {

	console.log('window.onload');
	// setPageLogo();
};
