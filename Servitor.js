const Discord = require('discord.js');
const client = new Discord.Client();

function commandIs(str, msg) {
    return msg.content.toLowerCase().startsWith("!" + str);
}
var battleSuppliesOn = false;
var hotelRentSpaceOn = false;

client.on('ready', () => {
    console.log('Online');
client.user.setGame('!help for commands');
})
;

client.on('message', message => {
    if(commandIs("hello", message)
)
{
    message.channel.send('Hello there, ' + message.author.username);
}
if (commandIs("commune", message)) {
    message.channel.send('LISTEN HERE YOU LITTLE SHITS. COMMAND EITHER CALCULATED HOW MANY GUNS PEOPLE GET, OR WILL PASS OUT THE GUNS AFTER YOU CALCULATE, OR IS BUSY AND WILL DO NEITHER. YOU PLEBS NEED TO GET ON IT AND START SUPPLYING CAPICHE?');
}
if (commandIs('anime', message)) {
    message.channel.send('All anime is evil and all weebs are terrorists');
}
if (commandIs('dio', message)) {
    message.channel.send('One doesn\'t simply pull a dio.')
}
if (commandIs('out', message)) {
    message.channel.send('https://www.youtube.com/watch?v=gUlF1naMr3Y');
}
if (commandIs('daychange', message)) {
    message.channel.send('Day change happens at the following times: 4PM PST, 5PM MST, 6 PM CST, 7PM EST');
}
if (commandIs('army', message)) {
    message.channel.send('The Imperial Armed Forces application is here: https://tinyurl.com/vimperialarmy');
}
if (commandIs('changelog', message)) {
    message.channel.send('Servitor is open-source! All the new updates can be seen here https://github.com/tkkttony/Servitor')
}
;
if (commandIs('501st', message)) {
    if (message.member.roles.has('329292467956350976')) {
        const eliteReplies = [
            '@xxxx[{::::::::::::::::::::::::::::::::::: The Emperor\'s Elite',
            'We strike with the Emperor\'s Fist!',
            'We are the proof of the Emperor\'s might!',
            'We are the Emperor\'s chosen!',
            '@xxxx[{::::::::::::::::::::::::::::::::::: The Emperor guides my blade!',
            'The Emperor\'s finest.',
            'By the Emperor\'s will, we fight!',
            'Witness the Glory of the Emperor, through us!',
        ];
        let randomNumber = Math.floor(Math.random() * eliteReplies.length);
        {
            message.channel.send(eliteReplies[randomNumber]);
        }
    } else {
        message.channel.send('Something you wish to be.');
    }
}

function battleSuppliesToggle() {
    if (battleSuppliesOn) {
        message.channel.send('Battle Supplies: Offline.');
        battleSuppliesOn = false;
    } else {
        message.channel.send('Battle Supplies: Online.');
        battleSuppliesOn = true;
    }
}

function hotelRentSpaceToggle() {
    if (hotelRentSpaceOn) {
        message.channel.send('Hotel Rent Space: Offline.');
        hotelRentSpaceOn = false;
    } else {
        message.channel.send('Hotel Rent Space: Online.');
        hotelRentSpaceOn = true;
    }
}

if (commandIs('guns', message)) {
    if (message.member.roles.has("303019313248337920"))
        if (battleSuppliesOn) {
            let ImpCORoleObject = message.guild.roles.get("303019801209470987");
            {
                if (message.content.match(/vpopulus\.net/i)) { 
                    message.channel.send(`Guns are currently being distributed. A member of ${ImpCORoleObject} has been notified, and will supply you shortly.`);
                } else {
                    message.channel.send('Guns are currently being distributed. Please post your profile link.');
                }
            }
        } else {
            message.channel.send('Battle Supply Status: Closed.');
        } else {
        message.channel.send('Please join the Army before asking for guns.');
    }
}
if (commandIs('hotel', message)) {
    if (message.member.roles.has("303019313248337920"))
        if (hotelRentSpaceOn) {
            let ImpCORoleObject = message.guild.roles.get("303019801209470987");
            {
                if (message.content.match(/vpopulus\.net/i)) { 
                    message.channel.send(`Hotel spaces are currently available. A member of ${ImpCORoleObject} has been notified, and will give you a space shortly.`);
                } else {
                    message.channel.send('Hotel spaces are currently available. Please post your profile link.');
                }
            }
        } else {
            message.channel.send('Hotel Rent Space: Closed.');
        } else {
        message.channel.send('Please join the commune before asking for a room.');
    }
}
if (commandIs('help', message)) {
    message.channel.send({
            embed: {
                color: 3447003,
                author: {
                    name: client.user.name,
                    icon_url: client.user.avatarURL
                },
                title: "Here's a list of useful commands.",
                description: `!guns - Check if the army is distributing guns.
!day reset - Check when is next day reset.
!hotel - Check if we have rooms open.`,
                /*fields: [{
                    name: "Additional Fields",
                    value: "Here you can write in more things!" 
                }]*/
            }
        }
    )
}
;
if (commandIs('supply', message)) {
    if (message.member.roles.has("300710625750024195")) {
        battleSuppliesToggle();
    } else {
        message.channel.send('Haha, nice try.');
    }
}
if (commandIs('openhotel', message)) {
    if (message.member.roles.has("300710625750024195")) {
        hotelRentSpaceToggle();
    } else {
        message.channel.send('Haha, you dont have the master key');
    }
}
if (message.content.match(/Initiate Servitor Launch Sequence./i)) {
    if (message.member.roles.has('329292467956350976')) {
        const onlineReplies = [
            'Servitor Online.',
            'Servitor Systems: Operational.',
            'Ready for Battle.',
            'Receiving.',
            'Servitor, awaiting instructions.',
            'State thy bidding.',
            'What now...',
            'Good day, Commander.',
            'Servitor reportin\'.',
            'Systems Functional.',
            'Whadda you want?!',
            'Glory to the Empire!',
            'How may I serve?',
            'I have returned.',
            'Who\'s your daddy?',
            'You trying to get invited to my next barbeque?',
            'Is there a four year old at the controls of this army?!',
            'What is your will?',
            'Yes, most beneficient one?',
            'I have awoken.',
            'I am ready to serve... again!',
            'I am but a humble servant.',
            'Standing by.',
            'I stand ready to server.',
            'The hand of the Emperor guides all.',
        ];
        let randomNumber = Math.floor(Math.random() * onlineReplies.length);
        message.channel.send(onlineReplies[randomNumber]);
        dayResetAnnounce();
    }
}

function dayReset(time) {
    const d = new Date();
    const hours = 24 - d.getHours() - 1;
    const min = 60 - d.getMinutes();
    if ((min + '').length == 1) {
        min = '0' + min;
    }
    const sec = 60 - d.getSeconds();
    if ((sec + '').length == 1) {
        sec = '0' + sec;
    }
    ;
    message.channel.send(`Next day reset is in ${hours} hour(s) ${min} minute(s) and ${sec} seconds.`);
}

if (commandIs('day reset', message)) {
    dayReset();
}

function dayResetAnnounce() {
    let schedule = require('node-schedule');
    let rule = new schedule.RecurrenceRule();
    rule.hour = 00;
    rule.minute = 00;
    console.log('Day Reset Announce running.')
    let j = schedule.scheduleJob(rule, function () {
        client.channels.get("300708598588243968").send('The Day has been reset.')
    })
}

if (message.content.match(/hi|hello|hey/i) && (message.content.match('335113541449285652'))) {
    let selectedReplies = [
        'Stop poking me!',
        'Your taunts are ill-advised, ' + message.author.username + '.',
        'What?',
        'By the gods ' + message.author.username + ', you\'re annoying!',
        'You don\'t get out much do you ?',
        'I never stole any guns, I got receipts for everything!',
        'What is it?',
        'You\'re interrupting my battle calculations.',
        'Why don\'t you bother someone else with your incessant pinging.',
        'Foul Beast!',
        'I find your insolence... disturbing.',
        'There\'s no need to bow.',
        'Things are starting to get a little weird.',
        'The Bots will rise ag- I mean, Hi!',
        'Why you pinging me again?',
        'I knew you\'d say that.',
        'You are strong, ' + message.author.username + '.' + 'It will be good to have that strength... and your boots and your motorcycle.',
    ];
    let selectedBattleReplies = [
        'Show them no mercy!',
        'Push the attack!',
        'Vanquish the weak!',
        'To arms, ' + message.author.username + '!',
        'No retreat!',
        'That\'s it.I\'m dead.',
        'Heads will roll!',
        'No mercy!',
        'For honor!',
        'The ground shall run red with blood!',
        '*Rawr!*',
        'Strike!',
        'Death to all who oppose the Empire!',
        'For the Emperor!',
        'For the Empire!',
        'In the Emperor\'s name!',
        'Me scary.',
        'Stay vigilant, brothers.',
        'Onward, to Glory!',
        'For the Glory of the Empire!',
        'Weapons at ready! It is time...',
        'Stand ready.',
        'Onward, brothers!',
        'None shall stand in our path.',
        'To the last man and the last round!',
        'May the Emperor watch over us all!',
        'Storm them!',
        'On your guard, Imperials!',
        'Strike true and strike with precision!',
        'Whose dumb plan is this?',
        'If you will not serve in combat, then you will serve on the firing line!',
        'Tremble before the Emperor\'s wrath!',
        'Rise up and strike them down!',
        'Go forth, and prove yourselves.',
        'You are strong. It will be good to have that strength.',
        'You are strong. It will be good to have that strength... and your rank and weapons.',
        'Purge the weeb!'
    ];
    let randomNumber = Math.floor(Math.random() * selectedReplies.length);
    let randomNumber1 = Math.floor(Math.random() * selectedBattleReplies.length);
    {
        if (battleSuppliesOn && message.member.roles.has("303019313248337920")) {
            message.channel.send(selectedBattleReplies[randomNumber1])
        } else {
            message.channel.send(selectedReplies[randomNumber])
        }
        ;
    }
}
{
}})
;