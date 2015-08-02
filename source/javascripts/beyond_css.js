equalheight = function(container) {
    // make a collection of containers all the same height
    var currentTallest = 0,
        currentRowStart = 0,
        rowDivs = new Array(),
        $el,
        topPosition = 0;
    
    $(container).each(function() {
        var $el = $(this);
        $($el).height('auto');
        topPostion = $el.position().top;

        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            rowDivs[currentDiv].height(currentTallest);
        }
    });
};

centrewithin = function(container) {
    // center a div within another div using margins
    $(container).each(function() {
        var $outer = $(this);
        var $inner = $outer.children().first();

        console.log($outer.html());
        console.log($inner.html());
        console.log("poss");
        var $mrg = ($outer.height() - $inner.height())/2;
        $($inner.children()[1]).css('margin-top',$mrg+'px');
    });
};
