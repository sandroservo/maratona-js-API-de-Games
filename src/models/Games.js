const { schema, model, Schema} = require('mongoose');

const GameSchema =  new Schema({
    title:{
        type:String,
        required:true,

    },
    otherTitles:[String],
    developers:[String],
    publishers:[String],
    genres:[String],
    firstReleased:Date,
    japanReleased:Date,
    euroReleased:Date,
},{collection: 'games', strict: false});

const Game =  model('Game', GameSchema);

module.exports = {
    find: (criteria) => {
        return Game.find(criteria);
    }
}