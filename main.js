
    const selectOption = document.getElementById('select-laptop')

    selectOption.onchange = function(e) {
        let giaValue = document.getElementById('gia')
        giaValue.value = e.target.value
    }

    function handleSubmit() {
        const quantityValue = document.getElementById('quantity').value
        if(quantityValue === '') {
            alert('Vui lòng nhập số lượng')
        }else if(isNaN(quantityValue)) {
            alert('Chỉ nhập dữ liệu kiểu số')
        }else if(quantityValue <= 0) {
            alert('Số lượng phải lớn hơn 0')
            return;
        }
        const thanhtienValue = document.getElementById('thanhtien')
        const checkboxs = document.querySelectorAll('input[type="checkbox"]:checked')
        let checkboxValue = 0
        for(let checkbox of checkboxs) {
            checkboxValue += Number(checkbox.value)
        }
        const radio = document.querySelector('input[type="radio"]:checked')
        thanhtienValue.value = (Number(document.getElementById('gia').value) + checkboxValue + Number(radio.value)) * Number(quantityValue)
        let total = thanhtienValue.value
        return total
    }
    const orderBtn = document.querySelector('.btn-order')
    orderBtn.onclick = function() {
    alert(`Tổng tiền phải trả là: ${handleSubmit()}`)
}
    