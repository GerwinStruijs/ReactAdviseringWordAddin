export interface UserDataProperty {
    name: string,
    tag: string,
    property: string
}

export class UserData {

    private id: string
    private voornaam: string
    private achternaam: string
    private weergaveNaam: string
    private mobielNummer: string
    private werkTelefoonNummers: string[]
    private functie: string
    private email: string
    private voorkeurTaal: string
    private officeLocatie: string
    private userName: string
   
    constructor(id: string,
        voornaam: string,
        achternaam: string,
        weergaveNaam: string,
        mobielNummer: string,
        werkTelefoonNummers: string[],
        functie: string,
        email: string,
        voorkeurTaal: string,
        officeLocatie: string,
        userName: string) {
        this.id = id;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.weergaveNaam = weergaveNaam;
        this.mobielNummer = mobielNummer;
        this.werkTelefoonNummers = werkTelefoonNummers;
        this.functie = functie;
        this.email = email;
        this.voorkeurTaal = voorkeurTaal;
        this.officeLocatie = officeLocatie;
        this.userName = userName;
    }
}