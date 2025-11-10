// uploadContent.js
/**
 * Script para subir contenido a Contentful desde GitHub Actions
 * 
 * Este script crea una nueva entrada en tu space de Contentful
 * usando el tipo de contenido "HelloWorld" y los campos:
 * - title
 * - description
 * 
 * Luego publica automáticamente el entry para que esté disponible.
 */

const contentful = require('contentful-management');

const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN, // Token de Contentful
});

async function upload() {
  try {
    // Conectar al Space
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);

    // Seleccionar el entorno (por defecto 'master')
    const environment = await space.getEnvironment('master');

    // Crear el entry
    const entry = await environment.createEntry('helloWorld', { // Reemplaza con tu API Identifier
      fields: {
        title: { 'en-US': 'Hello World' },
        description: { 'en-US': 'This content was deployed from GitHub Actions to Contentful' },
      },
    });

    // Publicar el entry
    await entry.publish();

    console.log('✅ Content uploaded and published successfully!');
  } catch (error) {
    console.error('❌ Error uploading content:', error);
  }
}

// Ejecutar script
upload();
