var applyScrolling = function (arr, cb) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(null, i, arr[i])
    }
  }
  
  // 注意如果有使用 router 那麼自訂一個 class 可以避免一些問題
var anchors = document.querySelectorAll(("[href*='#']"));
if (window.scrollTo) {
applyScrolling(anchors, function (index, el) {
    var target = document.getElementById(el.getAttribute('href').substring(1))

    el.addEventListener('click', function (e) {
    console.log(target)
    e.preventDefault()
    // 這邊跟新的 method 參數是不同的。
    window.scrollTo(0, target.offsetTop)
    })
})
}