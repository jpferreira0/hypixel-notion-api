//* --- Parse all the data relevant for the Collections ---
//* Data to parse: NAME: {collection_name} AMOUNT: {amount};
function parsingCollections(data){
    //TODO - Parse the data for the Collections
    console.log("Parsing Collections");
    let parsedData = [];
    parsedData.push({ name: "Dark Oak Wood", amount: 123000 });
    parsedData.push({ name: "Birch Wood", amount: 3402400 });
    parsedData.push({ name: "Jungle Wood", amount: 543230 });
    parsedData.push({ name: "Acacia Wood", amount: 1234000 });
    parsedData.push({ name: "Spruce Wood", amount: 3402400 });
    parsedData.push({ name: "Oak Wood", amount: 543230 });
    return parsedData;
}

export { parsingCollections };