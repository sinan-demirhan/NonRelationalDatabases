printjson(db.people.mapReduce(
   function() {
      for (var i = 0; i < this.credit.length; i++) {
         var key = this.credit[i].currency;
         var value = { balance: parseFloat(this.credit[i].balance) };
         emit(key, value);
      }
},
   function(my_key, my_values) {
   my_result = { TotalAmount: 0 };
   for (var j = 0; j < my_values.length; j++) {
         my_result.TotalAmount += my_values[j].balance;
        
   }
   return my_result;
},
   { out: { inline: 1 } }

));