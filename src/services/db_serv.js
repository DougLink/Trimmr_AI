import { db } from "../firebase";

import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    doc,
} from "firebase/firestore"

const ArticlesRef = collection(db, "trimms");
class ArticleDataService {
    addArticle = (newArticle) => {
        return addDoc(ArticlesRef, newArticle);
    };

    getArticles = (user) => {
        const articlesDoc = doc(db, "trims", user)
        return getDocs(articlesDoc);
    };

    getArticle = (id) => {
        const articleDoc = doc(db, "trimms", id);
        return getDoc(articleDoc);
    };
}


export default new ArticleDataService();