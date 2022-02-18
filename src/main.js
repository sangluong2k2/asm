import Navigo from "navigo";
import adminPage from "./pages/admin/dashboard";
import addNewProduct from "./pages/admin/products/add";
import editProduct from "./pages/admin/products/edit";
import listsAdmin from "./pages/admin/products/lists";
import CartPage from "./pages/cart";
import DetailNewsPage from "./pages/detailNews";
import DetailProductPage from "./pages/detailProduct";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import ProductPage from "./pages/ProductPage";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";


const router = new Navigo("/", {linksSelector: "a", hash: true});

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before(done, match) {
        if(JSON.parse(localStorage.getItem('user'))){
            const id = JSON.parse(localStorage.getItem('user')).id;
            if(id == 1){
                done();
            } else {
                document.location.href="/"
            }
        } else {
            document.location.href="/"
        }
      
      
    }
})

router.on ({
    "/": () => print(HomePage),

    // Sản phẩm
    "/products": () => print(ProductPage),
    "/products/:id": (data) => print(DetailProductPage, data.data.id),

    // Bài viết
    "/news":() => print(NewsPage),
    "/news/:id": (data) => print(DetailNewsPage, data.data.id),

    //Đăng nhập, đăng ký
    "/signup": () => print(SignUp),
    "/signin": () => print(Signin),

    // admin
    "/admin": () => print(adminPage),
    "/admin/products": () => print(listsAdmin),
    "/admin/products/add": () => print(addNewProduct),
    "/admin/products/:id/edit": ({data}) => print(editProduct, data.id),

    // giỏ hàng
    "/cart": () => print(CartPage)
});
router.resolve();