function onLoad(){
    fetch('asset/flowers.json').then(response =>{
        return response.json()
    }).then(data => {
        addFlowerList(data)
    })
}

function addFlowerList(FlowerList){
    const output = document.getElementById('output')
    let index = 0
    while(index<9){
        let row = document.createElement('div')
        row.classList.add("row","justify-content")
        for(let i = 0;i<3;i++){
            let flower = FlowerList[index]
            let col = document.createElement('div')
            col.classList.add("col-lg-4","col-md-6","col-sm-12")
            let card = document.createElement('div')
            card.classList.add("card","flower")
            card.name="flower"
            card.style.width="18rem"
            let flowerIMG = document.createElement('img')
            flowerIMG.src = flower.ImageLink
            flowerIMG.classList.add("card-img-top")
            card.appendChild(flowerIMG)
            let body = document.createElement('div')
            body.classList.add("card-body")
            let bold = document.createElement('b')
            let p = document.createElement('p')
            p.classList.add("card-text1")
            p.innerHTML = flower.Name
            bold.appendChild(p)
            body.appendChild(bold)
            let starfill = document.createElement('img')
            starfill.src="asset/images/star-fill.svg"
            let staremp = document.createElement('img')
            staremp.src="asset/images/star-fill.svg"
            for(let y = 0;y<5;y++){
                if(y<flower.StarNo){
                    body.appendChild(starfill)
                }else{
                    body.appendChild(staremp)
                }
            }
            let p1 = document.createElement('p')
            p1.classList.add("card-text2")
            p1.innerHTML = flower.Seller
            body.appendChild(p1)
            let p2 = document.createElement('p')
            p2.classList.add("card-text3")
            p2.innerHTML = "THB " + flower.Price
            body.appendChild(p2)
            card.appendChild(body)
            col.appendChild(card)
            row.appendChild(col)
            index++
        }
        output.appendChild(row)
    }
}