printjson(
db.people.aggregate(
{
"$match": {
    "$and":[
     {"nationality":"Poland"},
     {"sex":"Female"} 
    ]
  }
},
   {"$unwind": "$credit"},
   {"$group": {
        "_id": "$credit.currency",
        "Total Amount": { "$sum": { $toDouble: "$credit.balance" } },
		    "Average Amount": { "$avg": { $toDouble: "$credit.balance" } }
    }}
)
);