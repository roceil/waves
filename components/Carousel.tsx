import Image from 'next/image'
import { IBannerProps } from '@/types/interface'

export function Carousel(props: IBannerProps) {
  return (
    <section className='recommendation' id='recommendation'>
      <div className='wrap'>
        <h3 className='section-title'>好評推薦</h3>
        <div className='recommendation-wall'>
          <ul className='gallery-top'>
            <li className='recommendation-card'>
              <Image
                priority
                unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/cXcOLhu.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/I9L7WOr.png'
                    alt=''
                  />
                  <div>
                    <p>王六角</p>
                    <p className='recommend-text'>Jodan 雙人床架</p>
                  </div>
                </div>
                <p>CP值很高。</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/BefHmH2.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/CUFGfay.png'
                    alt=''
                  />
                  <div>
                    <p>Leaf</p>
                    <p className='recommend-text'>Antony 雙人床架</p>
                  </div>
                </div>
                <p>很喜歡～還有送三年保固～</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3IATkJG.png?raw=true'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/8WwZsLS.png'
                    alt=''
                  />
                  <div>
                    <p>美濃鄧子琪</p>
                    <p className='recommend-text'>Charles 系列儲物組合</p>
                  </div>
                </div>
                <p>廚房必備美用品！</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/HvT3zlU.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/NycuPVy.png'
                    alt=''
                  />
                  <div>
                    <p>isRaynotArray</p>
                    <p className='recommend-text'>Antony 雙人床架</p>
                  </div>
                </div>
                <p>物超所值!</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/Ed7bxLr.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/zdFOQIv.png'
                    alt=''
                  />
                  <div>
                    <p>程鮭魚</p>
                    <p className='recommend-text'>Louvre 雙人床架</p>
                  </div>
                </div>
                <p>租屋用剛剛好</p>
              </div>
            </li>
          </ul>
          <ul className='gallery-bottom'>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/BefHmH2.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/W7fyzp2.png'
                    alt=''
                  />
                  <div>
                    <p>小杰</p>
                    <p className='recommend-text'>Louvre 雙人床架</p>
                  </div>
                </div>
                <p>非常舒適，有需要會再回購</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/mjA01Tk.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/8O1cOnG.png?raw=true'
                    alt=''
                  />
                  <div>
                    <p>江八角</p>
                    <p className='recommend-text'>Charles 雙人床架</p>
                  </div>
                </div>
                <p>品質不錯～</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/npA3DgP.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/C0NDvSA.png'
                    alt=''
                  />
                  <div>
                    <p>juni讚神</p>
                    <p className='recommend-text'>Antony 床邊桌</p>
                  </div>
                </div>
                <p>讚ㄉ！</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/Ed7bxLr.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://i.imgur.com/hUsTZDm.png'
                    alt=''
                  />
                  <div>
                    <p>久安說安安</p>
                    <p className='recommend-text'>Antony 單人床架</p>
                  </div>
                </div>
                <p>一個躺剛剛好。</p>
              </div>
            </li>
            <li className='recommendation-card'>
              <Image
              priority
              unoptimized={true}
                width={96}
                height={96}
                loader={props.customLoader}
                src='https://i.imgur.com/mjA01Tk.png'
                alt=''
              />
              <div className='recommend-content'>
                <div className='recommend-img'>
                  <Image
                  priority
                  unoptimized={true}
                    width={40}
                    height={40}
                    loader={props.customLoader}
                    src='https://github.com/hexschool/js-training/blob/main/%E7%AC%AC%E4%B9%9D%E9%80%B1%E4%B8%BB%E7%B7%9A%E4%BB%BB%E5%8B%99%E5%9C%96%E5%BA%AB/3ako6QX.png?raw=true'
                    alt=''
                  />
                  <div>
                    <p>PeiQun</p>
                    <p className='recommend-text'>Antony 雙人床架</p>
                  </div>
                </div>
                <p>睡起來很舒適</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
