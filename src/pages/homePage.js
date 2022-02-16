import Banner from "../components/banner"
import Footer from "../components/footer";
import Header from "../components/header";
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
            <div id="products">
                ${ await Product.render()}
            </div>
            <div id="products">
                ${ await Product.render()}
            </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `;
    },
};

export default HomePage;
