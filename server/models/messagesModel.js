const db = require("./conn.js");

const getSomeMessages = user_id => {
  const query = db.any(`SELECT subject, message, date_sent, first_name, last_name from private_messages INNER JOIN users on users.id = sent_from WHERE sent_to = ${user_id} ORDER BY date_sent DESC LIMIT 5
  ;`);

  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to connect to database`);
  }
};

const getAllMessages = user_id => {
  const query = db.any(`SELECT private_messages.id, subject, message, date_sent, first_name, last_name from private_messages INNER JOIN users on users.id = sent_from WHERE sent_to = ${user_id} ORDER BY date_sent DESC 
  ;`);

  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to connect to database`);
  }
};

const getMessage = message_id => {
  const query = db.any(`SELECT private_messages.id, sent_from_companies_id, subject, message, date_sent, first_name, last_name, sent_from from private_messages INNER JOIN users on users.id = sent_from WHERE private_messages.id = ${message_id}
  ;`);

  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable to connect to database`);
  }
};

const sendMessage = (subject, message, sent_from, sent_to ) => {
  const query = db.any(`INSERT INTO private_messages (subject, message, sent_to, sent_from) VALUES ($1, $2, $3, $4);`, [subject, message, sent_from, sent_to])
  try {
    return query;
  } catch {
    return console.log(`ERROR: Unable save to database`);
  }
}




module.exports = { getSomeMessages, getAllMessages, getMessage, sendMessage };
