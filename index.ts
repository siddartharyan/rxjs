import { concat, filter, map, Observable, of, shareReplay, tap } from 'rxjs';
import { createObservable } from './code';
import { Mock } from './Mock';
const url:string="https://jsonplaceholder.typicode.com/posts"
const http:Observable<any>=createObservable(url)
let dataList:Observable<any>
let dataList1:Observable<any>
const data=http.pipe(
    tap(()=>console.log('entered')),
    map((value)=>Object.values(value["data"])),
    shareReplay()
)
dataList=data.pipe(
    map((data)=>data.filter((mock:Mock)=>mock.userId%3===0))
)
dataList1=data.pipe(
    map((data)=>data.filter((mock:Mock)=>mock.userId%2===0))
)
dataList=dataList.pipe(
    filter((data)=>data.id%2==0)
)
//dataList.subscribe((data)=>console.log(data.length))
//dataList1.subscribe((data)=>console.log(data.length))

//Observable Concatenation
const o1=of(1,2,3)
const o2=of(4,5,6)
const o3=of(7,8,9)
const f=concat(o1,o2,o3)
f.subscribe(console.log)

//