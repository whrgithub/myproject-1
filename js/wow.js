function add(ele,str){
			var old = ele.className
			var arr = old.split(/\s+/)
			var num = arr.indexOf(str)
			var newClassName
			if (num === -1) {
				ele.className = old + ' ' + str
			}
		}
		function remove(ele,str){
			var old = ele.className
			var arr = old.split(/\s+/)
			var newarr=arr.filter(function(rem){
					return rem !== str
				})
				 ele.className = newarr.join(' ')
			 }	
var num =0
var aArr = document.querySelectorAll('.banner ul li a')

	for (let i = num; i < aArr.length; i++) {
	aArr[i].onclick = function(event){
		event.preventDefault()
		for (var j = 0; j < aArr.length; j++) {
			remove(document.querySelectorAll('.pic img')[j],'opacitys')
			remove(aArr[j],'active')
		}
		num = i
		add(document.querySelectorAll('.pic img')[i],'opacitys')
		add(this,'active')
	}
}

var time = function(){
	num++
	if (num == 6) {
		num = 0 
	}
	for (var i = 0; i < aArr.length; i++) {
		remove(document.querySelectorAll('.pic img')[i],'opacitys')
		remove(aArr[i],'active')
	}
	add(aArr[num],'active')
	add(document.querySelectorAll('.pic img')[num],'opacitys')
	
}
 setInterval(time,3000)

document.querySelector('.banner-left').onclick = function(event){
	event.preventDefault()
	num--
	if (num == -1) {
		num = 5
	}
	for (var i = 0; i < aArr.length; i++) {
		remove(document.querySelectorAll('.pic img')[i],'opacitys')
		remove(aArr[i],'active')
	}
	add(aArr[num],'active')
	add(document.querySelectorAll('.pic img')[num],'opacitys')
}
document.querySelector('.banner-right').onclick = function(event){
	event.preventDefault()
	num++
	if (num == 6) {
		num = 0 
	}
	for (var i = 0; i < aArr.length; i++) {
		remove(document.querySelectorAll('.pic img')[i],'opacitys')
		remove(aArr[i],'active')
	}
	add(aArr[num],'active')
	add(document.querySelectorAll('.pic img')[num],'opacitys')
}

window.onscroll = function(){
	var scrollTop =document.querySelector('html').scrollTop;
	if (scrollTop>1000) {
		document.querySelector('.scroll').style.opacity = "1"
	}else{
		document.querySelector('.scroll').style.opacity = "0"
	}
}
document.querySelector('.qrcode').onmouseenter = function(){
	this.style.backgroundPosition = '0 0'
	document.querySelector('.codeimg').style.opacity = "1"
}
document.querySelector('.qrcode').onmouseleave = function(){
	this.style.backgroundPosition = '0 -72px'
	document.querySelector('.codeimg').style.opacity = "0"
}
document.querySelector('.stop').onclick=function(){
	window.scrollTo({
		top: 0,
		behavior:'smooth'
		}) 
}