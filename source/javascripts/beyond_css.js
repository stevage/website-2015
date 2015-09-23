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
    // vertically center the first div within another div using margins
    $(container).each(function() {
        var $outer = $(this);
        var $inner = $outer.children().first();
        var $mrg = ($outer.height() - $inner.height())/2;
        $($inner.children()[1]).css('margin-top',$mrg+'px');
    });
};

load_sponsors = function(load_data, names) {
    console.log(names);
    if  (load_data) {
        $.get("./data/sponsors.json", function(data) {
            $.each(names, function(index, s_name) {
                var sponsor_data = data[s_name];
                console.log(sponsor_data);
                $("#"+s_name+"-href").attr("href", sponsor_data["href"]);
                $("#"+s_name+"-img").attr("alt", sponsor_data["displayName"]);
                $("#"+s_name+"-img").attr("src", "./images/sponsors/" + sponsor_data["img"]);
                $("#"+s_name+"-desc").html(sponsor_data["text"]);
                console.log("AF:", s_name);
            });
            equalheight('.sponsor-block-cn');
            centrewithin('.sponsor-block-cn');
        });

    } else {
        equalheight('.sponsor-block-cn');
        centrewithin('.sponsor-block-cn');
    }
};
