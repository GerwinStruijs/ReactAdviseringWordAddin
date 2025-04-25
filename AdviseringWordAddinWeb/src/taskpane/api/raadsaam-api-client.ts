import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'

export const raadsaamApiClient = axios.create({
    baseURL: '/api',
});

const adapter = new MockAdapter(raadsaamApiClient, { delayResponse: 2000 });

adapter.onGet('/case/W01.01.00001').reply(200, {
    data: {
        zaakNummer: 'W01.01.00001/I',
        betreft: 'TEST - Word Plug-in - Verkenningsnotitie',
        missivedatum: '',
        missievenummer: '',
        aanvrager: 'de Minister-President, minister van Algemene Zaken',
        betrokkenBewindspersonen: [
            {
                naam: 'de Minister van Buitenlandse Zaken',
                rol: 'Op voordracht'
            }
        ],
        typeAanvraagCode: 'AMVB',
        kamer: 'Tweede kamer',
        verbijzondering: 'Nee',
        statusAanvraag: 'CA Rapporteur',
        onderdeel: 'Concept Advies',
        processtap: 'Rapporteur',
        redactioneleBijlage: 'Nee',
        rapporteurs: [
            {
                naam: 'Tichtti, ing. M. (Mounir)'
            },
            {
                naam: 'Tichtti, ing. M. (Mounir)'
            }
        ],
        meelezers: null,
        adviseurs: [
            {
                naam: 'Tichtti, ing. M. (Mounir)'
            }
        ],
        dictumLetter: 'A',
        gewijzigd: null,
        dictumUrl: 'https://raadvanstatenl.sharepoint.com/sites/ACC-ADV202100823/Dossier/Documenten Wordplugin/WordpluginDictaDocument_W01.21.00823.docx',
        omschrijvingOnderdeel: 'CONCEPTADVIES',
        aanhef: 'Aan de rapporteur',
        ondertekendDoor: null
    }
});