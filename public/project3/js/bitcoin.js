$.getJSON("data/bitcoin.11-17.json", function(allJSON){
	console.log(allJSON)
	xDateArray = ["x"], lowArray = ["low"], highArray = ["high"], openArray = ["open"] , CloseArray=["close"], VolumeArray = ["Volume"], WeightedArray = ["Weighted"];
	
	// TODO
	// populate xDateArray, lowArray, highArray
		for(var  i = 0 ; i < allJSON.dataset.data.length; i+=7){
			if(allJSON.dataset.data[i][0]>= "2015")
			xDateArray.push(allJSON.dataset.data[i][0]);
			lowArray.push(allJSON.dataset.data[i][1]);
			highArray.push(allJSON.dataset.data[i][2]);
			openArray.push(allJSON.dataset.data[i][3]);
			CloseArray.push(allJSON.dataset.data[i][4]);
			VolumeArray.push(allJSON.dataset.data[i][6]);
			WeightedArray.push(allJSON.dataset.data[i][7]);

		}


	var chart = c3.generate({
		bindto: "#bitcoin-chart",
		data: {
			x: 'x',
			xFormat: '%Y-%m-%d',
			columns: [
				xDateArray,
				highArray,
				openArray,
				CloseArray,
				VolumeArray,
				WeightedArray,
				lowArray
			]
		},
		axis: {
			x: {
				type: 'timeseries',
				tick: {
					format: '%Y-%m-%d'
				}
			}
		}
	});
});