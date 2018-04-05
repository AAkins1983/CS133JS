/*
   New Perspectives on HTML, CSS, and JavaScript
   Tutorial 12
   Case Problem 2

   Author:  Sylvia Rangel 
   Date:    

   Filename: barchart.js

   Function List:

   totalVotes(votes)
      Returns the length of the items in the votes array

   calcPercent(item, sum)
      Returns the ratio item/sum expressed as a percent rounded to
      the nearest integer

   createBar(partyType, percent)
      Displays a horizontal bar chart with different bars for different
      party types, using the value of the percent parameter to determine
      the length of the bar

   showResults(race, name, party, votes) 
      Shows the race results for each name and party with bar charts created
      based on the votes array

*/
function totalVotes(votes)
{
	var total=0;
	for(var count = 0; count < votes.length; count++)
	{
		//alert("votes[i]"+votes[count]+" "+count);
		total += votes[count];
	}
	return total;
}

function calcPercent(item,sum)
{
	return Math.round(item/sum * 100.0);
}

function createBar(partyType,percent)
{
	var barText="";
	switch(partyType)
	{
		case 'D': barText = "<td class='dem'> </td>";
		break;
		case 'R': barText = "<td class='rep'> </td>";
		break;
		case 'I': barText = "<td class='ind'></td>";
		break;
		case 'G': barText = "<td class='green'></td>";
		break;
		case 'L': barText = "<td class='lib'></td>";
		break;
	}
	for (var i = 1; i <= percent; i++)
	{
		document.write(barText);
	}
}
function showResults(race,name,party,votes)
{
	
	var totalV = totalVotes(votes);
	//alert("totalV="+totalV);
	
	document.write("<h2>" + race +"</h2>");
	document.write("<table>");
	document.write("<tr>");
	document.write("<th>Candidate</th>");
	document.write("<th class='num'>Votes</th>");
	document.write("<th class='num'>%</th>");
	document.write("</tr>");
	
	for(m=0;m< name.length;m++)
	{
		document.write("<tr>");
		document.write("<td>"+name[m]+" ("+ party[m] +")</td>");
		document.write("<td class='num'>"+ votes[m] +"</td>");
		var percent = calcPercent(votes[m],totalV);
		document.write("<td class='num'>("+ percent +"%)</td>");
		
		createBar(party[m],percent);
		document.write("</tr>");
	}
	document.write("</table>");
}