const AvionDB = require('aviondb')

exports.voterFetch = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("voter", ipfs)
    var collection = await aviondb.initCollection("voterUpload");
    var results = await collection.find({

    });
    res.send(results)
      
    // await collection.close(); 
    // await aviondb.close(); 
    // await ipfs.stop();
    
    
}

