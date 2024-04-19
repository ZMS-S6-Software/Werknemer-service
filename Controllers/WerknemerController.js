import rabbitQueue from '../BusinessLogic/messageBroker.js';
const queueService = rabbitQueue();

export default function (app) {
  app.get("/test", async (req, res) => {
    try {
      const allMovies = 'TestData';
      queueService.sendDataToQueue(allMovies);
      res.status(200).json(allMovies);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error fetching movies");
    }
  });
}
