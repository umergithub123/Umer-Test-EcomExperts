
let inputs = document.querySelectorAll('input[type=radio][name=Color]');
let color_dropdown = document.querySelector('select[name="options[Color]"]');
let size_dropdown = document.querySelector('select[name="options[Size]"]');
let all_imgs = document.querySelectorAll('.product__media img');


inputs.forEach((input)=>{
    input.addEventListener('click',(e)=>{
      let currnt_input = e.target;
      let value = currnt_input.getAttribute('value');
      color_dropdown.value = value;
      let currnt_img = document.querySelector('.product__media-item img[alt="'+currnt_value+'"]');
      all_imgs.forEach((img)=>{
      img.closest('.product__media-item').style.display =  'none';               
      })        
      currnt_img.closest('.product__media-item').style.display = 'block';
    })
})

// retargets
size_dropdown.addEventListener('change',(e)=>{
    let size_dropdown_val = e.target.value;
    document.querySelector('fieldset.js.product-form__input.Size input[value="'+size_dropdown_val+'"]').click();
})

// make size select unselected
document.addEventListener('DOMContentLoaded',()=>{
    size_dropdown.value = 'unselected';
})


// global add to cart function
function addToCart(variantId, maxQuantity) {
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity: 1,
        id: variantId
      }),
    })
    .then((response) => response.json())
    .then((data)=>{
    })
    .catch((error) => {

    })
    .finally(() => {
       
        window.location = window.routes.cart_url;
    })
  }