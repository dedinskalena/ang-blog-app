export interface Post {
    title:string,
    permalink:string,
    category:{
        categoryId:string,
        category:string
    },
    postImgPath:string,
    excerpt:string,
    content:string,
    isFeachered:boolean,
    views:number,
    status:string,
    createdAt:any
}
export type PostValue={
    data:Post,
    id:string
     
}