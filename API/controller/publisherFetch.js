const AvionDB = require('aviondb')

exports.publisherFetch = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("publisher", ipfs)
    var collection = await aviondb.initCollection("publisherUpload");
    var results = await collection.find({

    });
    res.send(results)
      
    // await collection.close(); 
    // await aviondb.close(); 
    // await ipfs.stop();
    
    
}

