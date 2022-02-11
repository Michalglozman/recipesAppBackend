const recipeBlackListData = require('../Model/recipeBlackList');

const addToBlackList = async(req, res) => {
    const url = req.body.url;
    const urlToBlock = new recipeBlackListData({'url': url});
    urlToBlock.save().then(()=>{
        return res.status(200).send();
    }).catch(()=>{
        return res.status(500).send();
    });
}

module.exports={addToBlackList};
