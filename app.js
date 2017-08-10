// Load the discordbot-framework module
const bot_name = "Darkus";
const DiscordBot = require('discordbot-framework');
let bot = new DiscordBot();

const configData = {
  'secret_key'  : '',
  'command_prefix'  : '?',
  'respond_to_bots'  : 'false',
  'secret_key'  : 'n33CPE1N5OS2tjwgptEbWfPcHwWkonK7',
  'boot_msg'  : 'Hi! I\'m" + bot_name + "Nice to meet you.'
};


// Add a listener
bot.observe('guildMemberAdd', (guildMember) => {
    const nickname = guildMember.nickname || guildMember.user.username;
    guildMember.guild.defaultChannel.sendMessage(`Welcome to the ${guildMember.guild.name} party, ${nickname}!`);
});
