const AvionDB = require('aviondb')

exports.dappFetch = async (req, res, next) => {
    const ipfs = req.app.get('ipfs')
    const aviondb = await AvionDB.init("dapp", ipfs)
    var collection = await aviondb.initCollection("dappUpload");
    var results = await collection.find({

    });
    res.send(results)
      
    // await collection.close(); 
    // await aviondb.close(); 
    // await ipfs.stop();
    
    
}

