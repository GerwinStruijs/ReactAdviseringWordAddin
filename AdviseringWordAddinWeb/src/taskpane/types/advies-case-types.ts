import { AdviesFase, AdviesOnderdeel, Dictum } from "./advies-enums";
import { AdviesProces } from "./advies-proces";

export interface AdviesCaseProperty {
    name: string,
    tag: string,
    property: string
}

export class AdviesCase extends AdviesProces {
    private zaaknummer: string;

    private typeAanvraag: string;

    private kamer: string;

    private missivedatum: Date

    constructor(zaaknummer: string,
        typeAanvraag: string,
        kamer: string,
        missivedatum: Date,
        adviesOnderdeel: AdviesOnderdeel,
        adviesFase: AdviesFase,
        dictum: Dictum,
        redactioneleBijlage: boolean) {
        super(adviesOnderdeel,
            adviesFase,
            dictum,
            redactioneleBijlage);
        this.zaaknummer = zaaknummer;
        this.typeAanvraag = typeAanvraag;
        this.kamer = kamer;
        this.missivedatum = missivedatum;
    }

    /**
      * Haal het zaaknummer op
      * @returns string
      */
    public getZaaknummer(): string { return this.zaaknummer; }

    /**
      * Stel het zaaknummer in
      */
    public setZaaknummer(zaaknummer: string): void { this.zaaknummer = zaaknummer; }

    /**
      * Haal het type aanvraag op
      * @returns string
      */
    public getTypeAanvraag(): string { return this.typeAanvraag; }

    /**
      * Stel het type aanvraag in
      */
    public setTypeAanvraag(typeAanvraag: string): void { this.typeAanvraag = typeAanvraag; }

    /**
      * Haal de kamer op
      * @returns string
      */
    public getKamer(): string { return this.kamer; }

    /**
      * Stel de kamer in
      */
    public setKamer(kamer: string): void { this.kamer = kamer; }

    /**
      * Haal de missivedatum op
      * @returns Date
      */
    public getMissivedatum(): Date { return this.missivedatum; }

    /**
      * Stel de missivedatum in
      */
    public setMissivedatum(missivedatum: Date): void { this.missivedatum = missivedatum; }
}