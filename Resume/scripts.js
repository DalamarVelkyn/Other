$(document).ready(function ()
{	

	$(".cover").ready(function ()
	{
		setTimeout(text, 1000)
		
		function text()
		{
			$(".cover").css("animation-name", "fadein")
			$(".cover").css("animation-duration", "1s")
			$(".cover").css("animation-timing-functions", "linear")
		}
		
		setTimeout(delay, 2000);
		
		function delay()
		{
			$(".cover").css("opacity", "1")
		}
	});
	
	$(".close-panel").click(function ()
	{
		
		$(".cover").css("animation-name", "fadeout")
		$(".cover").css("animation-duration", "1s")
		$(".cover").css("animation-timing-functions", "linear")
		
		setTimeout(movescroll, 1000);
		
		function movescroll()
		{
			$(".cover").css("opacity", "0")
			$(".front-panel").css("transform", "rotate(90deg)")
			$(".front-panel").css("transition", "transform 5s")
			$(".close-panel").css("display", "none")
			$(".front-panel").css("animation-name", "contract")
			$(".front-panel").css("animation-duration", "5s")
			$(".front-panel").css("animation-timing-function", "linear")
			$(".front-panel-bottom").css("animation-name", "scrollanimin")
			$(".front-panel-bottom").css("animation-duration", "5s")
			$(".front-panel-bottom").css("animation-timing-function", "linear")
		}
		
		setTimeout(putaway, 6000);
			
		function putaway()
		{
				
			$(".front-panel").css("animation-name", "")
			$(".front-panel-bottom").css("animation-name", "")
			$(".front-panel").css("height", "80px")
			$(".front-panel").css("top", "250px")
			$(".front-panel").css("left", "70%")
			$(".front-panel-bottom").css("top", "50px")
			$(".open-panel").css("display", "block")
		}
	});
	
	$(".open-panel").click(function ()
	{
		$(".front-panel").css("padding", "")
		$(".front-panel").css("transform", "rotate(0deg)")
		$(".front-panel").css("transition", "transform 5s")
		$(".front-panel").css("animation-name", "expand")
		$(".front-panel").css("animation-duration", "5s")
		$(".front-panel").css("animation-timing-function", "linear")
		$(".front-panel-bottom").css("animation-name", "scrollanimout")
		$(".front-panel-bottom").css("animation-duration", "5s")
		$(".front-panel-bottom").css("animation-timing-function", "linear")
		$(".open-panel").css("display", "none")
		
			setTimeout(takeout, 5000);
			
			function takeout()
			{
				$(".cover").css("animation-name", "fadein")
				$(".cover").css("animation-duration", "1s")
				$(".cover").css("animation-timing-functions", "linear")
				$(".front-panel").css("animation-name", "")
				$(".front-panel").css("height", "650px")
				$(".front-panel").css("top", "60px")
				$(".front-panel").css("left", "400px")
				$(".front-panel-bottom").css("top", "590px")
				$(".close-panel").css("display", "block")
				$(".front-panel").css("font-size", "13px")
			}
			
			setTimeout(text, 6000)
			
			function text()
			{
				$(".cover").css("opacity", "1")	
			}
		
	});
	
	$(".general-info").click(function ()
	{
		$(".general-info").css("pointer-events", "auto")
		$(".education").css("pointer-events", "auto")
		$(".skills").css("pointer-events", "auto")
		$(".work-experience").css("pointer-events", "auto")
		$(".general-info-open").css("opacity", "0")
		$(".education-open").css("opacity", "0")
		$(".skills-open").css("opacity", "0")
		$(".work-experience-open").css("opacity", "0")
		$(".general-info-open").css("animation-name", "fadein")
		$(".general-info-open").css("animation-duration", "1s")
		$(".general-info-open").css("animation-timing-function", "linear")
		$(".education-open").css("animation-name", "fadeout")
		$(".education-open").css("animation-duration", "1s")
		$(".education-open").css("animation-timing-function", "linear")
		$(".skills-open").css("animation-name", "fadeout")
		$(".skills-open").css("animation-duration", "1s")
		$(".skills-open").css("animation-timing-function", "linear")
		$(".work-experience-open").css("animation-name", "fadeout")
		$(".work-experience-open").css("animation-duration", "1s")
		$(".work-experience-open").css("animation-timing-function", "linear")
		
		setTimeout(show, 1000);
		
		function show()
		{
			$(".general-info").css("pointer-events", "none")
			$(".general-info-open").css("opacity", "1")
			$(".education-open").css("animation-name", "")
			$(".skills-open").css("animation-name", "")
			$(".work-experience-open").css("animation-name", "")
			$(".general-info-open").css("animation-name", "")
			$(".back-panel").css("text-shadow", "0px 0px 0px black, 0px 0px 0px black")
			$(".back-panel").css("color", "black")
		}
		
	});
	
	$(".education").click(function ()
	{
		$(".general-info").css("pointer-events", "auto")
		$(".education").css("pointer-events", "auto")
		$(".skills").css("pointer-events", "auto")
		$(".work-experience").css("pointer-events", "auto")
		$(".general-info-open").css("opacity", "0")
		$(".education-open").css("opacity", "0")
		$(".skills-open").css("opacity", "0")
		$(".work-experience-open").css("opacity", "0")
		$(".general-info-open").css("animation-name", "fadeout")
		$(".general-info-open").css("animation-duration", "1s")
		$(".general-info-open").css("animation-timing-function", "linear")
		$(".education-open").css("animation-name", "fadein")
		$(".education-open").css("animation-duration", "1s")
		$(".education-open").css("animation-timing-function", "linear")
		$(".skills-open").css("animation-name", "fadeout")
		$(".skills-open").css("animation-duration", "1s")
		$(".skills-open").css("animation-timing-function", "linear")
		$(".work-experience-open").css("animation-name", "fadeout")
		$(".work-experience-open").css("animation-duration", "1s")
		$(".work-experience-open").css("animation-timing-function", "linear")
		
		setTimeout(show, 1000);
		
		function show()
		{
			$(".education").css("pointer-events", "none")
			$(".education-open").css("opacity", "1")
			$(".education-open").css("animation-name", "")
			$(".skills-open").css("animation-name", "")
			$(".education").css("animation-name", "")
			$(".work-experience-open").css("animation-name", "")
			$(".general-info-open").css("animation-name", "")
			$(".back-panel").css("text-shadow", "0px 0px 0px black, 0px 0px 0px black")
			$(".back-panel").css("color", "black")
		}
		
	});
	
	$(".skills").click(function ()
	{
		$(".general-info").css("pointer-events", "auto")
		$(".education").css("pointer-events", "auto")
		$(".skills").css("pointer-events", "auto")
		$(".work-experience").css("pointer-events", "auto")
		$(".general-info-open").css("opacity", "0")
		$(".education-open").css("opacity", "0")
		$(".skills-open").css("opacity", "0")
		$(".work-experience-open").css("opacity", "0")
		$(".general-info-open").css("animation-name", "fadeout")
		$(".general-info-open").css("animation-duration", "1s")
		$(".general-info-open").css("animation-timing-function", "linear")
		$(".education-open").css("animation-name", "fadeout")
		$(".education-open").css("animation-duration", "1s")
		$(".education-open").css("animation-timing-function", "linear")
		$(".skills-open").css("animation-name", "fadein")
		$(".skills-open").css("animation-duration", "1s")
		$(".skills-open").css("animation-timing-function", "linear")
		$(".work-experience-open").css("animation-name", "fadeout")
		$(".work-experience-open").css("animation-duration", "1s")
		$(".work-experience-open").css("animation-timing-function", "linear")
		
		setTimeout(show, 1000);
		
		function show()
		{
			$(".skills").css("pointer-events", "none")
			$(".skills-open").css("opacity", "1")
			$(".education-open").css("animation-name", "")
			$(".skills-open").css("animation-name", "")
			$(".work-experience-open").css("animation-name", "")
			$(".general-info-open").css("animation-name", "")
			$(".back-panel").css("text-shadow", "0px 0px 0px black, 0px 0px 0px black")
			$(".back-panel").css("color", "black")
		}
		
	});
	
	$(".work-experience").click(function ()
	{
		$(".general-info").css("pointer-events", "auto")
		$(".education").css("pointer-events", "auto")
		$(".skills").css("pointer-events", "auto")
		$(".work-experience").css("pointer-events", "auto")
		$(".general-info-open").css("opacity", "0")
		$(".education-open").css("opacity", "0")
		$(".skills-open").css("opacity", "0")
		$(".work-experience-open").css("opacity", "0")
		$(".general-info-open").css("animation-name", "fadeout")
		$(".general-info-open").css("animation-duration", "1s")
		$(".general-info-open").css("animation-timing-function", "linear")
		$(".education-open").css("animation-name", "fadeout")
		$(".education-open").css("animation-duration", "1s")
		$(".education-open").css("animation-timing-function", "linear")
		$(".skills-open").css("animation-name", "fadeout")
		$(".skills-open").css("animation-duration", "1s")
		$(".skills-open").css("animation-timing-function", "linear")
		$(".work-experience-open").css("animation-name", "fadein")
		$(".work-experience-open").css("animation-duration", "1s")
		$(".work-experience-open").css("animation-timing-function", "linear")
		
		setTimeout(show, 1000);
		
		function show()
		{
			$(".work-experience").css("pointer-events", "none")
			$(".work-experience-open").css("opacity", "1")
			$(".education-open").css("animation-name", "")
			$(".skills-open").css("animation-name", "")
			$(".work-experience-open").css("animation-name", "")
			$(".general-info-open").css("animation-name", "")
			$(".back-panel").css("text-shadow", "0px 0px 0px black, 0px 0px 0px black")
			$(".back-panel").css("color", "black")
		}
		
	});
	
});