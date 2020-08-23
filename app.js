
const express = require('express');
const app = express();
const IPFS = require('ipfs');

const morgan = require('morgan');
const body = require('body-parser');


const publisherRoutes = require('./API/routes/publisher');
const voterRoutes = require('./API/routes/voter');
const solverRoutes = require('./API/routes/solver');
const dappRoutes = require('./API/routes/dapp');

const runExample = async () => {
    return await IPFS.create();

}
runExample().then(async ipfs => {
    app.set('ipfs', ipfs)
})


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Acess-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept,Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(morgan('dev'));
app.use(body.urlencoded({ extended: true }));
app.use(body.json());


//Routes handling requests
app.use('/publisher', publisherRoutes);
app.use('/voter', voterRoutes);
app.use('/solver', solverRoutes);
app.use('/dapp', dappRoutes);





app.use((req, res, next) => {
    console.error('not found');
    error.status = 404;
    next(error);

})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});
module.exports = app;