$( document ).ready(function() {
	$.get("data/challenges.json", function(data) {
		var template = $("#challenge-page-container div.challenge-page");
		$.each (data.challenges, function(index, challenge) {
			var panel = template.clone();
			if (challenge.id == $("#challenge-id").text()) {
				panel.find("div.banner h2.name").text(challenge.name);
				panel.find("div.banner h3.city").text(challenge.city);
				if (challenge.organisationImg) {
					panel.find("div.challenge-title img.sponsor").attr("src", challenge.organisationImg);
					panel.find("div.challenge-title img.sponsor").attr("alt", challenge.organisation);
				}
				else {
					panel.find("div.challenge-title img.sponsor").attr("src", "images/healthhack-logo/HH_Logo.svg");
					panel.find("div.challenge-title img.sponsor").attr("alt", "Health-Hack");
				}
		//	panel.find("div.challenge-title img.sponsor").attr("src", challenge.organisationImg);
	  //	panel.find("div.challenge-title img.sponsor").attr("alt", challenge.organisation);
		    panel.find("div.organiser-details p").text("Presented by " + challenge.presenters);
				panel.find("div.organiser-details a").text(challenge.organisation);
				panel.find("div.organiser-details a").attr("href", challenge.organisationLink);
				panel.find("div.challenge-data p.description").html(challenge.description);
		//	panel.find("div.challenge-data a.team").attr("href", challenge.teamLink);
				if (challenge.team) {
					var demoPanel = $("<a></a>");
					demoPanel.html(
						"<b>VIEW TEAM INFORMATION</b>");
					demoPanel.addClass("team");
					demoPanel.attr("href", challenge.teamLink);
					demoPanel.appendTo(panel.find("div.details-panel"));
				}
				panel.appendTo("#challenge-page-container");
			}
		});
		$("#challenge-page-container div.challenge-page")[0].remove();
	});
});
