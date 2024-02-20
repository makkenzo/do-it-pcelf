import image1 from '../../img/pc.png'
import image2 from '../../img/pc.png'
import image3 from '../../img/pc.png'
import image4 from '../../img/pc.png'

export const images: string[] = [image1.src, image2.src, image3.src, image4.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
