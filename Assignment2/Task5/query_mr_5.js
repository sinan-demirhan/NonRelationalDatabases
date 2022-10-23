printjson(db.people.mapReduce(
   function() {
      for (var i = 0; i < this.credit.length; i++) {
		 
		 if(this.sex=="Female" && this.nationality=="Poland") {
			 var key = this.credit[i].currency ;
		     var value = { balance: parseFloat(this.credit[i].balance) };
			 emit(key, value);
		 }
      }
},
   function(key, value) {
   my_results = { TotalAmount: 0,AverageAmount: 0};
   my_count = 0
   for (var j = 0; j < value.length; j++) {
         my_results.TotalAmount += value[j].balance;
		 my_count += 1;
   }
   my_results.AverageAmount =   my_results.TotalAmount / my_count;
      
   return my_results;
},
   { out: { inline: 1 } }

));