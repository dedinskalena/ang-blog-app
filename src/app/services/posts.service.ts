import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../models/post';
import { map } from 'rxjs';
import * as firebase from 'firebase/compat/app'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs:AngularFirestore) { }

  loadFeacheredPosts(){
    return this.afs.collection('posts',ref=>ref.where('isFeachered','==',true).limit(4)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data() as Post
          const id=a.payload.doc.id
          
          return {id,data}
        })
      })
)}

loadLatestPost(){
  return this.afs.collection('posts',ref=>ref.orderBy('createdAt')).snapshotChanges().pipe(
    map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Post
        const id=a.payload.doc.id
        
        return {id,data}
      })
    })
)
}

loadCategoryPosts(categoryId){
  return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',categoryId)).snapshotChanges().pipe(
    map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Post
        const id=a.payload.doc.id
        
        return {id,data}
      })
    })
)
}

loadOnePost(postId:string){
  return this.afs.doc(`posts/${postId}`).valueChanges()
}

loadSimilar(catId){
  return this.afs.collection('posts',ref=>ref.where('category.categoryId','==',catId)).snapshotChanges().pipe(
    map(actions=>{
      return actions.map(a=>{
        const data=a.payload.doc.data() as Post
        const id=a.payload.doc.id
        
        return {id,data}
      })
    })
)}

countViews(postId){
  const viewsCount={
    views:firebase.default.firestore.FieldValue.increment(1)
  }
  this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=>{
    console.log('viewCount Updated')
  })
}

}
