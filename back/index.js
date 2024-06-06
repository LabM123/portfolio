const app = require('./src/server')
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Server listening in http://localhost:${PORT}`));