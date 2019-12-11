const db = require('./conn');

const getAllResources = async () => {
    try{
      return await db.any(`SELECT * FROM posts_resources ORDER BY date_posted DESC LIMIT 5;`)
    }catch{
      console.log(`Error: Unable to retrieve resources from database`)
    }
  }


// const saveNewResource = () => {
// }


module.exports = {getAllResources}