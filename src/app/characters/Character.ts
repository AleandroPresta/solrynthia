export class Character {
    characterName: string;
    characterDescription: string;
    characterPageUrl: string;
    characterCoverImageUrl: string;
    characterTitleImageUrl: string;
    characterImageUrl: string;

    // Constructor
    constructor(characterName: string, characterDescription: string, characterPageUrl: string, characterCoverImageUrl: string, characterTitleImageUrl: string, characterImageUrl: string) {
        this.characterName = characterName;
        this.characterDescription = characterDescription;
        this.characterPageUrl = characterPageUrl;
        this.characterCoverImageUrl = characterCoverImageUrl;
        this.characterTitleImageUrl = characterTitleImageUrl;
        this.characterImageUrl = characterImageUrl;
    }
}