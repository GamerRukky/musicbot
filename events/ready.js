 module.exports = client => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`to ?play and more commands`, { type: "LISTENING" });
}
