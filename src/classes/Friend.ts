class Friend {
    _firstName: string;
    _lastName: string;
    _birthday: string;
    _birthPlace: string;
    _nickname: string;
    _locatedIn: string;
    _favoriteMusic: string;
    _favoriteSeries: string;
    _favoriteMovie: string;
    _img: string;

    constructor(firstName: string, lastName: string, birthday: string, birthPlace: string, nickname: string, locatedIn:string, favoriteMusic: string, favoriteSeries: string, favoriteMovie: string, img: string){
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthday = birthday;
        this._birthPlace = birthPlace;
        this._nickname = nickname;
        this._locatedIn = locatedIn
        this._favoriteMusic = favoriteMusic;
        this._favoriteSeries = favoriteSeries;
        this._favoriteMovie = favoriteMovie
        this._img = img;
    }
}

export default Friend;