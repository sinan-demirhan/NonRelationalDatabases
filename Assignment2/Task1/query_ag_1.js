printjson(
db.people.aggregate(
   {
    "$group": {
        "_id": "$sex",
        "Average Height": { "$avg": { $toDouble: "$height" } },
	"Average Weight": { "$avg": { $toDouble: "$weight" } }
    }
}
))