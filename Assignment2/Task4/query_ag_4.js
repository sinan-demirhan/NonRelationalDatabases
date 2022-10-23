printjson(
db.people.aggregate({ "$group": {
        "_id": "$nationality",
        "BMI AVG ": { "$avg": {
				"$divide":[
							{ $toDouble: "$weight" },
								{"$multiply":[
											  {
												"$divide":[
												{ $toDouble: "$height" },100 ]
												
												},
												 {
													"$divide":[
													{ $toDouble: "$height" },100 ]
												
												}
												
											]
				
								}
						]
					}
			},
			
			   "BMI MAX ": { "$max": {
				"$divide":[
							{ $toDouble: "$weight" },
								{"$multiply":[
											  {
												"$divide":[
												{ $toDouble: "$height" },100 ]
												
												},
												 {
													"$divide":[
													{ $toDouble: "$height" },100 ]
												
												}
												
											]
				
								}
						]
					}
			},
			
			  "BMI MIN ": { "$min": {
				"$divide":[
							{ $toDouble: "$weight" },
								{"$multiply":[
											  {
												"$divide":[
												{ $toDouble: "$height" },100 ]
												
												},
												 {
													"$divide":[
													{ $toDouble: "$height" },100 ]
												
												}
												
											]
				
								}
						]
					}
			}
			
    }
}
));
