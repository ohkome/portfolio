'use client'
import React, { useEffect, useState } from 'react'
import styles from './Works.module.css'
import { articles } from './ArticleData'
import Modal from '../compornents/Modal/Modal'
import SectionTitle from '../compornents/SectionTitle/SectionTitle'
import Tooltip from '../compornents/Tooltip/Tooltip'

function Filter() {
  //状態を管理、記事の初期値は全選択にする
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedArticles, setSelectedArticles] = useState(articles);
  // モーダル用のステート
  const [selectedModalItem, setSelectedModalItem] = useState(null); 
  const [show, setShow] = useState(false);

  useEffect(() => {
     //以下の工程の結果trueになったitemをnewItemsに格納していく
    let newItems = articles.filter((item) => {
      //item(articleの要素)が持っているtagsと選択されたtagが合致するかどうかを確認
      let firstResult = selectedTags.every((tag) => {
        let firstFind = item.tags.find((tagLists) => tagLists === tag);
        return !!firstFind;
      });

      let secondResult = selectedTags.includes(item.which);

      return firstResult || secondResult;
    });

    setSelectedArticles(newItems);//newItemsの結果をselectedArticlesに入れる
  }, [selectedTags]);

  //クリック時の動作
  const push = (e) => {
    e.preventDefault();

    //タグが既に選択済みかを確認する
    const thisTag = e.currentTarget.id;
    const check = selectedTags.find((tag) => 
      tag === thisTag
    );

    if (!check) {
      setSelectedTags([...selectedTags, thisTag]);
    } else {
      setSelectedTags(selectedTags.filter((tag) => tag !== thisTag))
    }
  }

// モーダルを開く関数
const openModal = (item) => {
  setSelectedModalItem(item);
  setShow(true);
};

const closeModal = () => {
  setShow(false); // モーダルを閉じる
};

  return (
    <div className={styles.works}>
      <div className={styles.title}>
        <SectionTitle 
            enText="Works" 
            jaText="作品"
            enMainColor="#000"
            jaColor="#ccc"
            boxColor="#ccc"
            className={styles.title}
        />
      </div>
      
      <div className={styles.button}>
        <button id='design' 
          onClick={push}
          style={{
            borderLeft: selectedTags.includes('design') ? 'solid 5px #ccc' : '',
          }}
          className={styles.which}
        >
          design
        </button>
        
        <button id='web' 
          onClick={push}
          style={{
            borderLeft: selectedTags.includes('web') ? 'solid 5px #ccc' : '',
          }}
          className={styles.which}
        >
        web
        </button>
      </div>
      

      <ul className={styles.layout_grid}>
        {selectedArticles.map((item, index) => (
          <li
            key={index} 
            style={{ backgroundImage: `url(${item.src})`}}
            className={styles.grid_item}
          >
            <div className={styles.modal_button} onClick={() => openModal(item)}></div>
            <div className={styles.tags_box}>
              {item.tags && item.tags.map((tagItem,tagIndex) => (
                <button 
                  key={tagIndex}
                  id={tagItem}
                  onClick={push}//クリックした時にselectedタグに追加
                  style={{
                    color: selectedTags.includes(tagItem) ? '#ccc' : '',
                  }}
                  className={styles.tags}
                >
                  {tagItem}
                </button>
              ))}
            </div>
            
          </li>
        ))}

      </ul>

        {/* モーダルコンポーネント */}
      {selectedModalItem && show && (
        <Modal
          src={selectedModalItem.src}
          title={selectedModalItem.title}
          field={selectedModalItem.field}
          time={selectedModalItem.time}
          url={selectedModalItem.url}
          concept={selectedModalItem.concept}
          point={selectedModalItem.point}
          closeModal={closeModal}
        />
      )}

    </div>
  )
}

export default Filter