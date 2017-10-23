export class Article {
     _id: string
     code: string
     designation: string
     codeABarre: string
     tva: number
     prixAchatHT: number
     prixVenteHT: number
     stock: number
    constructor(
        _id?: string,
        code?: string,
        designation?: string,
        codeABarre?: string,
        tva?: number,
        prixAchatHT?: number,
        prixVenteHT?: number,
        stock?: number
    ) { }
}