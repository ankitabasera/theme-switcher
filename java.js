function changetheme()
{
	var v1 = document.body; 
	var theme = v1.classList;
	if(theme === "light")
	{
		theme.toggle("dark");
		document.getElementById("para").innerHTML = "Current theme is Dark.";

	}
	else
	{
		theme.toggle("light");
		document.getElementById("para").innerHTML = "Current theme is Light.";
	}
	//contentchange();
}
/*function changetheme()
{
	content = document.getElementById("para");
	if(content.innerHTML === "Current theme is Dark.");
	{
		content.innerHTML = "Current theme is Light.";

	}
	else
	{
		content.innerHTML = "Current theme is Dark.";
	}
}*/
