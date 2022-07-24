const { Kafka } = require("kafkajs")
const {consumer} = require("./consumer")
var fakerator = require('fakerator');

const producer = async () => {
	const kafka = new Kafka({
		clientId: 'myProducer',
		brokers: ['localhost:9092']
	});
	const admin = kafka.admin();
	const producer = kafka.producer();
	try {
		await admin.connect();
		await admin.createTopics({
			validateOnly: false,
			topics: [{ topic: 'event_stream' }]
		});
		await producer.connect();
		var tenantIds = [];
		Array.from(Array(10)).map(async () => {
			tenantIds.push(fakerator.random.number(19265));
		});
		tenantIds.map(async (id) => {
			await producer.send({
				topic: 'event_stream',
				messages: [
					{
						timestamp: Date.now(),
						key: 'data_stream',
						value: JSON.stringify({
							event_name: 'tenant_created',
							properties: {
								id: id,
								name: fakerator.names.name(),
								address: fakerator.address.street(),
								city: fakerator.address.city(),
								state: fakerator.address.streetName(),
								country: fakerator.address.country(),
								zip_code: fakerator.address.postCode(),
								phone: fakerator.phone.number(),
								webUrl: fakerator.internet.domain()
							}
						}),
					}
				],
			});
		});
		await consumer();
	} catch (err) {
		console.log('Error : ', err.message);
	}
};

module.exports = { producer };
