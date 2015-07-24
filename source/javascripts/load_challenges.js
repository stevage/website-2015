$( document ).ready(function() {
	$.get("data/challenges.json", function(data) {
		var template = $("#challenge-list div.list div.challenge-row");
		$.each (data.challenges, function(index, challenge) {
			var panel = template.clone();
			if (challenge.winner) {
				var winnerPanel = $("<span></span>");
				winnerPanel.html(
					"<span class=\"glyphicon glyphicon-star\"></span>" + " " + 
                    challenge.winner);
				winnerPanel.addClass("challenge-winner-label");
				winnerPanel.addClass("clearfix");
                winnerPanel.prependTo(panel.find("div:first-child"));
			}
			panel.find("h3.name").text(challenge.name);
			panel.find("p.city span").text(challenge.city);
			panel.find("p.city a").text(challenge.organisation);
			panel.find("p.city a").attr("href", challenge.organisationLink);
			panel.find("p.description").text(challenge.description);
			panel.find("a.workingDemoLink").attr("href", challenge.workingDemoLink);
			panel.find("a.detailsLink").attr("href", challenge.detailsLink);
			panel.appendTo("#challenge-list div.list");
		});

		$("#challenge-list div.list div.challenge-row")[0].remove();
	}).always(function() {
	      var monkeyList = new List('challenge-list', {
	      valueNames: [ 'name', 'city', 'description', 'hightlight' ],
	      page: 3,
	      plugins: [ ListPagination({}) ]
	    });
	});
});