$(document).ready(function(){

    
var myRequest = new XMLHttpRequest()
	myRequest.open('GET', 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-29&api_key=Lhfmo5GJFKkymB61crhYsjHIUjNc8Eq8iuFBr4pn')
	myRequest.onload = function() {
		var myData = JSON.parse(myRequest.responseText)
		console.log(myData)
		
		var asteroidName7 = JSON.stringify(myData.near_earth_objects['2017-07-23']['1'].name)
		var asteroidDiameter7 = JSON.stringify(myData.near_earth_objects['2017-07-23']['1'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity7 = JSON.stringify(myData.near_earth_objects['2017-07-23']['1'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance7 = JSON.stringify(myData.near_earth_objects['2017-07-23']['1'].close_approach_data[0].miss_distance.miles)


		$("#asteroid-info7").append('<p>' + 'name : ' + asteroidName7 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter7 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity7 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance7 + '</p>')

		var asteroidName2 = JSON.stringify(myData.near_earth_objects['2017-07-23']['4'].name)
		var asteroidDiameter2 = JSON.stringify(myData.near_earth_objects['2017-07-23']['4'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity2 = JSON.stringify(myData.near_earth_objects['2017-07-23']['4'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance2 = JSON.stringify(myData.near_earth_objects['2017-07-23']['4'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info2").append('<p>' + 'name : ' + asteroidName2 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter2 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity2 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance2 + '</p>')
		
		var asteroidName3 = JSON.stringify(myData.near_earth_objects['2017-07-23']['5'].name)
		var asteroidDiameter3 = JSON.stringify(myData.near_earth_objects['2017-07-23']['5'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity3 = JSON.stringify(myData.near_earth_objects['2017-07-23']['5'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance3 = JSON.stringify(myData.near_earth_objects['2017-07-23']['5'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info3").append('<p>' + 'name : ' + asteroidName3 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter3 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity3 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance3 + '</p>')

		var asteroidName4 = JSON.stringify(myData.near_earth_objects['2017-07-23']['10'].name)
		var asteroidDiameter4 = JSON.stringify(myData.near_earth_objects['2017-07-23']['10'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity4 = JSON.stringify(myData.near_earth_objects['2017-07-23']['10'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance4 = JSON.stringify(myData.near_earth_objects['2017-07-23']['10'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info4").append('<p>' + 'name : ' + asteroidName4 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter4 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity4 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance4 + '</p>')

		var asteroidName5 = JSON.stringify(myData.near_earth_objects['2017-07-25']['3'].name)
		var asteroidDiameter5 = JSON.stringify(myData.near_earth_objects['2017-07-25']['3'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity5 = JSON.stringify(myData.near_earth_objects['2017-07-25']['3'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance5 = JSON.stringify(myData.near_earth_objects['2017-07-25']['3'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info5").append('<p>' + 'name : ' + asteroidName5 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter5 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity5 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance5 + '</p>')

		var asteroidName6 = JSON.stringify(myData.near_earth_objects['2017-07-25']['7'].name)
		var asteroidDiameter6 = JSON.stringify(myData.near_earth_objects['2017-07-25']['7'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity6 = JSON.stringify(myData.near_earth_objects['2017-07-25']['7'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance6 = JSON.stringify(myData.near_earth_objects['2017-07-25']['7'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info6").append('<p>' + 'name : ' + asteroidName6 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter6 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity6 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance6 + '</p>')

		var asteroidName = JSON.stringify(myData.near_earth_objects['2017-07-27']['1'].name)
		var asteroidDiameter = JSON.stringify(myData.near_earth_objects['2017-07-27']['1'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity = JSON.stringify(myData.near_earth_objects['2017-07-27']['1'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance = JSON.stringify(myData.near_earth_objects['2017-07-27']['1'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info").append('<p>' + 'name : ' + asteroidName + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance + '</p>')
	
		var asteroidName8 = JSON.stringify(myData.near_earth_objects['2017-07-27']['3'].name)
		var asteroidDiameter8 = JSON.stringify(myData.near_earth_objects['2017-07-27']['3'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity8 = JSON.stringify(myData.near_earth_objects['2017-07-27']['3'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance8 = JSON.stringify(myData.near_earth_objects['2017-07-27']['3'].close_approach_data[0].miss_distance.miles)	

		$("#asteroid-info8").append('<p>' + 'name : ' + asteroidName8 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter8 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity8 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance8 + '</p>')

		var asteroidName9 = JSON.stringify(myData.near_earth_objects['2017-07-27']['8'].name)
		var asteroidDiameter9 = JSON.stringify(myData.near_earth_objects['2017-07-27']['8'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity9 = JSON.stringify(myData.near_earth_objects['2017-07-27']['8'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance9 = JSON.stringify(myData.near_earth_objects['2017-07-27']['8'].close_approach_data[0].miss_distance.miles)	

		$("#asteroid-info9").append('<p>' + 'name : ' + asteroidName9 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter9 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity9 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance9 + '</p>')

		var asteroidName10 = JSON.stringify(myData.near_earth_objects['2017-07-28']['2'].name)
		var asteroidDiameter10 = JSON.stringify(myData.near_earth_objects['2017-07-28']['2'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity10 = JSON.stringify(myData.near_earth_objects['2017-07-28']['2'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance10 = JSON.stringify(myData.near_earth_objects['2017-07-28']['2'].close_approach_data[0].miss_distance.miles)	

		$("#asteroid-info10").append('<p>' + 'name : ' + asteroidName10 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter10 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity10 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance10 + '</p>')

		var asteroidName11 = JSON.stringify(myData.near_earth_objects['2017-07-29']['2'].name)
		var asteroidDiameter11 = JSON.stringify(myData.near_earth_objects['2017-07-29']['2'].estimated_diameter.feet.estimated_diameter_max)
		var asteroidVelocity11 = JSON.stringify(myData.near_earth_objects['2017-07-29']['2'].close_approach_data[0].relative_velocity.miles_per_hour)
		var asteroidDistance11 = JSON.stringify(myData.near_earth_objects['2017-07-29']['2'].close_approach_data[0].miss_distance.miles)

		$("#asteroid-info11").append('<p>' + 'name : ' + asteroidName11 + '</p>' + '<p>' + 'max diameter (ft) : ' + asteroidDiameter11 + '</p>' + '<p>' + "velocity (mph) : " + asteroidVelocity11 + '</p>' + '<p>' + 'Distance (miles) : ' + asteroidDistance11 + '</p>')


}


myRequest.send()

	
})

