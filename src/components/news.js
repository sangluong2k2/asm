import { getAll } from "../api/news";

const Posts = {
    async render(){
        const {data} = await getAll();
        return /*html*/ `
             <!-- Posts hot -->
        <div class="grid gap-4 grid-cols-3 grid-rows-2 border w-[1400px] mx-auto rounded-[10px] bg-white my-[20px]">
        ${data.map((Posts) => `
        <a class="hover:scale-[1.05]" href="/Posts/${Posts.id}"><div class="grid bg-[#57d7ff] m-[20px] rounded-[5px] ">
        <img class="p-[2px]  w-[400px] h-[300px] object-cover mx-auto" src="${Posts.img}" alt="">
        <p class="py-[20px] text-center text-[18px]">${Posts.title}</p>
        <p class="py-[20px] text-center text-[18px] text-red-600">${Posts.desc}</p>
        </div></a>
        `).join("")}
      </div>
        `;
    },
};
export default Posts;