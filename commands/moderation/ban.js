const commando = require('discord.js-commando');
const oneLine = require('common-tags').oneLine;

module.exports = class BanCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'BAN',
            group: 'moderation',
            memberName: 'ban',
            description: 'Just a ban command :)',
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
        })
    }

    async run(msg) {
        var member = msg.mentions.members.first();
        member.ban().then((member) => {
            // Successmessage
            msg.channel.send(":wave: " + member.displayName + " has been successfully Banned :point_right: ");
        })
}}