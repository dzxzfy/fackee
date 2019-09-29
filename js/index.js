window.onload = function(){
	//导航栏特效
	var headernav = document.getElementsByClassName("header-nav")[0];
	var oa = headernav.getElementsByTagName("a");
	for(var i=1;i<oa.length;i++){
		oa[i].onmouseover = function(){
			this.parentNode.getElementsByClassName("line")[0].style.width="100%";
			this.style.color="#5de0fe";
		}
		oa[i].onmouseout = function(){
			this.parentNode.getElementsByClassName("line")[0].style.width="0px";
			this.style.color="white";
		}
	}
	
	//鼠标滑过查看详情
	var details = document.getElementsByClassName("details")[0];
	details.onmouseover = function(){
		this.style.color = "black";
		this.style.background = "white";
		this.style.border = "solid 1px white";
	}
	details.onmouseout = function(){
		this.style.color = "white";
		this.style.background = "";
		this.style.border = "solid 1px #5de0fe";
	}
	
	//info1 往上移动
	var info1 = document.getElementsByClassName("info1")[0];
	var h1 = info1.getElementsByTagName("h1")[0];
	var p = info1.getElementsByTagName("p")[0];
	var a = info1.getElementsByTagName("a")[0];
	h1.style.top = "0px";
	p.style.top = "0px";
	a.style.top = "0px";
	
	//最新动态
	var li1 = document.getElementsByClassName("li1")[0];
	var li2 = document.getElementsByClassName("li2")[0];
	var li3 = document.getElementsByClassName("li3")[0];
	li1.onmouseenter = function(){
		console.log("a")
		li1.style.background = "url(img/ia_100000004.png) center center/100%";
		timer1 = setTimeout(function(){
			li1.style.transition = "all 0.5s";
			li1.style.background = "url(img/ia_100000004.png) center center/105%";
		},100)
	}
	li1.onmouseleave = function(){
		li1.style.background = "#f2f2f2";
		li1.style.transition = "";
		clearTimeout(timer1)
	};
	li2.onmouseenter = function(){
		console.log("a")
		this.style.background = "url(img/ia_100000005.jpg) center center/100%";
		timer2 = setTimeout(function(){
			li2.style.transition = "all 0.5s";
			li2.style.background = "url(img/ia_100000005.jpg) center center/105%";
		},100)
	};
	li2.onmouseleave = function(){
		this.style.background = "#f2f2f2";
		this.style.transition = "";
		clearTimeout(timer2)
	};
	li3.onmouseenter = function(){
		this.style.background = "url(img/ia_100000006.png) center center/100%";
		timer3 =  setTimeout(function(){
			li3.style.transition = "all 0.5s";
			li3.style.background = "url(img/ia_100000006.png) center center/105%";
		},100)
	};
	li3.onmouseleave = function(){
		this.style.background = "#f2f2f2";
		this.style.transition = "";
		clearTimeout(timer3)
	}
	
	//第三块盒子
	var box3list = document.getElementsByClassName("box3-list")[0];
	var box3li = box3list.getElementsByTagName("li");
	for(var i=0;i<box3li.length;i++){
		box3li[i].w = 140;
		box3li[i].h = 70;
		box3li[i].onmouseenter = function(){
			var that = this;
			that.w = 140;
			that.h = 70;
			that.left = 0;
			clearInterval(that.timer4);
			clearInterval(that.timer5);			
			that.timer4 = setInterval(function(){
				that.w+=2;
				that.h+=1;
				that.left-=1;
				if(that.w>=160){
					clearInterval(that.timer4);
				}
				that.getElementsByTagName("div")[0].style.backgroundSize = that.w+"px"+" "+that.h+"px";
				that.getElementsByClassName('right-text1')[0].style.left = that.left+"px";
			},30)
		};
		box3li[i].onmouseleave = function(){
			var that = this;
			clearInterval(that.timer5);
			clearInterval(that.timer4);
			that.timer5 = setInterval(function(){
				that.w-=2;
				that.h-=1;
				that.left+=1;
				if(that.w<=140){
					clearInterval(that.timer5);
				}
				that.getElementsByTagName("div")[0].style.backgroundSize = that.w+"px"+" "+that.h+"px";
				that.getElementsByClassName('right-text1')[0].style.left = that.left+"px";
			},30)
		}
	}
	//box3-footer向上滚动
	var number = document.getElementsByClassName("number")[0];
	window.onscroll = function(){
		var top = document.documentElement.scrollTop||document.body.scrollTop;
		if(top>=1000){
			number.style.top = 0; 
		}
	}
	
	//box4
	var btn1 = document.getElementsByClassName("btn1")[0];
	var btn2 = document.getElementsByClassName("btn2")[0];
	var box411 = document.getElementsByClassName("box411")[0];
	btn1.onclick = function(){
		box411.style.left = 0+"px"
		this.style.background = "white";
		btn2.style.background = "blue";
	}
	btn2.onclick = function(){
		box411.style.left = -775+"px"
		this.style.background = "white";
		btn1.style.background = "blue";
	}
}
