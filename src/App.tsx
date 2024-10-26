import { createElement, useState as huita } from 'react'
import { onClickMinusHandler, onClickPlusHandler, sus_hyeZOVect2210} from './zalupa'

const URL = import.meta.env.VITE_BASE_API_URL

const preview = console.log

preview(URL)
export function prostoFNOtPizdi1 (){
  return 228
}

const huita228 = function(arg: any){
  preview('ага, хуита на месте')
  return huita(arg)
}

export let prostFNOtPizdi2 = function () {

  preview('вызывлвсь функция с реакт')

  const aboba229 = huita228(0)

  const aboba1499 = aboba229[0]

  const aboba1488 = aboba229[0]


  console.log(aboba1488, 'aboba1488')
  console.log(aboba1499, 'aboba1499')


  sus_hyeZOVect2210([], () => preview(aboba229))

  return (
    <div style={{alignContent: 'center'}}>
      <button style={{marginRight: '5px'}} onClick={() => onClickPlusHandler(aboba229)}>
        +
      </button>

      <button onClick={() => onClickMinusHandler(aboba229)}>
        -
      </button>
      <div>
        {abobaView(aboba229)}
      </div>
    </div>
  )
}

let abobaView = function (aboba){
 return aboba[0] + ' 228' + aboba[0]
}



let umpa_lumpa = () => createElement('h1', { children: "Hello World" })



  // const [posts, setPosts] = useState([])

  // const fetchPosts = async () => {
  //    const resp = await fetch(URL)
  //    const json = await resp.json()
  //    console.log(json, 'json')
  //    return json
  // }

  // useEffect(() => {
  // // Неправильно! Вызовет бесконечный цикл
  //  setCounter(counter + 1);
  // }, [counter]);


  // setTimeout()
  // setInterval()

  // useEffect(() => {
  //   const interval = setInterval(() => setCounter(counter - 1), 1000)
  //   return () => clearInterval(interval)
  // }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => setCounter(counter - 1), 1000)
  //   return () => clearInterval(interval)
  // }, []);

  // useEffect((): void => {
  //   const resp = fetchPosts()
  //   setPosts(() => resp)
  // }, []);

