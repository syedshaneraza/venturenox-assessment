const {Kafka} = require("kafkajs");

const consumer = async () => {
	const kafka = new Kafka({
		clientId: 'myConsumer',
		brokers: ['localhost:9092']
	});
	const consumer = kafka.consumer({ groupId: 'social-consumer' });
	try {
		await consumer.connect();
		await consumer.subscribe({ topic: 'event_stream' });
		await consumer.run({
			eachMessage: async ({ message }) => {
				processMessage(JSON.parse(message.value.toString()));
			}
		});
	} catch (err) {
		console.log('Error : ', err.message);
	}
};

module.exports = { consumer };
