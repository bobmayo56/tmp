var ibmdb = require('ibm_db');

ibmdb.open("DRIVER={DB2};DATABASE=BLUDB;HOSTNAME=bluemix05.bluforcloud.com;UID=dash013411;PWD=vl64yf6304H8;PORT=50000;PROTOCOL=TCPIP", function (err,conn) {
  if (err) return console.log(err);
  console.log('connection is open');

  conn.query('select * from SAMPLES.STATECODE where STATE_CODE = ?', [6], function (err, data) {
    if (err) console.log(err);

    console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});
