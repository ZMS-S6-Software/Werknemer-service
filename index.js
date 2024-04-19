//iets importeren
import express from 'express';
import sql from 'mssql';
import dotenv from 'dotenv';

//controllers
import werknemerController from "./Controllers/WerknemerController.js";

dotenv.config();

const app = express();
app.use(express.json());

// Configuratie voor databaseverbinding
const config = {
    user: 'sa',
    password: 'admin',
    server: 'DESKTOP-T5DHN9T',
    database: 'master',
    options: {
        encrypt: false
    }
};

// Connectie maken met de database
sql.connect(config)
  .then(() => {
    console.log('Database verbonden');
    
    // Server starten nadat de databaseverbinding tot stand is gebracht
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    //controller inlezen
    werknemerController(app)
   
  })
  .catch(err => {
    console.error('Fout bij het verbinden met de database:', err);
  });
