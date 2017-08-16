const getData = (db) =>{
  return db('DataTable')
  .join('AddToDataTable', 'AddToDataTable.id', '=', 'DataTable.foreign_id')
  .select('*')
}


module.exports ={
  getData
}
