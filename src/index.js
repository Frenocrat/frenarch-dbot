require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online.`);
});

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hey') {
    interaction.reply('Hey!');
  }

  if (interaction.commandName === 'ping') {
    interaction.reply('Pong!');
  }

  if (interaction.commandName === 'add') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The sum is ${num1 + num2}.`);
  }

  if (interaction.commandName === 'subtract') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The difference is ${num1 - num2}.`);
  }

  if (interaction.commandName === 'multiply') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The product is ${num1 * num2}.`);
  }

  if (interaction.commandName === 'divide') {
    const num1 = interaction.options.get('first-number').value;
    const num2 = interaction.options.get('second-number').value;

    interaction.reply(`The quotient is ${num1 / num2}.`);
  }

  if (interaction.commandName === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title.')
      .setDescription('This is an embed description.')
      .setColor(0xd4af37)
      .addFields(
        {
          name: 'An inline field title.',
          value: 'Some value.',
          inline: true,
        },
        {
          name: 'Another inline field title.',
          value: 'Some value.',
          inline: true,
        }
      );

    interaction.reply({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.content === 'embed') {
    const embed = new EmbedBuilder()
      .setTitle('Embed title.')
      .setDescription('This is an embed description.')
      .setColor(0xd4af37)
      .addFields(
        {
          name: 'An inline field title.',
          value: 'Some value.',
          inline: true,
        },
        {
          name: 'Another inline field title.',
          value: 'Some value.',
          inline: true,
        }
      );

    message.channel.send({ embeds: [embed] });
  }
});

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === 'Hello') {
    message.reply('Hey!');
  }
});

client.login(process.env.TOKEN);
