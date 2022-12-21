const start_date = document.getElementById('start-date');
const end_date = document.getElementById('end-date');
const submit_btn = document.getElementById('submit-btn');

start_date.addEventListener('change', function (){
    end_date.disabled = false;
    submit_btn.disabled = false;

    var firstDay = new Date(start_date.value);
    var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);

    var dd = nextWeek.getDate();
    var mm = nextWeek.getMonth() + 1;
    var yyyy = nextWeek.getFullYear();

    var max_date = yyyy+"-"+mm+"-"+dd;

    end_date.setAttribute("max", max_date);
})