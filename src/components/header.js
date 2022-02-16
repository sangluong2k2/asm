import { reRender } from "../utils/reRender";
const Header = {
    render() {
        return /* html */ `
         <!-- Header -->
      <div class="flex">

      <!-- logo -->
      <div>
        <a href="#/"><img class="max-w-[180px] m-[20px]" src="https://res.cloudinary.com/dkhutgvlb/image/upload/v1642921093/POLY_SHOP_free-file_wq7ml5.png" alt=""></a>
      </div>

      <!-- search -->
      <div>
        <form class="after:clear-both after:table my-[40px] mx-[100px]">
          <input type="text" placeholder="Search.." name="search" class="p-[10px] text-[17px] border border-solid border-grey float-left w-[700px] bg-white">
          <button class="hover:bg-[#027bc6] float-left w-[100px] p-[10px] bg-[#57d7ff] text-white text-[17px] border border-solid border-grey border-l-none cursor-pointer " type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>

      <!-- signin/signup -->
        <div>
        <a href="#/signup"><button class="border p-[10px] font-bold my-[40px] mx-[30px] w-[100px] bg-[#57d7ff] text-white text-[17px] hover:bg-[#027bc6]">Đăng kí</button></a>
        <a href="#/signin"><button class="border p-[10px] font-bold my-[40px] mx-[20px] bg-[#57d7ff] text-white text-[17px] hover:bg-[#027bc6]">Đăng nhập</button></a>
      </div>
    </div>

    <!-- nav -->
    <div class="bg-[#027bc6]">
    <ul class="flex list-none">
      <li class="p-[20px] text-white text-[17px] font-bold hover:bg-[#57d7ff]"><a class="block" href="#/">Trang chủ</a></li>
      <li class="p-[20px] text-white text-[17px] font-bold hover:bg-[#57d7ff]"><a class="block" href="#/news">Tin tức</a></li>
      <li class="p-[20px] text-white text-[17px] font-bold hover:bg-[#57d7ff]"><a class="block" href="#/admin">Admin </a></li>
      <li class="p-[20px] text-white text-[17px] font-bold hover:bg-[#57d7ff]"><a class="block" href="#/cart">Giỏ hàng</a></li>
    </ul>
  </div>
        `;
    },
};

export default Header;