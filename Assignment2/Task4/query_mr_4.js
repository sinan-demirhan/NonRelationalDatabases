printjson(db.people.mapReduce(
   function() {
  
    var key =this.nationality;
    var value = { bmi:  parseFloat(this.weight)/ ((parseFloat(this.height)/100)*(parseFloat(this.height)/100)) ,count:1};
	
	emit(key, value);
},
   function(key, value) {
     constants = { max_value:0.00,min_value:10000, bmi:0.00, count:0.00 };
     
     my_results = {  Average_BMI:0.00, Maximum_BMI:0.00, Minimum_BMI:0};
     
     for (var j = 0; j < value.length; j++) {
       constants.max_value = Math.max( constants.max_value , value[j].bmi);
       constants.min_value = Math.min( constants.min_value , value[j].bmi);
       constants.bmi += value[j].bmi;
       constants.count += value[j].count;
       
     }
     my_results.Maximum_BMI = constants.max_value;
     my_results.Minimum_BMI = constants.min_value;
     my_results.Average_BMI = constants.bmi/constants.count;
     
     return my_results;
},
   { out: { inline: 1 } }

));