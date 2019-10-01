import Collectable from "../Models/Collectable.js";

//Private
let _state = {
    collectables: [new Collectable({ title: 'Collectable 1' }), new Collectable({ title: 'Collectable 2' })]
}


//Public
export default class CollectablesService {

    get Collectables() {
        return _state.collectables.map(v => new Collectable(v))
    }

}
