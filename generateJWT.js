const jwt = require('jsonwebtoken');

const secretKey = 'sec';
const payload = { userId: '12345', role: 'admin' };

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log('Generated JWT:', token);
