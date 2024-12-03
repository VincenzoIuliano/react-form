import style from './Button.module.css'

export default function Button({text='Leggi di piu'}) {
  return (
    <button className={style.button}>{text}</button>
  )
}