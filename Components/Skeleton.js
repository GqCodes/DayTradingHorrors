import style from './Skeleton.module.scss';

export default function Skeleton() {
  return (
    <div className={style.skeleton}>
      <div className={style.sBanner}></div>
      <div className={style.sHeader}></div>
      <div className={style.sContent}></div>
      <div className={style.sContent}></div>
      <div className={style.sContent}></div>
    </div>
  );
}
