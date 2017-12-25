$.getJSON("data/populations.json", function(jsonData){
	var colData = [];


  // TODO
  // populate colData
  for(var i = 0; i < jsonData.USA.length; i++){
  		var ar = [jsonData.USA[i].age,jsonData.USA[i].value]
  		colData.push(ar);
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
