const express = require('express');
const app = express();
const appInsights = require('applicationinsights');

// Replace 'your_instrumentation_key' with the actual key from your Application Insights instance
appInsights.setup('a3dff85b-56fc-4660-9476-4d1a1fa6a7eb')
  .setSendLiveMetrics(true)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI)
  .start();

const client = appInsights.defaultClient;

// Other middleware and routes go here

app.use((req, res, next) => {
  // Custom telemetry: track request performance
  const startTime = Date.now();
  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    client.trackRequest({name: req.url, resultCode: res.statusCode, success: true, url: req.url, duration, startTime});
  });
  next();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
