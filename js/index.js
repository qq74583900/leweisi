
//幻灯片
function getByClass(oParent,sClass) {
        var aMent = oParent.getElementsByTagName("*");
        var aEle = [];
        for (var i = 0; i < aMent.length; i++) {
            if (aMent[i].className == sClass) {
                aEle.push(aMent[i]);
            }
        }
        return aEle;
    };
    window.onload = function () {
        var oDiv = document.getElementById("playments");
        var oBtnleft = getByClass(oDiv, "btnleft")[0];
        var oBtnright = getByClass(oDiv, "btnright")[0];
        var oMarkleft = getByClass(oDiv, "markleft")[0];
        var oMarkright = getByClass(oDiv, "markright")[0];
        oBtnleft.onmouseover = oMarkleft.onmouseover = function () {
            move(oBtnleft, 'opacity', 100);
        };
        oBtnleft.onmouseout = oMarkleft.onmouseout = function () {
            move(oBtnleft, 'opacity', 0);
        };
        oBtnright.onmouseover = oMarkright.onmouseover = function () {
            move(oBtnright, 'opacity', 100);
        };
        oBtnright.onmouseout = oMarkright.onmouseout = function () {
            move(oBtnright, 'opacity', 0);
        };

        var oBigUl = getByClass(oDiv, "bigimgsul")[0];
        var aBigLi = oBigUl.getElementsByTagName("li");
        var oSmallDiv = getByClass(oDiv, "smallimgs")[0];
        var oSmallUl = oSmallDiv.getElementsByTagName("ul")[0];
        var aSmallLi = oSmallDiv.getElementsByTagName("li");
        var nowZIndex = 2;
        var now = 0;
        oSmallUl.style.width = (aSmallLi.length + aSmallLi.length / 8) * aSmallLi[0].offsetWidth + 'px';
        for (var i = 0; i < aSmallLi.length; i++) {
            aSmallLi[i].index = i;
            aSmallLi[i].onclick = function () {
                if (this.index == now) return;
                now = this.index;
                tab();
            };
            aSmallLi[i].onmouseover = function () {
                move(this, 'opacity', 100)
            };
            aSmallLi[i].onmouseout = function () {
                if (this.index != now) {
                    move(this, 'opacity', 40)
                };
            };
        };
        function tab() {
            aBigLi[now].style.zIndex = nowZIndex++;
            for (var j = 0; j < aSmallLi.length; j++) {
                move(aSmallLi[j], 'opacity', 40)
            };
            move(aSmallLi[now], 'opacity', 100);
            aBigLi[now].style.height = 0;
            move(aBigLi[now], 'height', 333);
            if (now == 0 || now == 1 || now == 2 || now == 3) {
                move(oSmallUl, 'left', 10);
            }
            else if (now == aSmallLi.length - 1) {
                move(oSmallUl, 'left', -(now - 3) * (aSmallLi[0].offsetWidth + 10) + 10);
            }
            else if (now == aSmallLi.length - 2) {
                move(oSmallUl, 'left', -(now - 2) * (aSmallLi[0].offsetWidth + 10) + 10);
            }
            else if (now == aSmallLi.length - 3) {
                move(oSmallUl, 'left', -(now - 1) * (aSmallLi[0].offsetWidth + 10) + 10);
            }
            else {
                move(oSmallUl, 'left', -(now) * (aSmallLi[0].offsetWidth + 10) + 10);
            }
        };

        oBtnleft.onclick = function () {
            now--;
            if (now == -1) {
                now = aSmallLi.length - 1;
            };
            tab();
        };
        oBtnright.onclick = function () {
            now++;
            if (now == aSmallLi.length) {
                now = 0;
            };
            tab();
        };
            var timer = setInterval(oBtnright.onclick, 5000);
            oDiv.onmouseover = function () {
                clearInterval(timer);
            };
            oDiv.onmouseout = function () {
                timer = setInterval(oBtnright.onclick, 5000);
            };
    };

