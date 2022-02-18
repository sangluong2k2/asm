import Banner from "../components/banner"
import Footer from "../components/footer";
import Header from "../components/header";
import Posts from "../components/news";
import Product from "../components/product"

const HomePage = {
    async render() {
        return /*html*/ `
            <div>
                ${Header.render()}
            </div>
            <div id="banner">
                ${Banner.render()}
            </div>
            <div class="w-[1400px] mx-auto border rounded-br-[20px] rounded-tl-[20px] bg-[#57d7ff]">
               <p class="text-center py-5 font-bold text-[17px] text-white ">SẢN PHẨM HOT</p>
            </div>
            <div id="products">
                ${ await Product.render()}
            </div>
            <div id="news">
                ${ await Posts.render()}
            </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `;
    },
    aferRender(){
        Header.render();
    }
};

export default HomePage;
