import iconCoffe from '../img/default-orange.png';
import style from '../style/Support.module.css';

export function Support() {
   
   const { wraper, image } = style;

   return (
      <a
						target="_blank"
						
         href={"https://test-payframe.ckassa.ru/?service=100-3266-1&%D0%9F%D0%9E%D0%97%D0%AB%D0%92%D0%9D%D0%9E%D0%99=1111&amount=1000&pf_sps=1"}
						// onClick={() => setVisibility(false)}
						rel="noreferrer">
						оплатить
					</a>
   );
}
