$(document).ready(function(){
	// Remove no-javascript class if js is enabled
	$("body.no-javascript").removeClass("no-javascript")

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
			var audioSource = audio.find(">:first-child").attr("src");
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'"><img src="img/' + audio.attr("class") + '.png"/></a><br /><div style="margin-left: 25%">'+audio.attr("title")+'"<a href="'+audioSource+'">💾</a></div></li>').click(function() {that.play();}));
	});

});
