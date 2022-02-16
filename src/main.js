import Navigo from "navigo";
import adminPage from "./pages/admin/dashboard";
import addNewProduct from "./pages/admin/news/add";
import editProduct from "./pages/admin/news/edit";
import listsAdmin from "./pages/admin/news/lists";
import CartPage from "./pages/cart";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/homePage";
import NewsPage from "./pages/newsPage";
import Signin from "./pages/signin";
import SignUp from "./pages/signup";


const router = new Navigo("/", {linksSelector: "a", hash: true});

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on ({
    "/": () => print(HomePage),
    "/news": () => print(NewsPage),
    "/news/:id": (data) => print(DetailNewsPage, data.data.id),
    "/signup": () => print(SignUp),
    "/signin": () => print(Signin),
    "/admin": () => print(adminPage),
    "/admin/news": () => print(listsAdmin),
    "/admin/news/add": () => print(addNewProduct),
    "/admin/news/:id/edit": ({data}) => print(editProduct, data.id),
    "/cart": () => print(CartPage)
});
router.resolve();