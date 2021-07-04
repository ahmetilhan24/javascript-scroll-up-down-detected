
var scrollDetected = {
    el: {
        searchBar: ".your-element",
        lastScrollY: 0
    },
    cls: {
        show: "element-show"
    },
    scrolled: function(){
        var _t = this;
        if(document.querySelector(_t.el.searchBar)){
            document.addEventListener("scroll", function(){
                var sTop = pageYOffset || document.documentElement.scrollTop;
                if (sTop > _t.el.lastScrollY) {
                    document.querySelector(_t.el.searchBar).classList.add(_t.cls.show);
                }
                else{
                    document.querySelector(_t.el.searchBar).classList.remove(_t.cls.show)
                }
                _t.el.lastScrollY = sTop <= 0 ? 0 : sTop;
            })
        }
    },
    init: function(){
        var _t = this;
        _t.scrolled();
    }
}

scrollDetected.init();