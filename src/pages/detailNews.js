import { get } from "../api/news";
import Footer from "../components/footer";
import Header from "../components/header";

const DetailNewsPage = {
    async render(id) {
        const { data } = await get(id)
        return `
            <div>
                ${Header.render()}
            </div>
            <div class="w-[1200px] mx-auto grid grid-cols-2 my-[50px] bg-white rounded-[10px]"> 
                <div class="m-[20px]">
                    <img src="${data.img}" alt="">
                </div>
                <div class="m-[20px]">
                    <p class="text-[36px] pb-[20px] text-[#027bc6]">${data.title}</p>
                    <p class="text-[36px] pb-[20px] text-red-600">${data.desc}</p>
                    
                    <input type="number" id="inputValue" class="border border-black w-[50px] mb-[10px]" value="1" /> <br>
                   
                </div>
            </div>
            <div id="footer">
                ${Footer.render()}
            </div>
        `;
    },
};

export default DetailNewsPage;