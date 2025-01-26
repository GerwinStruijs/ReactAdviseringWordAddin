import { AdviesOnderdeel, AdviesFase, Dictum } from "./adviesEnums";

export class AdviesProces {
    private adviesOnderdeel: AdviesOnderdeel;

    private adviesFase: AdviesFase;

    private dictum: Dictum;

    private redactioneleBijlage: boolean;

    constructor(adviesOnderdeel: AdviesOnderdeel, adviesFase: AdviesFase, dictum: Dictum, redactioneleBijlage: boolean) {
        this.adviesOnderdeel = adviesOnderdeel;
        this.adviesFase = adviesFase;
        this.dictum = dictum;
        this.redactioneleBijlage = redactioneleBijlage;
    }

    /**
     * Haal het adviesonderdeel op
     * @returns AdviesOnderdeel
     */
    public getAdviesOnderdeel(): AdviesOnderdeel { return this.adviesOnderdeel; }

    /**
     * Stel het adviesonderdeel in
     */
    public setAdviesOnderdeel(adiesOnderdeel: AdviesOnderdeel): void { this.adviesOnderdeel = adiesOnderdeel; }

    /**
     * Haaal de adviesfase op
     * @returns AdviesFase
     */
    public getAdviesFase(): AdviesFase { return this.adviesFase; }

    /**
     * Stel de adviesfase in
     */
    public setAdviesFase(adviesFase: AdviesFase): void { this.adviesFase = adviesFase; }

    /**
     * Haal de redactionele bijlage op
     * @returns boolean
     */
    public getDictum(): Dictum { return this.dictum; }

    /**
     * Stel de redactionele bijlage in
     */
    public setDictum(dictum: Dictum): void { this.dictum = dictum; }

    /**
     * Haal de redactionele bijlage op
     * @returns boolean
     */
    public getRedactioneleBijlage(): boolean { return this.redactioneleBijlage; }

    /**
     * Stel de redactionele bijlage in
     */
    public setRedactioneleBijlage(redactioneleBijlage: boolean): void { this.redactioneleBijlage = redactioneleBijlage; }
}