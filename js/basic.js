/**
 * Created by ricky on 2016/9/22.
 */
/*写入 HTML 输出*/
document.write("<p>hello world</p>")
/*改变 HTML 内容*/
function changeContent() {
    x = document.getElementById("demo");
    x.innerHTML = "Hello JavaScript";
}
/*改变图片*/
function changeImg() {
    x = document.getElementById("light");
    var match = x.src.match("bulbon");
    if (match) {
        x.src = "http://www.w3school.com.cn/i/eg_bulboff.gif"
    } else {
        x.src = "http://www.w3school.com.cn/i/eg_bulbon.gif"
    }
}
/*验证输入*/
function checkInput() {
    var x = document.getElementById("inputWidget").value;
    if (x == "" || isNaN(x)) {
        alert("Not Numeric");
    } else {
        alert("check ok")
    }
}