import axios from "axios";

export function Create(name, code, image, price, quantity, totalPrice){
    let URL = "/api/v1/create"
    let postBody = {
        name: name,
        code: code,
        image: image,
        price: price,
        quantity: quantity,
        totalPrice: totalPrice
    }
    return axios.post(URL, postBody).then((res)=>{
        if(res.status===200){
            return true
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
}

export function Read(){
    let URL = "/api/v1/read"
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data["data"]
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
}

export function ReadById(id){
    let URL = "/api/v1/readProductById/" +id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return res.data["data"]
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
}



export function Delete(id){
    let URL = "/api/v1/delete/"+id;
    return axios.get(URL).then((res)=>{
        if(res.status===200){
            return true
        }else{
            return false
        }
    }).catch((err)=>{
        console.log(err)
        return false
    })
}


export function update(id, name, code, image, price, quantity, totalPrice){
    let URL = "/api/v1/update/"+id;
    let postBody = {
            name: name,
            code: code,
            image: image,
            price: price,
            quantity: quantity,
            totalPrice: totalPrice
        }

        return axios.post(URL, postBody).then((res)=>{
            if(res.status===200){
                return true
            }else{
                return false
            }
        }).catch((err)=>{
            console.log(err)
            return false
        })
}

// exports.read = ()=>{
//     let URL = "/api/v1/read"
//     return axios.get(URL).then((res)=>{
//         if(res.status===200){
//             return res.data['data']
//         }else{
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     })
// }



// exports.update = (id, name, code, image, price, quantity, totalPrice)=>{
//     let URL = "/api/v1/update"+id;
//     let postBody = {
//         name: name,
//         code: code,
//         image: image,
//         price: price,
//         quantity: quantity,
//         totalPrice: totalPrice
//     }

    // return axios.post(URL, postBody).then((res)=>{
    //     if(res.status===200){
    //         return true
    //     }else{
    //         return false
    //     }
    // }).catch((err)=>{
    //     console.log(err)
    //     return false
    // })
// }

// exports.delete = (id)=>{
//     let URL = "/api/v1/delete"+id;
//     return axios.get(URL).then((res)=>{
//         if(res.status===200){
//             return true
//         }else{
//             return false
//         }
//     }).catch((err)=>{
//         console.log(err)
//         return false
//     })
// }