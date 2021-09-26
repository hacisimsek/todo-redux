export const EKLE = "EKLE"
export const TEMIZLE = "TEMIZLE"
//TOGGLE = ISARETLE
export const ISARETLE = "ISARETLE"


export const listeyeEkle = (text) => {
    return{type : EKLE , payload : text}
}

export const isaretle = ( id ) => {
    return{type : ISARETLE , payload :id}
}

export const temizle = () => {
    return{type : TEMIZLE }
}