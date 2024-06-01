import connectToDatabase from "./mongodb";

async function addFieldToAllDocuments(collectionName, newFieldName, defaultValue) {
    const conn = await connectToDatabase();
    const collection = conn.connection.collection(collectionName);

    const result = await collection.updateMany(
        {}, // Filter to match all documents
        { $set: { [newFieldName]: defaultValue } } // Add the new field with the default value
    );

    console.log(`${result.matchedCount} documents matched the filter, ${result.modifiedCount} documents were updated.`);
}

export default addFieldToAllDocuments;