import './photoSwipePlugin/photoswipe.css'
import './photoSwipePlugin/default-skin/default-skin.css'
import PhoteSwipe from './photoSwipePlugin/photoswipe'
import PhotoSwipeUI_Default from './photoSwipePlugin/photoswipe-ui-default'

const loadImg = async (imgList) => {
    let promiseArr = imgList.map(item => {
        return new Promise((resolve, reject) => {
            let img = new Image()
            img.src = item.imageUrl
            img.onload = () => {
                resolve({
                    src: item.imageUrl,
                    h: img.height,
                    w: img.width
                })
            }
        })
    })
    const data = await Promise.all(promiseArr)
    return data
}

const openSwipe = async (imgList, index) => {
    let options = {
        index,
        closeOnScroll:false,
        pinchToClose:false,
        closeOnVerticalDrag:false,
        /*  getThumbBoundsFn() {
            const rect = ulRef.current.childNodes[index].getBoundingClientRect()
            const pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width};
          }*/
    }
    const list = await loadImg(imgList)
    const pswpElement = document.getElementsByClassName('pswp')[0]
    // console.log( document.getElementsByClassName('pswp'))
    let gallery = new PhoteSwipe(pswpElement, PhotoSwipeUI_Default, list, options);
    gallery.init();
}

export  default openSwipe