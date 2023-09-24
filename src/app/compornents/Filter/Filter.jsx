import React, { useEffect, useState } from 'react'
import styles from './Filter.module.css'
import { articles } from './ArticleData'

function Filter() {
  //選択されたタグ 記事はArtivlesで管理
  // const tagsArray = [
  //   'web',
  //   'design',
  // ]
  
  //状態を管理、記事の初期値は全選択にする
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState(articles);

  // useEffect(() => {
  //   setSelectedArticles((prevItems) => {
  //     //以下の工程の結果trueになったitemをnewItemsに格納していく
  //     let newItems = prevItems.filter((item) => {
  //       //item(articleの要素)が持っているtagsと選択されたtagが合致するかどうかを確認
  //       let firstResult = selectedTags.every((tag) => {
  //         let firstFind = item.tags.find((tagLists) => {
  //           tagLists === tag;
  //         });
  //         return !!firstFind; //真偽地で返す
  //       });

  //       let secondResult = selectedTags.includes(item.witch);
  //       //
  //       // let secondResult = selectedTags.every((tag) => {
  //       //   let secondFind = item.witch.find((tagLists) => {
  //       //     tagLists === tag;
  //       //   });
  //       //   return !!secondFind;
  //       // });

  //       return firstResult || secondResult;
  //       // return firstResult;
  //     });
  //     return newItems;//newItemsの結果をselectedArticlesに入れる
      
  //   });    
  //   console.log(selectedTags);
  //   console.log(selectedArticles);

  //   return () => {
  //     setSelectedArticles(articles)//選択状態を初期化
  //   };
  // },[selectedTags])

  useEffect(() => {
    let newItems = articles.filter((item) => {
      let firstResult = selectedTags.every((tag) => {
        let firstFind = item.tags.find((tagLists) => tagLists === tag);
        return !!firstFind;
      });

      let secondResult = selectedTags.includes(item.witch);

      return firstResult || secondResult;
    });

    setSelectedArticles(newItems);
  }, [selectedTags]);

  //クリック時の動作
  const push = (e) => {
    e.preventDefault();
    

    //タグが既に選択済みかを確認する
    const thisTag = e.currentTarget.id;
    console.log(thisTag);
    const check = selectedTags.find((tag) => 
      tag === thisTag
    );

    if (!check) {
      setSelectedTags([...selectedTags, thisTag]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== thisTag))
    }
  }

  //スタイル

  return (
    <div>Filter
      <ul className={styles.layout_grid}>
        {selectedArticles.map((item, index) => (
          <li
            key={index} 
            style={{ backgroundImage: `url(${item.src})`}}
            className={styles.grid_item}
          >
            {item.tags && item.tags.map((tagItem,tagIndex) => (
              <button 
                key={tagIndex}
                id={tagItem}
                onClick={push}//クリックした時にselectedタグに追加
              >
                {tagItem}
              </button>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Filter