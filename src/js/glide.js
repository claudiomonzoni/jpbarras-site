import Glide from '@glidejs/glide'
import { Controls } from '@glidejs/glide/dist/glide.modular.esm'

export function carru(){
new Glide('.glide',{
 type: 'carousel',
  startAt: 0,
  perView: 1, 
  //focusAt: 'center',
  gap: 10,
  // breakpoints: {
  //   1024: {
  //     perView: 2
  //   },
  //   479: {
  //     perView: 1
  //   }
  // },
  autoplay: 5000
}).mount(
  {Controls}
)



}