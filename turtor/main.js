/**
1. Xây dựng chức năng hiển thị (2 điểm)
Hiển thị danh sách sản phẩm theo dạng table
2. Xây dựng chức năng xóa (2 điểm)
Xóa sản phẩm: 1đ
Xóa có confirm và hiển thị thông báo sau khi xóa thành công : 1đ
3. Xây dựng chức năng thêm mới (2 điểm)
Thêm sản phẩm : 1 đ
Hiển thị thông báo sau khi thêm : 0.5đ
Validate form: 0.5đ
4. Xây dựng chức năng cập nhật sản phẩm (2 điểm)
Cập nhật sản phẩm: 1đ
Hiển thị thông báo sau khi cập nhật: 0.5đ
Validate form: 0.5đ
5. Xây dựng chức năng đăng nhập (1 điểm) 
Đăng nhập thành công : 0.5đ
Thông báo sau khi đăng nhập thành công: 0.5đ
6. Xây dựng giao diện sử dụng bootstrap hoặc tailwindcss (1 điểm)
*/



let url = 'http://localhost:3000/products';
let tbody = document.querySelector('tbody');
let btnAdd = document.querySelector('.btn-add');
let content = document.querySelector('.content');
fetch(url).then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
    let html = data.map(pro => {
        return `    
        <tr>
            <td>${pro.id}</td>
            <td>${pro.name}</td>
            <td>${pro.price}</td>
            <td><button class="btn-edit" data-id="${pro.id}" >Sửa</button> |<button class="btn-del" data-id="${pro.id}" >Xoá</button> </td>
        </tr>
        `
    }).join('');
    console.log(html);
    tbody.innerHTML=html;
    // xoá
    let btnDel  = document.querySelectorAll('.btn-del');
    for (const btn of btnDel) {
        let id = btn.dataset.id;
        btn.addEventListener('click' , ()=>{
            if(confirm("Bạn Có chắc muốn xoá không ?")){
                fetch(`${url}/${id}`,{method:'DELETE',}).then(res=> res.json()).then(()=>{
                    alert('Bạn đã xoá thành công');
                }).catch(err=> console.log(err));
            }
        });
    };
    // sửa
    let btnEdit  = document.querySelectorAll('.btn-edit');
    for (const btn of btnEdit) {
        let id = btn.dataset.id;
        btn.addEventListener('click' , ()=>{

            fetch(`${url}/${id}`).then(res=>res.json()).then(data =>{
                content.innerHTML= /*html */`
            <form action="">
                <input type="text" id="pro_name"value="${data.name}" >
                <input type="number" min="0" id="pro_price" value="${data.price}">
                <input type="submit" value="Sửa" class="btn-submit">
            </form>
            `;
            let btnSubmit = document.querySelector('.btn-submit');
            btnSubmit.addEventListener('click',(e)=>{
                e.preventDefault();
                let pro_name = document.querySelector('#pro_name');
                let pro_price = document.querySelector('#pro_price');
                if(pro_name.value.trim()==""){
                    alert("Bạn Chưa Nhập gì");
                    pro_name.focus();
                    return false;
                }if(pro_price.value.trim()==""){
                    alert("Bạn Chưa Nhập gì");
                    pro_price.focus();
                    return false;
                }
                const new_pro ={
                    id: id,
                    name: pro_name.value,
                    price: pro_price.value,
                }
                // console.log(new_pro)
                fetch(`${url}/${id}`,{method:'PUT', headers:{'Content-Type':'application/json',},body:JSON.stringify(new_pro),}).then(res=> res.json()).then(()=>{
                    alert('bạn đã sửa sản phẩm thành công');
                }).catch(err=> console.log(err));
            })
            
        }).catch(err=>console.log(err));
            
        });
    }
}).catch(err =>{
    console.log(err);
});


// thêm

btnAdd?.addEventListener('click', ()=>{
    content.innerHTML= /*html */`
    <form action="">
        <input type="text" id="pro_name" >
        <input type="number" min="0" id="pro_price">
        <input type="submit" value="Thêm" class="btn-submit">
    </form>
    `
    let btnSubmit = document.querySelector('.btn-submit');
    btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault();
        let pro_name = document.querySelector('#pro_name');
        let pro_price = document.querySelector('#pro_price');
        if(pro_name.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            pro_name.focus();
            return false;
        }if(pro_price.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            pro_price.focus();
            return false;
        }
        const new_pro ={
            name: pro_name.value,
            price: pro_price.value,
        }
        // console.log(new_pro)
        fetch(url,{method:'POST', headers:{'Content-Type':'application/json',},body:JSON.stringify(new_pro),}).then(res=> res.json()).then(()=>{
            alert('bạn đã thêm sản phẩm thành công');
        }).catch(err=> console.log(err));
    })
})


let btnLogin  = document.querySelector(".btn-login");
btnLogin?.addEventListener('click' , e=>{
    e.preventDefault();
        let user = document.querySelector('#txtuser');
        let pass = document.querySelector('#txtpass');
        if(user.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            user.focus();
            return false;
        }if(pass.value.trim()==""){
            alert("Bạn Chưa Nhập gì");
            pass.focus();
            return false;
        }
        fetch('http://localhost:3000/users/').then(res => res.json()).then(data => {
            if(checkLogin(data,user.value,pass.value)){
                alert('Bạn đã đăng nhập thành công');
                window.location.href='index.html';
            }else{
                alert('Tài khoản hoặc mật không đúng');
            }
        }).catch(err=>console.log(err));
});

const checkLogin = function(data,user,pass){
    return data.some(dt =>{
        return dt.username == user && dt.password == pass;
    });
}

 let btnLogout = document.querySelector(".btn-logout");
btnLogout?.addEventListener('click', ()=>{
    if(confirm(' mày có muốn đăng xuất ko>')){
        window.location.href='login.html';
    }
})