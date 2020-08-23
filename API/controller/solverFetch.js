const AvionDB = require('aviondb')

exports.solverFetch = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("solver", ipfs)
    var collection = await aviondb.initCollection("solverUpload");
    var results = await collection.find({

    });
    res.send(results)
      
    // await collection.close(); 
    // await aviondb.close(); 
    // await ipfs.stop();
    
    
}

