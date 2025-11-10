// uploadContent.js
const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

async function upload() {
  const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
  const environment = await space.getEnvironment('master');

  await environment.createEntry('yourContentType', {
    fields: {
      title: { 'en-US': 'Hello World' },
      body: { 'en-US': 'Content from GitHub Actions' },
    },
  });

  console.log('Content uploaded!');
}

upload().catch(console.error);
