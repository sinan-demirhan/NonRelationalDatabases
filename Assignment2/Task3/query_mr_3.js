printjson(db.people.mapReduce(
  function () {
    emit(this.job, null);
    
  }, 
  function (key, values) {
return 0}, { out: { inline: 1 } })
);
