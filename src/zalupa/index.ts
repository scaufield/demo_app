import { useEffect as huitaZachemTo} from "react"

export const sus_hyeZOVect2210 = ( deps: any[], callback: any ) => {
    huitaZachemTo(()=> callback(), deps)
}

export const onClickPlusHandler = function(aboba) {
    aboba[1](aboba[0] + 1)
  }

export const onClickMinusHandler = function(aboba)  {
    aboba[1](aboba[0] - 1)
  }