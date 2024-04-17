import {connect} from 'amqplib';

const connection = await connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'message';
const message = 'Test123';

await channel.assertQueue(queue, { durable:false });

channel.sendToQueue(queue, Buffer.from(message))

// run in docker
// docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq