

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


var arr = document.querySelectorAll('.ranking-head a')
for (let i = 0; i < arr.length; i++) {
	arr[i].onclick = function(event){
		event.preventDefault()
		for (var j = 0; j < arr.length; j++) {
			remove(arr[j],'bgc')
			remove(document.querySelectorAll('.ranking-bot')[j],'db')
		}
		add(this,'bgc')
		add(document.querySelectorAll('.ranking-bot')[i],'db')
	}
}


var spanArr = document.querySelectorAll('.size')
for (var i = 0; i < spanArr.length; i++) {
	spanArr[i].onclick = function(){
		for (var j = 0; j < spanArr.length; j++) {
			remove(spanArr[j],'bgp')
		}
		add(this,'bgp')
	}
}


document.querySelector('.minu').onclick = function(){
	var num = document.querySelector('.number').innerText
	if (num > 1) {
		num--
		document.querySelector('.number').innerText = num
	}
}
document.querySelector('.plus').onclick = function(){
	var num = document.querySelector('.number').innerText
		num++
		document.querySelector('.number').innerText = num
}


var liArr = document.querySelectorAll('.right-mid ul li a')
var divArr = document.querySelectorAll('.right-mid>div')
for (let i = 0; i < liArr.length; i++) {
	liArr[i].onclick =function (e){
		e.preventDefault()
		for (var j = 0; j < liArr.length; j++) {
			remove(liArr[j],'active1')
			remove(divArr[j],'db')
		}
		add(this,'active1')
		add(divArr[i],'db')
	}
}

document.querySelector('.share').onmouseenter = function(){
	document.querySelector('.fenxiang').style.display = 'block'
}
document.querySelector('.share').onmouseleave = function(){
	document.querySelector('.fenxiang').style.display = 'none'
}

window.onscroll = function(){
	var scrollTop = document.querySelector('html').scrollTop
	if (scrollTop > 500) {
		document.querySelector('.toptop').style.display = 'block'
	}else{
		document.querySelector('.toptop').style.display = 'none'
	}
}	

document.querySelector('.toptop').onclick = function(){
	window.scrollTo({
		top: 0,
		behavior:'smooth'
		})
}