import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware to parse incoming JSON
// limits payload to 1mb to prevent memory exhaustion attacks
app.use(express.json({ limit: '1mb' }));

// liveness probe endpoint for future kubernetes deployment
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'UP',
        service: 'nexus-gateway',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () =>{
    console.log(`[Gateway] Nexus Ingestion Node initialized on port ${PORT}`);
});