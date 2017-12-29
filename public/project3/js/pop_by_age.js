$.getJSON("data/populations.json", function(jsonData){
	var colData = [];


  // TODO
  // populate colData
  for(var i = 0; i < jsonData.USA.length; i++){
	var ac = [jsonData.USA[i].age[0] + jsonData.USA[i].age[1] + "-" + jsonData.USA[i].age[2] + jsonData.USA[i].age[3], jsonData.USA[i].value];
  	colData.push(ac);
  }
	chart = c3.generate({
		bindto: "#population-chart",
		size: {
			height: 450
		},	
		data: {
			columns: colData,
			type : 'pie'
		}
	});	
});
