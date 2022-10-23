printjson(db.people.mapReduce(
   function() {
  
    var key =this.sex;
    var value = { weight:  parseFloat(this.weight), height: parseFloat(this.height) ,count:1};
	
	emit(key, value);
},
   function(key, value) {
   
   my_initials = { weight: 0.00, height: 0.00,count: 0.00};
   
   my_results = { average_weight:0, average_height:0};
 
 for (var i = 0; i < value.length; i++) {
       my_initials.weight +=value[i].weight;
       my_initials.height +=value[i].height;
       my_initials.count+=value[i].count;
   }
    
	my_results.average_weight = my_initials.weight/ my_initials.count;
	
	my_results.average_height = my_initials.height/ my_initials.count;
	
   return my_results;
},
   { out: { inline: 1 } }

));