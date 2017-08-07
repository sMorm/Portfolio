
import img1 from '../media/image2.jpg'
import img2 from '../media/image3.jpg'
import img3 from '../media/image4.jpg'
import img4 from '../media/image5.jpg'
import img5 from '../media/image6.jpg'
import img6 from '../media/image7.jpg'
import img7 from '../media/image8.jpg'
import img8 from '../media/image9.jpg'
import shuffle from 'shuffle-array';

const imgArray = [ { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 }, { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 }] 

export default shuffle(imgArray);
// export default imgArray;