let url = ' http://localhost:3000/products';
let tbody = document.querySelector('tbody');
let content = document.querySelector('.content');
fetch(url).then(res=> res.json()).then(data=>{
    let html = data.map(pro =>(
        `<tr>
        <td>${pro.id}</td>
        <td>${pro.name}</td>
        <td>${pro.price}</td>
        <td><img src="${pro.image}" alt="" width="150px"></td>
        <td><button class="btn-del" data-id="${pro.id}">Xoa</button><button class="btn-edit" data-id="${pro.id}">sua</button></td>
    </tr>`
    )).join('');
    tbody.innerHTML = html;

    let btnDel = document.querySelectorAll('.btn-del');
    for (const btn of btnDel) {
        let id = btn.dataset.id;
        btn.addEventListener('click',()=>{
            if(confirm('ban co muon xoa ko')){
                fetch(`${url}/${id}`,{method:'delete'},).then(res=> res.json()).then(()=>{alert('ban xoa thanh cong')}).catch(err =>console.log(err));
            }
        })
    }


    let btnEdit = document.querySelectorAll('.btn-edit');
    for (const btn of btnEdit) {
        let id = btn.dataset.id;
        btn.addEventListener('click',()=>{
            fetch(`${url}/${id}`).then(res=> res.json()).then(data=>{
                    content.innerHTML=
        `                <form action="">
        <input type="text" id="pro_name" value="${data.name}">
        <input type="text" id="pro_price" value="${data.price}">
        <input type="submit" class="btn-submit" value="sua">
    </form>`
        let btnSub = document.querySelector('.btn-submit');
        btnSub.addEventListener('click',(e)=>{
            e.preventDefault();
            let proname = document.querySelector('#pro_name');
            let proprice = document.querySelector('#pro_price');
            if(proname.value.trim()==''){
                alert('ban can nhap ten');
                proname.focus();
                return false;
            }
            if(proprice.value.trim()==''){
                alert('ban can nhap ten');
                proprice.focus();
                return false;
            }
            const pro_new ={
                name: proname.value,
                price: proprice.value,

            }
            fetch(`${url}/${id}`,{method:'PUT', headers:{'Content-Type':'application/json',},body:JSON.stringify(pro_new),}).then(res=> res.json()).then(()=>{
                alert('bạn đã sua sản phẩm thành công');
            }).catch(err=> console.log(err));
            }).catch(err =>console.log(err));
        })
    })
}
}).catch(err=>console.log(err));


let btnAdd = document.querySelector('.btn-add');
btnAdd.addEventListener('click',()=>{
    content.innerHTML=
    `                <form action="">
    <input type="text" id="pro_name">
    <input type="text" id="pro_price">
    <input type="text" id="pro_image" name="image">
    <input type="submit" class="btn-submit" value="tao">
</form>`
    let btnSub = document.querySelector('.btn-submit');
    btnSub.addEventListener('click',(e)=>{
        e.preventDefault();
        let proname = document.querySelector('#pro_name');
        let proprice = document.querySelector('#pro_price');
        let proimage=document.querySelector('#pro_image')
        if(proname.value.trim()==''){
            alert('ban can nhap ten');
            proname.focus();
            return false;
        }
        if(proprice.value.trim()==''){
            alert('ban can nhap ten');
            proprice.focus();
            return false;
        }
        const pro_new ={
            name: proname.value,
            price: proprice.value,
            image : proimage.value,

        }
        fetch(url,{method:'POST', headers:{'Content-Type':'application/json',},body:JSON.stringify(pro_new),}).then(res=> res.json()).then(()=>{
            alert('bạn đã thêm sản phẩm thành công');
        }).catch(err=> console.log(err));
    })
})
