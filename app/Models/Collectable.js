export default class Collectable {
    constructor({ image = '//placehold.it/200x200', title = '', description = '', rarity = '', tags = [] }) {
        this.image = image
        this.title = title
        this.description = description
        this.rarity = rarity
        this.tags = tags
    }

    addTag(tag) {
        this.tags.push(tag)
    }
    removeTag(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1)
    }

    get Template() {
        let tagTemplate = ''
        this.tags.forEach(t => {
            tagTemplate += `<p class="tag">${t}</p>`
        })
        return `
            <div class="col-3">
                <div class="card">
                    <img class="card-img-top" src="${this.image}" alt="Card image cap">
                    <div class="card-body">
                        <i class="far fa-trash-alt delete"></i>
                        <h4 class="card-title">${this.title}</h4>
                        <p class="card-text">${this.description}</p>
                        <p class="card-text">${this.rarity}</p>
                        <div class="text-center">
                            ${tagTemplate}
                        </div>
                    </div>
                </div>
            </div>        
            `
    }
}







