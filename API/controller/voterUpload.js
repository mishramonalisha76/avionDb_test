const AvionDB = require('aviondb')


exports.voterUpload = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("voter", ipfs)
    var collection = await aviondb.initCollection("voterUpload");
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
        message: "voter created"
    });
}



