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
function total(ele){
	var total = 0 
	for (let i = 0; i < ele.length; i++) {
		 if (ele[i].checked) {
			total = total + Number(document.querySelectorAll('.sum')[i].innerText)
		 }
		 document.querySelector('.total').innerText = (total).toFixed(2)
	}
}

function totals(ele){
	var total = 0 
	var totalsArr = document.querySelectorAll('.totals')
	for (let i = 0; i < ele.length; i++) {
		 if (ele[i].checked) {
			total = total + Number(document.querySelectorAll('.total')[i].innerText)
		 }
		 // document.querySelector('.totals').innerText = (total).toFixed(2)
		 for (var j = 0; j < totalsArr.length; j++) {
		 	totalsArr[j].innerText = (total).toFixed(2)
		 }
	}
}
var allsArr = document.querySelectorAll('.alls')
var typeArr = document.querySelectorAll('input[type=checkbox]')
var allArr = document.querySelectorAll('.all')
var goodsArr = document.querySelectorAll('.goods')
var goods1Arr = document.querySelectorAll('.goods1')
function checkedAll(arr,statr){
		for (var i = 0; i < arr.length; i++) {
			arr[i].checked = statr
		}
	}
//一上来所有按钮全选
for (var i = 0; i < typeArr.length; i++) {
	typeArr[i].checked =true

}

//全选按钮
for (let i = 0; i < allsArr.length; i++) {
	allsArr[i].onchange = function(){
		var allchecked =allsArr[i].checked
		checkedAll(typeArr,allchecked)
	}
}
//店铺按钮
for (let i = 0; i < allArr.length; i++) {
	allArr[i].onchange =function(){
		var allArrchecked = this.checked
		this.parentNode.parentNode.parentNode.querySelectorAll('commodity input[type=checkbox]').checked=allArrchecked
		if (this.checked) {
			var allTrue = true
			for (let h = 0; h < allArr.length; h++) {
				if (allArr[h].checked === false) {
					allTrue = false
				}	
			}
			if (allTrue) {
				checkedAll(allsArr,true)
			}
		}else{

			for (var j = 0; j < allsArr.length; j++) {
				allsArr[j].checked = false
			}
			checkedAll(allsArr,false)
			
		}
	}
}
//商品按钮

for (let i = 0; i < goodsArr.length; i++) {
	goodsArr[i].onchange =function(){
		if (this.checked) {
			document.querySelector('.alla').checked=true
		}
		
	}
}




//第二个店铺商品按钮
for (let i = 0; i < goods1Arr.length; i++) {
	goods1Arr[i].onchange =function(){
		if (this.checked) {
			document.querySelector('.allaa').checked=true
		}
	}
}

//加号
var plusArr = document.querySelectorAll('.plus')
for (let i = 0; i < plusArr.length; i++) {
	plusArr[i].onclick=function(){
		var num = this.parentNode.querySelector('.number').innerText
		num++
		this.parentNode.querySelector('.number').innerText=num
		var pic = this.parentNode.parentNode.querySelector('.pic').innerText
		this.parentNode.parentNode.querySelector('.sum').innerText = (num * pic).toFixed(2)
		total(goodsArr)
		totals(allArr)
		total(goods1Arr)
	}
}

//减号
var minusArr = document.querySelectorAll('.minus')
for (let i = 0; i < minusArr.length; i++) {
	minusArr[i].onclick=function(){
		var num = this.parentNode.querySelector('.number').innerText
		if (num>1) {
		num--
		this.parentNode.querySelector('.number').innerText=num
		}
		var pic = this.parentNode.parentNode.querySelector('.pic').innerText
		this.parentNode.parentNode.querySelector('.sum').innerText = (num * pic).toFixed(2)
		total(goods1Arr)
		total(goodsArr)
		totals(allArr)
	}
}

