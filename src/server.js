import app from './app.js';

import { getEnvFile, stop } from './utils/customutils.js';

import authRoutes from './routes/authroutes.js'

getEnvFile(1);

const port = process.env.BACKEND_PORT || 3000;

app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
