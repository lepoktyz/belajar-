/**ini adalah file utama */
/** dimana ada proses menjalankan server backend
 */

/**memanggil library express */
import express, { Request, Response } from "express"
import { request } from "http";
import { validateCube } from "./midlleware/validecube";
import routeBangunDatar from "./route/bangundatar"
/**buat wadah untuk inisiasi express */
const app = express()

/**mendefinisikan port berjalannya server */
const PORT = 8001
/**proses pertama untuk handle request */
app.use(express.json())
app.get('/serena', (request: Request, response: Response) => {
    /**
     * ini adalah proses handle request dengan 
     * 
     * url/address: https//localhost:8000/serena
     * method get
     */
    return response.status(200).json({
        message: 'Hello Serena Anaknya Bu Siana'
    })
})

/**run server */
/** read a query request */
app.get(`/moklet`, (request: Request, response: Response) => {
    /**asumsikan data yang dikirim adalah nama dan umur */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My Name is  &(nama) and im$(umur) years old`
    return response.status(200).json(message)

})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and im ${gender}`
    return response.status(200).json(message)
})

app.post(`/moklet`, (request: Request, response: Response) => {
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar


    let luasPersegiPanjang: number = panjang * lebar
    let Message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(Message)

})

/**buatlah sebuahrequest untuk mengonfersi */
/**suhu celcius ke ferenheit,kelvin,dan reamur 
 * menggunakan request parameter
 * exp https//localhost:8000/celcius/80
 * (8o adalah nilai celciusnya)
 * respone data ->
 * {
 * reamur:?,fahrenheit: ?, kelvin: ?}
 * 
 /**request pak jek */

 /** create request for count volume of */
 app.post(`/blok`,(request: Request,respone: Response) => {

    let panjang: number = Number(request.body.panjang)
    let lebar: number = Number(request.body.lebar)
    let tinggi: number = Number(request.body.tinggi)

        let volume: number = panjang *lebar * tinggi
    return respone.status(200).json({
        panjang, lebar, tinggi, volume
    })
})


/** meregister bvangun datar */
app.use(routeBangunDatar)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)

})


 
