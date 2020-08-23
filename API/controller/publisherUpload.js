const AvionDB = require('aviondb')


exports.publisherUpload = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("publisher", ipfs)
    var collection = await aviondb.initCollection("publisherUpload");
    await collection.insert([
        {
            name: req.body.name,
            age: 22,

        },
    ]);
    // await collection.close(); 
    // await aviondb.close(); 
    // await ipfs.stop();
    res.status(201).json({
        message: "Publisher created"
    });
}



