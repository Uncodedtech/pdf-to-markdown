//Holds individual text items of a page
export default class TextItem {

    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.text = options.text;
    }

}