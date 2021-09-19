import axios from 'axios'
import { Observable } from 'rxjs'

//create an Observable

export function createObservable(url:string):Observable<any>{
    return Observable.create((observer:any)=>{
        axios.get(url).then((ans)=>{
            observer.next(ans)
            observer.complete()
        }).catch((err)=>{
            observer.error(err)
        })
    })
}

