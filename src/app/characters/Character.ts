export class Character {
    name: string;
    description: string;
    pageUrl: string;
    coverImageUrl: string;
    titleImageUrl: string;
    cardImageUrl: string;

    constructor(
        name: string,
        description: string,
        pageUrl: string,
        coverImageUrl: string,
        titleImageUrl: string,
        cardImageUrl: string
    ) {
        this.name = name;
        this.description = description;
        this.pageUrl = pageUrl;
        this.coverImageUrl = coverImageUrl;
        this.titleImageUrl = titleImageUrl;
        this.cardImageUrl = cardImageUrl;
    }
}
