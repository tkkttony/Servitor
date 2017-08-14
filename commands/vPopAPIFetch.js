exports.run = async (client, message, args, level);
const fetch = require('snekfetch');
const fs = require('fs'),
    xml2js = require('xml2js');
const parser = new xml2js.Parser();

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("!" + str);
};
if (commandIs('activebattles', message)) {
    get("http://api.vpopulus.net/api/battle/getList/2")
    .set(get)
    .then(res => console.log(res.body)).catch(e => console.error(e))};
    fs.readFile(__dirname + '/2.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            console.dir(result);
            console.log('Done');
        });
    });
