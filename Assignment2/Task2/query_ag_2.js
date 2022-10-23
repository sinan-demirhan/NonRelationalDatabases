printjson(db.people.aggregate({"$unwind": "$credit"},{"$group": {"_id": "$credit.currency","Total Amount": { "$sum": { $toDouble: "$credit.balance" } }}}).toArray()
)