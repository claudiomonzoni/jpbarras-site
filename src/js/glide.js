import Glide from "@glidejs/glide";
import { Controls } from "@glidejs/glide/dist/glide.modular.esm";

export function slide() {
  new Glide(".slide", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    //focusAt: 'center',
    gap: 10,
    peek: {
      before: 0,
      after: 70
    },
    breakpoints: {
      1024: {
        perView: 2
      },
      479: {
        perView: 1
      }
    },
    // autoplay: 5000,
  }).mount({ Controls });
  
}
