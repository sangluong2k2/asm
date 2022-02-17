import { update } from "../../../api/products"
import HeaderAdmin from "../../../components/headerAdmin"
import { get } from "../../../api/products"


const editProduct = {
    async render(id) {
        const { data } = await get(id)
        return /*html*/`
        <div>${HeaderAdmin.render()}</div>
        <div class="w-[1200px] mx-auto ">
        <form action="" id="edit_product" class="border w-[1400px] mx-auto p-[30px]">
          
            <label for="" class="text-[17px] font-bold">Tiêu đề sản phẩm</label> <br>
            <input type="text" placeholder="Tiêu đề sản phẩm..." value="${data.title}" id="title_product"
              class="border border-black rounded-[5px] p-[5px] w-full"> <br>

            <label for="" class="text-[17px] font-bold  mt-[20px]">Giá</label> <br>
            <input type="number" placeholder="Giá sản phẩm" value="${data.price}" id="price_product"
              class="border border-black rounded-[5px] p-[5px] w-full">
         
              <label for="" class="text-[17px] font-bold  mt-[20px]">Ảnh</label> <br>
              <img href="${data.img}" id="image_product">
              
              <button class="border p-[20px] rounded-[30px] mt-[20px] w-[200px] text-[18px] font-bold text-white bg-blue-400 hover:bg-blue-600">Sửa sản phẩm</button> 
        </form>
        </div>
        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector('#edit_product');
        formEdit.addEventListener('submit', (e) => {
            e.preventDefault();
            update({
                id,
                title: document.querySelector('#title_product').value,
                price: document.querySelector('#price_product').value,
                img: document.querySelector('#image_product').value
            })
                .then((result) => console.log(result.data))
                .catch((error) => console.log(error))
        })
    }
};
export default editProduct;