// import React from 'react'
// import Image from 'next/image'
// import styles from './Modal.module.css'

// const Modal = (props) => {
//   return (
//     <div className={styles.wrapper}>Modal
//         <article className={styles.article}>
//             <div className={styles.top}>
//                 <Image
//                 src={props.src}
//                 alt={props.title}
//                 fill
//                 />
//                 <div className={top_text}>
//                     <h2>{props.title}</h2>
//                     <dl>
//                         <dt className={styles.dt}>担当</dt>
//                         <dd className={styles.dd}>{props.field}</dd>
//                         <dt className={styles.dt}>制作期間</dt>
//                         <dd className={styles.dd}>{props.time}</dd>
//                         {props.url && <><dt className={styles.dt}>URL</dt><dd>{props.url}</dd></>}
//                     </dl>
//                 </div>
//             </div>

//             <div className={styles.content}>
//                 <h3 className={styles.content_title}>コンセプト</h3>
//                 <p>{props.concept}</p>
//                 <h3 className={styles.content_title}>ポイント</h3>
//                 <ul>
//                     {props.point.map((item, index) => (
//                         <li key={index}>{item}</li>
//                     ))}
//                 </ul>
//             </div>
//         </article>
//     </div>
//   )
// }

// export default Modal



import React from 'react';
import Image from 'next/image';
import styles from './Modal.module.css';

const Modal = (props) => {
    
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={props.closeModal}>
                    &times;
                </button>
            
                <div className={styles.layout}>
                    <article className={styles.article}>
                        <div className={styles.top}>
                            <Image 
                            src={props.src} 
                            alt={props.title} 
                            fill 
                            className={styles.img}
                            />
                            <div className={styles.topText}>
                                <h2>{props.title}</h2>
                                <dl className={styles.dl}>
                                <dt className={styles.dt}>担当</dt>
                                <dd className={styles.dd}>{props.field}</dd>
                                <dt className={styles.dt}>制作期間</dt>
                                <dd className={styles.dd}>{props.time}</dd>
                                {props.url && (
                                <>
                                    <dt className={styles.dt}>URL</dt>
                                    <dd>{props.url}</dd>
                                </>
                                )}
                            </dl>
                            </div>
                        </div>

                        <div className={styles.content}>
                            <h3 className={styles.contentTitle}>コンセプト</h3>
                            <p>{props.concept}</p>
                            <h3 className={styles.contentTitle}>ポイント</h3>
                            <ul>
                            {props.point.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                            </ul>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Modal;





