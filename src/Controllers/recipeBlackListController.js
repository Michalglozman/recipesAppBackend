const recipeBlackListData = require('../Model/recipeBlackList');

const addToBlackList = async(req, res) => {
    const url = req.body.url;
    const urlToBlock = new recipeBlackListData({'url': url,'status': "waiting"});
    urlToBlock.save().then(()=>{
        return res.status(200).send();
    }).catch(()=>{
        return res.status(500).send();
    });
}

const updateBlackList = async(req, res) => {
    const url = req.body.url;
    const status = req.body.status;
    const params = {'status': status};
    recipeBlackListData.findOneAndUpdate({'url': url},params).then(() =>{
        res.status(200).send();
    }).catch((e) => {
        res.status(500).send();
    });
}

const getBlackList = async(req, res) => {
    recipeBlackListData.find( { 'status': "waiting" } )
    .then((recipes) =>{
        console.log(recipes)
        res.setHeader("Content-Type", "text/plain");
        return res.status(200).send(recipes);
    }).catch((err)=>{
        console.log(err);
        return res.status(500);
    })
}

module.exports={addToBlackList,updateBlackList,getBlackList};
