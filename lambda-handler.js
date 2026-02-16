// lambda-handler.js
exports.handler = async (event) => {
    console.log('Lambda deployed successfully!');
    console.log('Environment:', process.env.ENVIRONMENT);
    
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Deployment successful!',
            environment: process.env.ENVIRONMENT || 'dev',
            timestamp: new Date().toISOString()
        })
    };
};
