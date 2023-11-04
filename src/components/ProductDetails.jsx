import { useContext } from 'react';
import '../styles/style.css';
import { ThemeContext } from '../context-api/theme/ThemeContext';
const ProductDetails =()=>{

    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode; 
    return (
        <div className={`product-container ${darkMode?"product-dark":"product-light"}`}>
            <div >
                <h2>{darkMode?"Dark Theme":"Light Theme"}</h2>
            </div>
            <div >
                <img src="https://dummyimage.com/600x300/000/fff&text=Product+Image" alt="Prod_Img" />
            </div>
            <div className={`product-description ${darkMode?"product-dark":"product-light"}`}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem accusantium molestias, iste sequi harum placeat ducimus dignissimos delectus officia quibusdam quae voluptas blanditiis eaque, neque amet iure aperiam distinctio officiis!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, fuga animi. Impedit nam autem porro maxime. Corrupti voluptas rem perferendis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dicta qui eveniet commodi, officiis veritatis velit. Quod, unde maxime et molestiae ipsa aut recusandae laborum! Adipisci aperiam eius quis sapiente.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error harum neque! Voluptates obcaecati laudantium corrupti repudiandae eveniet esse natus maxime facere deleniti, nesciunt cum sapiente praesentium ipsum inventore itaque.
            </div>
        </div>
    )
}
export default ProductDetails;
