import CollectableService from "../Services/CollectableService.js";

//Private
let _collectableService = new CollectableService()


//Public
export default class CollectableController {
    constructor() {
        console.log(_collectableService.Collectables)
    }

}



