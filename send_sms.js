
module.exports.sender=function (reg, res) {

}
const accountSid = 'ACf77fa76b5fd41dd528fbe269ca785ba4';
const authToken = 'f72a77cdb69ba36750825e527fa440e2';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Er is zojuist een reservering gemaakt op u naam. Open de app om de reservering te bekijken',
        from: '+31 97014201853',
        to: '+31648444810'
    })
    .then(message => console.log(message.sid));