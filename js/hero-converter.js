var heroForm = document.getElementById('heroForm');
function handleHeroFormSubmit(e){
    e.preventDefault();
    var res;
    var unitValue = e.target.unit_value.value;
    var fromTo = e.target.from_to.value;
    if(unitValue.length && fromTo.length){
        var amount  = parseFloat(unitValue);
        var option = parseInt(fromTo);
        if(option == 0){
            res  =  (amount * 0.453592).toFixed(3) + ' kg';
        }else if(option==1){
            res = (amount * 2.20462).toFixed(3) + ' lbs';
        }
    }else{
        res = 'Fill in proper value'
    }
    e.target.querySelector('span').textContent = res;
}
heroForm.addEventListener('submit',handleHeroFormSubmit);