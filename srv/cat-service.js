const cds = require('@sap/cds')


module.exports = async function () {
  this.on('CREATE', `Holes`, (req, next) => {
    const holeInfo = req.data;
    
    const scoreDiff = holeInfo.score - holeInfo.par;
    
    if (scoreDiff === -3) {
      holeInfo.result = 'albatross';
    } else if (scoreDiff === -2) {
      holeInfo.result = 'eagle';
    } else if (scoreDiff === -1) {
      holeInfo.result = 'birdie';
    } else if (scoreDiff === 0) {
      holeInfo.result = 'par';
    } else if (scoreDiff === 1) {
      holeInfo.result = 'bogey';
    } else if (scoreDiff === 2) {
      holeInfo.result = 'double bogey';
    } else if (scoreDiff === 3) {
      holeInfo.result = 'triple bogey';
    } else if (score === 1) {
      holeInfo.result = 'hole in one';
    }
    
    return next();
  });
  
  const remote = await cds.connect.to('RemoteService')
  this.on('*', 'Players', (req) => {
      console.log('>> delegating to remote service...')
      return remote.run(req.query)
  })
}


